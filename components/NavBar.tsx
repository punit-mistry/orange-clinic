"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

    
    <button
            onClick={toggleSidebar}
            className="md:hidden fixed left-4 transform -translate-y-1/2 z-51 top-8"
            aria-label="Toggle navigation menu"
          >
            <div className="w-10 h-10 relative group">
              <img 
                src="/logo.png" 
                alt="Orange Clinic Logo"
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 "
              />
              <div className="absolute inset-0 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>


      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300 rounded-full font-semibold hover:shadow-2xl text-clip cursor-pointer",
          scrolled
            ? "md:shadow-lg md:backdrop-blur md:border"
            : "bg-transparent",
          className
        )}
      >
        <div className="flex gap-3 items-center justify-center p-6">
          {/* Logo Button - Only visible on mobile */}
     

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-3 items-center justify-center">
            <Link 
              href="/" 
              className={cn(
                "transform-gpu hover:scale-105 transition-all ease-in-out hover:underline-offset-4",
                pathname === "/" ? "text-orange-500" : "text-foreground hover:text-foreground"
              )}
            >
              Home 
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "transform-gpu hover:scale-105 transition-all ease-in-out hover:underline-offset-4",
                pathname === "/about" ? "text-orange-500" : "text-foreground hover:text-foreground"
              )}
            >
              About 
            </Link>
            <Link 
              href="/services" 
              className={cn(
                "transform-gpu hover:scale-105 transition-all ease-in-out hover:underline-offset-4",
                pathname === "/services" ? "text-orange-500" : "text-foreground hover:text-foreground"
              )}
            >
              Services 
            </Link>
            <Link 
              href="/recommendation" 
              className={cn(
                "transform-gpu hover:scale-105 transition-all ease-in-out hover:underline-offset-4",
                pathname === "/recommendation" ? "text-orange-500" : "text-foreground hover:text-foreground"
              )}
            >
              Recommendation Products
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full md:w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out z-40 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 space-y-4 mt-20">
          <Link
            href="/"
            className={cn(
              "transition-all duration-300 ease-in-out hover:underline-offset-4",
              pathname === "/" ? "text-orange-500" : "text-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "transition-all duration-300 ease-in-out hover:underline-offset-4",
              pathname === "/about" ? "text-orange-500" : "text-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={cn(
              "transition-all duration-300 ease-in-out hover:underline-offset-4",
              pathname === "/services" ? "text-orange-500" : "text-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/recommendation"
            className={cn(
              "transition-all duration-300 ease-in-out hover:underline-offset-4",
              pathname === "/recommendation" ? "text-orange-500" : "text-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            Recommendation Products
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
