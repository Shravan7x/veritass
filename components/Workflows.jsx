"use client";

import { useState, useEffect } from "react";

export default function Workflows() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeBio, setActiveBio] = useState("face"); // For Workflow 2
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto-rotate the Takedown steps
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

        {/* === MAIN STAGE: THE ROSE PINK DIV === */}
        <div className="relative w-full rounded-[48px] bg-gradient-to-br from-[#FF6392] to-[#FA5282] p-8 lg:p-16 shadow-[0_40px_80px_rgba(255,99,146,0.3)]">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-20 translate-x-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-20 -translate-x-20 pointer-events-none"></div>

          {/* STACK CONTAINER */}
          <div className="flex flex-col gap-32 relative z-10">


            {/* =========================================================
                WORKFLOW 1: 1-CLICK TAKEDOWN (Updated Content)
               ========================================================= */}
            <div className="flex flex-col gap-6">
               <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-[#082235]">1-Click Takedown</h3>
               
               <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 bg-[#082235]">
                  {/* Background Video (Avatar) */}
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    alt="Agent Scanning"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#082235]/20 to-[#082235]/90 z-10 pointer-events-none"></div>

                  {/* Floating Steps (Right Side) */}
                  <div className="absolute inset-0 z-20 grid grid-cols-1 lg:grid-cols-12 pointer-events-none">
                    <div className="hidden lg:block lg:col-span-7"></div>
                    <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-4 px-6 lg:pr-12 pointer-events-auto">
                      {[
                        { id: 1, title: "Rapid Discovery", desc: "AI scans 100+ networks in seconds.", color: "bg-[#8A76FC]" },
                        { id: 2, title: "Legal Drafting", desc: "Auto-generate DMCA & complaints.", color: "bg-[#FF6392]" },
                        { id: 3, title: "Platform Strike", desc: "Direct API submission to compliance.", color: "bg-[#6CE975]" }
                      ].map((step) => (
                        <div 
                          key={step.id} 
                          onClick={() => setActiveStep(step.id)}
                          className={`group p-4 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md flex items-start gap-4 ${activeStep === step.id ? "bg-white/95 border-white shadow-xl translate-x-[-10px]" : "bg-black/40 border-white/10 hover:bg-black/60"}`}
                        >
                           <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep === step.id ? step.color : "bg-white/20"} text-white text-xs font-bold`}>{step.id}</div>
                           <div>
                             <h4 className={`font-bold ${activeStep === step.id ? "text-[#082235]" : "text-white"}`}>{step.title}</h4>
                             <p className={`text-xs mt-1 ${activeStep === step.id ? "text-[#082235]/70" : "text-white/60"}`}>{step.desc}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>


            {/* =========================================================
                WORKFLOW 2: INFLUENCER COPYRIGHT (Updated Content)
               ========================================================= */}
            <div className="flex flex-col gap-6">
               <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-[#082235]">Influencer Copyright</h3>
               
               {/* Split Card Design */}
               <div className="w-full bg-[#F7FFF7] rounded-[32px] p-8 lg:p-12 shadow-2xl grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left: The "Selector" Grid */}
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

                  {/* Right: Large Preview (The Result) */}
                  <div className="relative h-[350px] bg-[#082235] rounded-[24px] overflow-hidden group">
                     <img 
                       src={activeBio === "face" ? "https://images.unsplash.com/photo-1616766098956-c81f12114571?q=80&w=1000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"} 
                       className="w-full h-full object-cover opacity-80"
                     />
                     {/* Scanning Overlay */}
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
      
      {/* Animations */}
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