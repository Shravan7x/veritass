"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react"; // Assuming you have lucide-react, or use simple text

export default function Workflows() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeBio, setActiveBio] = useState("face");
  const [mounted, setMounted] = useState(false);
  
  // New state for Audio control
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 bg-[#F7FFF7]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
           <span className="text-[#FF6392] font-bold tracking-wider uppercase text-xs border border-[#FF6392]/20 px-3 py-1 rounded-full bg-[#FF6392]/5">
             End-to-End Protection
           </span>
           <h2 className="text-4xl lg:text-5xl font-bold text-[#082235] mt-4 font-sansation">
             Defense. Evidence. Action.
           </h2>
        </div>

        {/* === MAIN STAGE === */}
        <div className="relative w-full rounded-[48px] bg-gradient-to-br from-[#FF6392] to-[#FA5282] p-8 lg:p-16 shadow-[0_40px_80px_rgba(255,99,146,0.3)]">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-20 translate-x-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-20 -translate-x-20 pointer-events-none"></div>

          <div className="flex flex-col gap-32 relative z-10">

            {/* =========================================================
                WORKFLOW 1: 1-CLICK TAKEDOWN
               ========================================================= */}
            <div className="flex flex-col gap-6">
               <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-[#082235]">1-Click Takedown</h3>
               
               <div className="relative w-full h-[450px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 bg-[#082235] isolate">
                 
                 {/* VIDEO: Controlled by isMuted state */}
                 <video 
                   autoPlay 
                   loop 
                   muted={isMuted} // React controls the muted property
                   playsInline
                   className="absolute inset-0 w-full h-full object-cover object-left-top opacity-100 z-0"
                 >
                   <source src="/oneclick.mp4" type="video/mp4" />
                 </video>
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#082235]/40 to-[#082235]/90 z-10 pointer-events-none"></div>

                 {/* --- MUTE TOGGLE BUTTON --- 
                     Added z-30 to sit above everything else.
                 */}
                 <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute bottom-6 left-6 z-30 flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 transition-all text-xs font-bold uppercase tracking-wider"
                 >
                    {isMuted ? (
                        <>
                           <span>Unmute</span>
                           {/* Use an icon if you have one, or simple text */}
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                        </>
                    ) : (
                        <>
                           <span>Mute</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                        </>
                    )}
                 </button>

                 {/* Steps UI */}
                 <div className="absolute inset-0 z-20 grid grid-cols-1 lg:grid-cols-12 px-6 lg:px-12 py-8 pointer-events-none">
                   <div className="hidden lg:block lg:col-span-7"></div>
                   <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-4 pointer-events-auto">
                     {[
                       { id: 1, title: "Rapid Discovery", desc: "AI scans 100+ networks in seconds.", color: "bg-[#8A76FC]" },
                       { id: 2, title: "Legal Drafting", desc: "Auto-generate DMCA & complaints.", color: "bg-[#FF6392]" },
                       { id: 3, title: "Platform Strike", desc: "Direct API submission to compliance.", color: "bg-[#6CE975]" }
                     ].map((step) => (
                       <div 
                         key={step.id} 
                         onClick={() => setActiveStep(step.id)}
                         className={`group p-4 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md flex items-start gap-4 
                           ${activeStep === step.id 
                             ? "bg-white border-white shadow-xl scale-[1.02]" 
                             : "bg-black/30 border-white/10 hover:bg-black/50"
                           }`}
                       >
                          <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${activeStep === step.id ? step.color : "bg-white/20"} text-white text-xs font-bold shadow-sm`}>
                            {step.id}
                          </div>
                          <div>
                            <h4 className={`font-bold text-base ${activeStep === step.id ? "text-[#082235]" : "text-white"}`}>
                              {step.title}
                            </h4>
                            <p className={`text-sm mt-0.5 ${activeStep === step.id ? "text-[#082235]/70" : "text-white/70"}`}>
                              {step.desc}
                            </p>
                          </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>

            {/* =========================================================
                WORKFLOW 2: INFLUENCER COPYRIGHT (Unchanged)
               ========================================================= */}
            <div className="flex flex-col gap-6">
               <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-[#082235]">Influencer Copyright</h3>
               
               <div className="w-full bg-[#F7FFF7] rounded-[32px] p-8 lg:p-12 shadow-2xl grid lg:grid-cols-2 gap-12 items-center">
                 <div className="flex flex-col gap-6">
                     <div>
                       <div className="flex items-center gap-2 mb-2">
                         <div className="bg-[#082235] text-white text-xs font-bold px-2 py-1 rounded-md">Step 1</div>
                         <h4 className="text-xl font-bold text-[#082235]">Register Authenticity</h4>
                       </div>
                       <p className="text-[#082235]/60 text-sm">Secure your original content on the blockchain to prove ownership against deepfakes.</p>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => setActiveBio("face")} className={`p-4 rounded-2xl border-2 text-left transition-all ${activeBio === "face" ? "border-[#8A76FC] bg-[#8A76FC]/5 ring-4 ring-[#8A76FC]/10" : "border-gray-200 hover:border-[#8A76FC]/50"}`}>
                           <div className="w-12 h-12 rounded-full bg-cover bg-center mb-3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop)'}}></div>
                           <p className="font-bold text-[#082235]">Biometric Map</p>
                           <p className="text-xs text-gray-500">Face & Voice ID</p>
                        </button>
                        <button onClick={() => setActiveBio("voice")} className={`p-4 rounded-2xl border-2 text-left transition-all ${activeBio === "voice" ? "border-[#FF6392] bg-[#FF6392]/5 ring-4 ring-[#FF6392]/10" : "border-gray-200 hover:border-[#FF6392]/50"}`}>
                           <div className="w-12 h-12 rounded-full bg-cover bg-center mb-3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop)'}}></div>
                           <p className="font-bold text-[#082235]">Content Hash</p>
                           <p className="text-xs text-gray-500">Original File</p>
                        </button>
                     </div>
                 </div>

                 <div className="relative h-[350px] bg-[#082235] rounded-[24px] overflow-hidden group">
                     <img 
                       src={activeBio === "face" ? "https://images.unsplash.com/photo-1616766098956-c81f12114571?q=80&w=1000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"} 
                       className="w-full h-full object-cover opacity-80"
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-full h-1 bg-white/50 absolute top-0 animate-[scan_2s_linear_infinite] shadow-[0_0_20px_white]`}></div>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center">
                           <p className="text-white font-bold text-lg">{activeBio === "face" ? "Identity Verified" : "Origin Timestamped"}</p>
                           <p className="text-[#6CE975] text-xs font-mono mt-1">LEDGER BLOCK #99241</p>
                        </div>
                     </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}