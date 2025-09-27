"use client";
import { useState } from "react";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Trang chủ" },
    { to: "about", label: "Giới thiệu" },
    { to: "skills", label: "Kỹ năng" },
    { to: "projects", label: "Dự án" },
    { to: "contact", label: "Liên hệ" },
  ];

  return (
    <div className="shadow-sm sticky top-0 z-50 bg-[#0F172A] dark:bg-gray-900">
      <nav className="flex justify-between items-center py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/images/khanh.jpg"
              alt="Avatar"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-bold text-lg text-[#FFFFFF]">VU BAO KHANH</h1>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-[#0ef]"
              className="relative px-2 py-2 cursor-pointer text-[#FFFFFF] dark:text-gray-200 transition-all duration-500
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-[#0ef] after:transition-all after:duration-500 
                hover:text-[#0ef] hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#FFFFFF]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#1f242d] z-40 transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={() => setIsOpen(false)}
              className="cursor-pointer text-[#FFFFFF] hover:text-[#0ef] duration-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
