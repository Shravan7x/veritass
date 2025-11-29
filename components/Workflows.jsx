"use client";

import { useState, useEffect } from "react";
// Using simple SVG icons inside the component for portability
import { Volume2, VolumeX } from "lucide-react"; 

export default function Workflows() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeInfStep, setActiveInfStep] = useState(1); // Separate state for Influencer section
  const [mounted, setMounted] = useState(false);
  
  // Audio state for both videos
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Auto-rotate the Takedown steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
      setActiveInfStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000); // Slightly slower for better readability
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
               
               <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 bg-[#082235] isolate">
                 
                 {/* VIDEO 1 */}
                 <video 
                   autoPlay 
                   loop 
                   muted={isMuted1}
                   playsInline
                   className="absolute inset-0 w-full h-full object-cover object-left-top opacity-100 z-0"
                 >
                   <source src="/oneclick.mp4" type="video/mp4" />
                 </video>
                 
                 {/* Gradient: Dark on Right for text */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#082235]/40 to-[#082235]/90 z-10 pointer-events-none"></div>

                 {/* Mute Button */}
                 <button 
                    onClick={() => setIsMuted1(!isMuted1)}
                    className="absolute bottom-6 left-6 z-30 flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 transition-all text-xs font-bold uppercase tracking-wider"
                 >
                    {isMuted1 ? <span>Unmute</span> : <span>Mute</span>}
                 </button>

                 {/* Steps UI (Right Side) */}
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
                             ? "bg-white border-white shadow-xl translate-x-[-10px]" 
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
                WORKFLOW 2: INFLUENCER COPYRIGHT
               ========================================================= */}
            <div className="flex flex-col gap-6">
               <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-[#082235]">Influencer Copyright</h3>
               
               <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 bg-[#F0E6FE] isolate">
                 
                 {/* VIDEO 2: INFLUENCER VIDEO */}
                 <video 
                   autoPlay 
                   loop 
                   muted={isMuted2}
                   playsInline
                   // UPDATED: Changed object-center to object-top to keep head in frame
                   className="absolute inset-0 w-full h-full object-cover object-top opacity-100 z-0"
                 >
                   <source src="/influencervideo.mp4" type="video/mp4" />
                 </video>
                 
                 {/* Gradient: White/Light on Left for text readability, Transparent on Right to see Avatar */}
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F7FFF7]/60 to-[#F7FFF7]/95 z-10 pointer-events-none"></div>

                 {/* Mute Button (Right side for this one) */}
                 <button 
                    onClick={() => setIsMuted2(!isMuted2)}
                    className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-white/40 hover:bg-white/60 backdrop-blur-md text-[#082235] px-4 py-2 rounded-full border border-[#082235]/10 transition-all text-xs font-bold uppercase tracking-wider shadow-lg"
                 >
                    {isMuted2 ? <span>Unmute Agent</span> : <span>Mute Agent</span>}
                 </button>

                 {/* Steps UI (Left Side - Chat Bubble Style) */}
                 <div className="absolute inset-0 z-20 grid grid-cols-1 lg:grid-cols-12 px-6 lg:px-12 py-8 pointer-events-none">
                   
                   <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-6 pointer-events-auto">
                     
                     {/* Greeting Bubble */}
                     <div className="mb-2 animate-in slide-in-from-left duration-700">
                        <div className="inline-block bg-[#082235] text-white px-4 py-2 rounded-2xl rounded-bl-none text-sm font-bold shadow-lg">
                           Hello! I'm your Copyright Agent.
                        </div>
                     </div>

                     {[
                       { 
                         id: 1, 
                         step: "Step 1",
                         title: "Avatar Onboarding", 
                         desc: "I scan your face & voice to verify your identity.", 
                         icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="M16 16l4.5 4.5"/><path d="M8 8l-4.5-4.5"/></svg>
                         )
                       },
                       { 
                         id: 2, 
                         step: "Step 2",
                         title: "Legal Generator", 
                         desc: "I auto-write your court-ready legal notices.", 
                         icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                         )
                       },
                       { 
                         id: 3, 
                         step: "Step 3",
                         title: "Auto-Enforcement", 
                         desc: "I send API takedowns to YouTube & Meta instantly.", 
                         icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                         )
                       }
                     ].map((step) => (
                       <div 
                         key={step.id} 
                         onClick={() => setActiveInfStep(step.id)}
                         className={`group relative p-5 rounded-2xl rounded-tl-none cursor-pointer transition-all duration-300 border shadow-sm
                           ${activeInfStep === step.id 
                             ? "bg-white border-[#8A76FC] shadow-[0_10px_30px_rgba(138,118,252,0.15)] scale-[1.02] translate-x-2" 
                             : "bg-white/60 border-white/40 hover:bg-white/90"
                           }`}
                       >
                          {/* Chat Bubble Tail */}
                          <div className={`absolute -left-2 top-0 w-4 h-4 transform rotate-45 ${activeInfStep === step.id ? "bg-white border-l border-b border-[#8A76FC]" : "bg-white/60"}`}></div>

                          <div className="flex items-start gap-4">
                            <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${activeInfStep === step.id ? "bg-[#8A76FC] text-white" : "bg-[#082235]/5 text-[#082235]/60"} transition-colors`}>
                               {step.icon}
                            </div>
                            <div>
                               <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${activeInfStep === step.id ? "bg-[#8A76FC]/10 text-[#8A76FC]" : "bg-black/5 text-black/40"}`}>
                                    {step.step}
                                  </span>
                               </div>
                               <h4 className="font-bold text-[#082235] text-lg">
                                 {step.title}
                               </h4>
                               <p className="text-sm text-[#082235]/70 mt-1 leading-snug">
                                 {step.desc}
                               </p>
                            </div>
                          </div>
                       </div>
                     ))}
                   </div>

                   {/* Spacer for Avatar Visibility */}
                   <div className="hidden lg:block lg:col-span-7"></div>
                 </div>

               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}