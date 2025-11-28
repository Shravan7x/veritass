"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 

// Ensure vslogo.png is in your public folder
import vsLogo from '../public/vslogo.png'; 

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const pathname = usePathname(); 
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // --- LOGIN CHECK LOGIC ---
    const checkLoginStatus = () => {
      // Check if code is running in browser
      if (typeof window !== "undefined") {
        const userStatus = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(userStatus === "true");
      }
    };

    // Run check immediately on mount/navigation
    checkLoginStatus();

    // Listen for storage events (updates from Login page)
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, [pathname]);

  // Logout Handler - Clears state and reloads to reset everything
  const handleLogout = () => {
    setIsLoggedIn(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/"; // Force reload to home
    }
  };

  if (!mounted) return <div className="fixed top-6 left-0 right-0 h-[72px]" />;

  return (
    <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ease-out ${scrolled ? "pt-0 top-2" : "pt-2"}`}>
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl relative rounded-full hover:-translate-y-0.3 transition-transform duration-300">
        
        {/* 1. GRADIENT BORDER */}
        <div 
          className="absolute inset-0 rounded-full p-[1.5px] pointer-events-none"
          style={{
            background: "linear-gradient(to right, #8A76FC, #FF6392, #8A76FC)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude"
          }}
        ></div>

        {/* 2. GLASS NAVBAR */}
        <nav className="relative w-full h-[72px] bg-[#F7FFF7]/40 backdrop-blur-[4px] rounded-full px-8 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          
          {/* --- LEFT: BRANDING --- */}
          <Link 
            href="/" 
            onClick={() => setActiveLink("Home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300 overflow-hidden p-1 bg-white/50">
               <Image 
                 src={vsLogo} 
                 alt="VS Logo" 
                 width={40} 
                 height={40} 
                 className="object-contain"
                 unoptimized 
               />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#082235] font-sansation group-hover:text-[#8A76FC] transition-colors">
              Veritas Shield
            </span>
          </Link>

          {/* --- CENTER: NAVIGATION --- */}
          <div className="hidden lg:flex items-center gap-2 h-full">
            <NavLink title="1-Click Takedown" isActive={activeLink === "1-Click Takedown"} onClick={() => setActiveLink("1-Click Takedown")} />
            <NavLink title="Influencer Copyright" isActive={activeLink === "Influencer Copyright"} onClick={() => setActiveLink("Influencer Copyright")} />
            <NavLink title="Accountability & Audit" isActive={activeLink === "Accountability & Audit"} onClick={() => setActiveLink("Accountability & Audit")} />
            <NavLink title="Pricing" isActive={activeLink === "Pricing"} onClick={() => setActiveLink("Pricing")} />
          </div>

          {/* --- RIGHT: DYNAMIC BUTTONS --- */}
          <div className="flex items-center justify-end gap-3 min-w-[200px]">
            
            {!isLoggedIn ? (
              /* GUEST STATE - Show Buttons */
              <>
                <Link 
                  href="/login"
                  className="hidden md:flex items-center justify-center bg-[#E2F0FD] text-[#082235] px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-out hover:scale-105 hover:bg-[#D0E6FA] hover:shadow-lg cursor-pointer"
                >
                  Log in
                </Link>
                <Link 
                  href="/signup"
                  className="flex items-center justify-center bg-[#082235] text-[#F7FFF7] px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(108,233,117,0.5)] cursor-pointer group"
                >
                  <span className="flex items-center">
                    Sign up <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </>
            ) : (
              /* LOGGED IN STATE - Show Profile */
              <>
                {/* Bell Icon */}
                <button className="relative p-2.5 rounded-full hover:bg-[#8A76FC]/10 transition-colors group cursor-pointer">
                  <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#FF6392] rounded-full border-2 border-[#F7FFF7] animate-pulse"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#082235]/80 group-hover:text-[#082235] transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

                {/* Profile Pic - Click to Logout */}
                <div onClick={handleLogout} className="relative group cursor-pointer" title="Click to Logout">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF6392] via-[#8A76FC] to-[#6CE975] p-[2px] shadow-[0_0_10px_rgba(138,118,252,0.3)] group-hover:shadow-[0_0_20px_rgba(108,233,117,0.6)] transition-all duration-300 hover:scale-105">
                     <div className="w-full h-full rounded-full bg-[#F7FFF7] border-[3px] border-white flex items-center justify-center overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="User" className="w-full h-full object-cover" />
                     </div>
                   </div>
                </div>
              </>
            )}

            {/* Mobile Toggle */}
            <button className="lg:hidden text-[#082235] cursor-pointer p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </nav>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function NavLink({ title, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group relative h-full flex items-center justify-center px-5 cursor-pointer"
    >
      <span className={`text-sm font-bold transition-colors duration-300 z-10 ${isActive ? "text-[#082235]" : "text-[#082235]/70 group-hover:text-[#082235]"}`}>
        {title}
      </span>
      <span className={`absolute bottom-5 left-4 right-4 h-[2px] bg-[#8A76FC] rounded-full transition-transform duration-300 ease-out origin-center ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
    </div>
  );
}