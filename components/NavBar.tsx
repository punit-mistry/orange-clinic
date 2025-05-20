"use client";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300 rounded-full font-semibold hover:shadow-2xl text-clip cursor-pointer",
        scrolled
          ? " shadow-lg backdrop-blur border "
          : "bg-transparent",
        className
      )}
    >
      <div className="flex gap-3 items-center justify-center p-6 ">
        <a href="/" className="text-foreground hover:text-foreground transform-gpu hover:-translate-y-1 transition-all duration-300 ease-in-out hover:underline-offset-4">
          Home 
        </a>
        <a href="/about" className="text-foreground hover:text-foreground transform-gpu hover:-translate-y-1 transition-all duration-300 ease-in-out hover:underline-offset-4">
          About 
        </a>
        <a href="/services" className="text-foreground hover:text-foreground transform-gpu hover:-translate-y-1 transition-all duration-300 ease-in-out hover:underline-offset-4">
          Services 
        </a>
        <a href="/recommendation" className="text-foreground hover:text-foreground transform-gpu hover:-translate-y-1 transition-all duration-300 ease-in-out hover:underline-offset-4">
          Recommendation Products
        </a>
      </div>

    </div>
  );
}
