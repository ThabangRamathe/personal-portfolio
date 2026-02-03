"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header style={{
      borderBottomColor: 'var(--border-color, #e4e4e7)',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
    }} className="sticky top-0 z-50 w-full border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:py-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight hover:opacity-80 transition">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="sm:w-10 sm:h-10 w-8 h-8 rounded-full border-2"
            style={{ borderColor: 'var(--border-color)' }}
            unoptimized
          />
          <span className="hidden sm:inline">Thabang Ramathe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-1">
          <Link 
            className={`px-3 py-2 text-sm font-medium transition rounded-lg ${
              isActive("/projects") 
                ? "opacity-100" 
                : "hover:opacity-70 opacity-60"
            }`}
            style={isActive("/projects") ? {
              backgroundColor: 'var(--card-badge-bg)',
            } : {}}
            href="/projects"
          >
            Projects
          </Link>
          <Link 
            className={`px-3 py-2 text-sm font-medium transition rounded-lg ${
              isActive("/about") 
                ? "opacity-100" 
                : "hover:opacity-70 opacity-60"
            }`}
            style={isActive("/about") ? {
              backgroundColor: 'var(--card-badge-bg)',
            } : {}}
            href="/about"
          >
            About
          </Link>
          <Link 
            className={`px-3 py-2 text-sm font-medium transition rounded-lg ${
              isActive("/contact") 
                ? "opacity-100" 
                : "hover:opacity-70 opacity-60"
            }`}
            style={isActive("/contact") ? {
              backgroundColor: 'var(--card-badge-bg)',
            } : {}}
            href="/contact"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:opacity-70 transition rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden border-t" style={{
          borderTopColor: 'var(--border-color, #e4e4e7)',
          backgroundColor: 'var(--background)',
        }}>
          <div className="mx-auto max-w-5xl px-4 py-4 space-y-2">
            <Link 
              href="/projects"
              className={`block px-3 py-2 text-sm font-medium transition rounded-lg ${
                isActive("/projects") 
                  ? "opacity-100" 
                  : "hover:opacity-70 opacity-60"
              }`}
              style={isActive("/projects") ? {
                backgroundColor: 'var(--card-badge-bg)',
              } : {}}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/about"
              className={`block px-3 py-2 text-sm font-medium transition rounded-lg ${
                isActive("/about") 
                  ? "opacity-100" 
                  : "hover:opacity-70 opacity-60"
              }`}
              style={isActive("/about") ? {
                backgroundColor: 'var(--card-badge-bg)',
              } : {}}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact"
              className={`block px-3 py-2 text-sm font-medium transition rounded-lg ${
                isActive("/contact") 
                  ? "opacity-100" 
                  : "hover:opacity-70 opacity-60"
              }`}
              style={isActive("/contact") ? {
                backgroundColor: 'var(--card-badge-bg)',
              } : {}}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
