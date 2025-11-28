"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Ensure these images exist in your public folder
import digilockerLogo from '../../public/image_21.png'; 
import vsLogo from '../../public/vslogo.png'; 

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", dob: "", mobile: "", pin: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    // SIMULATED DIGILOCKER REGISTRATION FLOW
    setTimeout(() => {
      setLoading(false);
      
      if (step === 1) {
        setStep(2); // Move to OTP
      } else {
        // --- FINAL SUCCESS STEP ---
        
        // 1. AUTO-LOGIN: Set the token immediately
        localStorage.setItem("isLoggedIn", "true");
        
        // 2. Dispatch storage event so Navbar updates immediately if on same page logic (optional safeguard)
        window.dispatchEvent(new Event("storage"));

        // 3. Redirect to Home (where Navbar will see the token)
        router.push("/"); 
      }
    }, 2000); 
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      
      {/* --- VERITAS SHIELD HEADER --- */}
      <header className="bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md p-1 overflow-hidden">
               <Image src={vsLogo} alt="VS" width={40} height={40} className="object-contain" unoptimized />
            </div>
            <span className="text-xl font-bold text-[#082235] tracking-tight">Veritas Shield</span>
          </div>
          <div className="text-sm font-medium text-gray-500">
            Registration Gateway
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* LEFT: COLLABORATION PANEL (Orange Theme) */}
          <div className="md:w-1/2 bg-gradient-to-br from-[#D94F1A] to-[#8B3212] p-10 text-white flex flex-col justify-between relative overflow-hidden text-center md:text-left">
            
            <div className="relative z-10">
              
              {/* LOGO COLLABORATION HEADER */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                 {/* DigiLocker Logo */}
                 <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg p-3">
                    <Image src={digilockerLogo} alt="DigiLocker" className="object-contain" unoptimized />
                 </div>
                 
                 {/* The 'X' Divider */}
                 <div className="text-white/50 text-xl font-bold">✕</div>

                 {/* Veritas Shield Logo */}
                 <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg p-3 overflow-hidden">
                    <Image src={vsLogo} alt="Veritas Shield" className="object-contain" unoptimized />
                 </div>
              </div>

              <h2 className="text-2xl font-bold tracking-tight mb-2">Create Identity</h2>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Registering on <strong>DigiLocker</strong> creates a verified digital identity used to access <strong>Veritas Shield</strong>.
              </p>

              <div className="mt-8 space-y-6 inline-block text-left">
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs ${step >= 1 ? "bg-white text-[#D94F1A] border-white" : "border-white/40 text-white/40"}`}>1</div>
                  <div>
                    <p className="font-bold text-sm">Aadhaar Details</p>
                    <p className="text-[10px] text-white/70">Name & Date of Birth</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs ${step >= 2 ? "bg-white text-[#D94F1A] border-white" : "border-white/40 text-white/40"}`}>2</div>
                  <div>
                    <p className="font-bold text-sm opacity-90">Verify Mobile</p>
                    <p className="text-[10px] text-white/70">OTP Authentication</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-8">
               <p className="text-[10px] opacity-60">Your data is secured by Government of India standards.</p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="md:w-1/2 p-8 lg:p-12 relative flex flex-col justify-center">
            <div className="text-center mb-6">
               <h3 className="text-xl font-bold text-gray-800">Register</h3>
               <p className="text-xs text-gray-500">Create your DigiLocker Account</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              
              {step === 1 ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1 block">Full Name</label>
                    <input type="text" name="fullname" onChange={handleChange} placeholder="As per Aadhaar" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94F1A] focus:ring-1 focus:ring-[#D94F1A] outline-none text-sm bg-white text-gray-900 transition-all" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1 block">DOB</label>
                      <input type="date" name="dob" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94F1A] focus:ring-1 focus:ring-[#D94F1A] outline-none text-sm text-gray-500 bg-white transition-all" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1 block">Gender</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94F1A] focus:ring-1 focus:ring-[#D94F1A] outline-none text-sm bg-white text-gray-600 transition-all">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1 block">Mobile</label>
                    <input type="tel" name="mobile" onChange={handleChange} placeholder="99999 99999" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94F1A] focus:ring-1 focus:ring-[#D94F1A] outline-none text-sm bg-white text-gray-900 transition-all" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1 block">Set 6-Digit PIN</label>
                    <input type="password" name="pin" onChange={handleChange} maxLength="6" placeholder="******" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94F1A] focus:ring-1 focus:ring-[#D94F1A] outline-none text-sm bg-white text-gray-900 transition-all" required />
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-right-4 text-center py-6">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100 shadow-sm">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">OTP Verification</h4>
                  <p className="text-xs text-gray-500 mb-6">Enter the OTP sent to +91 {formData.mobile}</p>
                  
                  <input type="text" placeholder="X X X X X X" className="w-full text-center text-3xl tracking-[0.5em] font-bold py-4 border-b-2 border-gray-300 focus:border-[#D94F1A] outline-none text-[#333] transition-all" maxLength="6" />
                  
                  <div className="text-right mt-6">
                    <button type="button" className="text-xs text-[#D94F1A] font-bold hover:underline">Resend OTP</button>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#D94F1A] hover:bg-[#c04313] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#D94F1A]/20 transition-all active:scale-[0.98] disabled:opacity-70 mt-6 text-lg flex justify-center items-center gap-3"
              >
                {loading ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating ID...</span>
                    </>
                ) : (
                    step === 1 ? "Submit Details" : "Verify & Create"
                )}
              </button>

            </form>
            
            <div className="mt-8 text-center">
               <p className="text-xs text-gray-500">By signing up, you agree to DigiLocker's <a href="#" className="text-[#D94F1A] hover:underline">Terms</a> & <a href="#" className="text-[#D94F1A] hover:underline">Privacy Policy</a>.</p>
            </div>
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