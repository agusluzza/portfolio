"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadCV = () => {
    toast({
      title: "Resume Downloaded",
      description: "Thank you for your interest in my resume!",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold">
            <span className={isScrolled ? "text-purple-400" : "text-white"}>
              Agustina
            </span>
            <span className={isScrolled ? "text-white" : "text-purple-300"}>
              Luzza
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`font-medium hover:text-purple-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/assets/cv-en-agusluzza.pdf" download target="blan">
              <Button
                onClick={handleDownloadCV}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Download CV
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-medium py-2 hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={handleDownloadCV}
              className="bg-purple-600 hover:bg-purple-700 w-full"
            >
              Download CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
