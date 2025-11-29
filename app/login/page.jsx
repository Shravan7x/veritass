"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Ensure these images exist in your public folder
import digilockerLogo from '../../public/image_21.png'; 
import vsLogo from '../../public/vslogo.png'; 

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDigiLockerAuth = (e) => {
    e.preventDefault();
    setLoading(true);

    // SIMULATED DIGILOCKER AUTHENTICATION FLOW
    setTimeout(() => {
      // 1. Set the Login Flag so Navbar knows to update
      localStorage.setItem("isLoggedIn", "true");

      // 2. Show Success State
      setSuccess(true);
      
      // 3. Redirect after animation
      setTimeout(() => {
         router.push("/"); // Redirect to Veritas Shield Home
      }, 2000);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      
      {/* --- VERITAS SHIELD HEADER --- */}
      <header className="bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10  rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md p-1">
               {/* Use the VS Logo here too for consistency if needed, or keep text VS */}
               <Image src={vsLogo} alt="VS" width={30} height={30} className="object-contain" unoptimized />
            </div>
            <span className="text-xl font-bold text-[#082235] tracking-tight">Veritas Shield</span>
          </div>
          <div className="text-sm font-medium text-gray-500">
            Secure Government Gateway
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex items-center justify-center p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* LEFT: COLLABORATION PANEL */}
          <div className="md:w-1/2 bg-gradient-to-br from-[#1F75FE] to-[#0A1929] p-10 text-white flex flex-col justify-between relative overflow-hidden text-center md:text-left">
            
            <div className="relative z-10">
              
              {/* LOGO COLLABORATION HEADER */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                 {/* DigiLocker Logo */}
                 <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-3">
                    <Image src={digilockerLogo} alt="DigiLocker" className="object-contain" />
                 </div>
                 
                 {/* The 'X' Divider */}
                 <div className="text-white/50 text-xl font-bold">✕</div>

                 {/* Veritas Shield Logo */}
                 <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-3 overflow-hidden">
                    <Image src={vsLogo} alt="Veritas Shield" className="object-contain" unoptimized />
                 </div>
              </div>

              <h2 className="text-2xl font-bold tracking-tight mb-2">Secure Authentication</h2>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Access Veritas Shield using your verified <strong>DigiLocker Identity</strong>. This integration ensures tamper-proof security and legal validity.
              </p>

              <ul className="space-y-3 text-sm opacity-90 text-left inline-block">
                 <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#6CE975]/20 flex items-center justify-center text-[#6CE975]">✓</div>
                    <span>Government Verified ID</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#6CE975]/20 flex items-center justify-center text-[#6CE975]">✓</div>
                    <span>Instant KYC Compliance</span>
                 </li>
              </ul>
            </div>

            <div className="relative z-10 mt-8">
               <p className="text-[10px] opacity-60">DigiLocker is a flagship initiative of Ministry of Electronics & IT (MeitY), Government of India.</p>
            </div>
          </div>

          {/* RIGHT: ACTION PANEL */}
          <div className="md:w-1/2 p-8 lg:p-12 bg-white relative flex flex-col justify-center">
            
            {success ? (
               <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 border-4 border-green-100 shadow-sm">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#082235]">Identity Verified</h3>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">Redirecting to Dashboard...</p>
               </div>
            ) : (
               <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
                   <svg className="w-8 h-8 text-[#1F75FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed px-4">
                  Proceed to authenticate via the National Single Sign-On portal.
                </p>

                <button 
                  onClick={handleDigiLockerAuth}
                  disabled={loading}
                  className="w-full bg-[#1F75FE] hover:bg-[#1662D8] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#1F75FE]/20 transition-all active:scale-[0.98] disabled:opacity-70 flex justify-center items-center gap-3 text-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Connecting...</span>
                    </>
                  ) : (
                    <>
                      <span>Login with DigiLocker</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </>
                  )}
                </button>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500">
                    New user? <Link href="/signup" className="text-[#1F75FE] font-bold hover:underline">Create DigiLocker ID</Link>
                  </p>
                </div>
               </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>© 2025 Veritas Shield. All rights reserved.</p>
        <p className="text-xs mt-1 opacity-60">Authentication services powered by DigiLocker.</p>
      </footer>
    </div>
  );
}