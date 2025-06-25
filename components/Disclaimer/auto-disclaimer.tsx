"use client"

import * as React from "react"
import { DisclaimerDialog } from "./disclaimer-dialog"

interface AutoDisclaimerProps {
  type: "recommendation" | "services" | "consent"
  delay?: number
}

// Cookie utility functions
const setCookie = (name: string, value: string, days = 30) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null

  const nameEQ = name + "="
  const ca = document.cookie.split(";")

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

const hasCookie = (name: string): boolean => {
  return getCookie(name) !== null
}

export function AutoDisclaimer({ type, delay = 1000 }: AutoDisclaimerProps) {
  const [open, setOpen] = React.useState(false)
  const [hasShown, setHasShown] = React.useState(false)

  React.useEffect(() => {
    // Create unique cookie names for each disclaimer type
    const shownCookieName = `disclaimer_shown_${type}`

    // Check if THIS SPECIFIC disclaimer has been shown before
    const hasShownThisDisclaimer = hasCookie(shownCookieName)

    console.log(`Checking ${type} disclaimer:`, {
      cookieName: shownCookieName,
      hasShownBefore: hasShownThisDisclaimer,
      hasShown: hasShown,
    })

    // Only show if THIS specific disclaimer hasn't been shown AND we haven't shown it in this session
    if (!hasShownThisDisclaimer && !hasShown) {
      const timer = setTimeout(() => {
        console.log(`Showing ${type} disclaimer after ${delay}ms delay`)
        setOpen(true)
        setHasShown(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [type, delay, hasShown])

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Mark THIS SPECIFIC disclaimer as shown with unique cookie name
      const shownCookieName = `disclaimer_shown_${type}`
      setCookie(shownCookieName, "true", 30) // 30 days for "shown" status
      console.log(`Set cookie: ${shownCookieName} = true`)
    }
  }

  const handleAgree = () => {
    console.log(`User agreed to ${type} disclaimer`)

    // Set agreement cookies with unique names for THIS disclaimer type
    const agreedCookieName = `disclaimer_agreed_${type}`
    const agreedDateCookieName = `disclaimer_agreed_date_${type}`

    setCookie(agreedCookieName, "true", 365) // 365 days for agreement
    setCookie(agreedDateCookieName, new Date().toISOString(), 365)

    console.log(`Set agreement cookies for ${type}:`, {
      agreed: agreedCookieName,
      date: agreedDateCookieName,
    })
  }

  return <DisclaimerDialog type={type} open={open} onOpenChange={handleOpenChange} onAgree={handleAgree} />
}
