"use client"

import * as React from "react"
import { AlertTriangle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DisclaimerDialogProps {
  type: "recommendation" | "services" | "consent"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onAgree?: () => void
}

export function DisclaimerDialog({ type, open, onOpenChange, onAgree }: DisclaimerDialogProps) {
  const [agreed, setAgreed] = React.useState(false)

  const getDisclaimerContent = () => {
    switch (type) {
      case "recommendation":
        return {
          title: "Recommendation Disclaimer",
          icon: <Info className="h-5 w-5 text-orange-500" />,
          content:
            "Some links may refer to third-party products with which the dietitian may have a professional association. Please consult a healthcare provider before use.",
          showCheckbox: false,
        }
      case "services":
        return {
          title: "Services Disclaimer",
          icon: <Info className="h-5 w-5 text-orange-500" />,
          content:
            "The dietary guidance on this site is provided by a qualified clinical dietitian. It is not a substitute for personalised medical care. Please consult your physician where necessary. By using this site, you agree to our terms and disclaimer.",
          showCheckbox: false,
        }
      case "consent":
        return {
          title: "Disclaimer & Consent",
          icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
          content:
            "The dietary consultations and advice offered on this website are provided by a qualified clinical dietitian and are intended to support general health and wellness. This is not a replacement for diagnosis or treatment by a physician. By proceeding, you confirm that you understand and agree to follow professional advice responsibly and that you accept our terms and conditions.",
          showCheckbox: true,
        }
      default:
        return {
          title: "Disclaimer",
          icon: <Info className="h-5 w-5 text-orange-500" />,
          content: "",
          showCheckbox: false,
        }
    }
  }

  const getPositionClasses = () => {
    if (type === "consent") {
      // Bottom center positioning for consent dialog with increased width
      return "w-full min-w-[90%] max-w-2xl fixed bottom-4 left-1/2 right-auto top-auto -translate-x-1/2 translate-y-0 data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2 mx-4"
    } else {
      // Bottom right positioning for services and recommendation
      return "sm:max-w-md fixed bottom-4 right-4 left-auto top-auto translate-x-0 translate-y-0 data-[state=open]:slide-in-from-right-2 data-[state=closed]:slide-out-to-right-2"
    }
  }

  const { title, icon, content, showCheckbox } = getDisclaimerContent()

  const handleAgree = () => {
    if (onAgree) {
      onAgree()
    }
    if (onOpenChange) {
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={getPositionClasses()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {icon}
            {title}
          </DialogTitle>
          <DialogDescription className="text-left leading-relaxed">{content}</DialogDescription>
        </DialogHeader>
        {showCheckbox && (
          <div className="flex items-center space-x-2 py-4">
            <Checkbox id="agree" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
            <label
              htmlFor="agree"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions
            </label>
          </div>
        )}
        <DialogFooter className="flex-col sm:flex-row gap-2">
          {showCheckbox ? (
            <>
              <Button
                variant="outline"
                onClick={() => onOpenChange?.(false)}
                className="bg-white text-black border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button onClick={handleAgree} disabled={!agreed} className="bg-orange-600 hover:bg-orange-400 hover:text-black text-white">
                I Agree
              </Button>
            </>
          ) : (
            <Button onClick={() => onOpenChange?.(false)} className="bg-orange-600 hover:bg-orange-400 hover:text-black text-white">
              Understood
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
