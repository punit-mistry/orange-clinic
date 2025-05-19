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
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300 rounded-full font-semibold ",
        scrolled
          ? " shadow-lg backdrop-blur border  "
          : "bg-transparent",
        className
      )}
    >
      <Menu setActive={setActive}>
        <a href="/" className="text-foreground hover:text-foreground transition-colors">
          Home
        </a>
        <a href="/about" className="text-foreground hover:text-foreground transition-colors">
          About
        </a>
        <a href="/services" className="text-foreground hover:text-foreground transition-colors">
          Services
        </a>
        <a href="/recommendation" className="text-foreground hover:text-foreground transition-colors">
          Recommendation Products
        </a>

      </Menu>
    </div>
  );
}
