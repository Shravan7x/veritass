"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#F9FCF9]" />;

  return (
    // Main Container
    <section className="relative min-h-screen w-full bg-[#F9FCF9] overflow-hidden flex items-center pt-20">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#8A76FC]/10 rounded-full blur-[100px] z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#6CE975]/10 rounded-full blur-[80px] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* --- LEFT COLUMN: COPY & INPUT --- */}
        <div className="flex flex-col items-start gap-8">

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-[#082235] leading-[1.1] tracking-tight pt-10">
            Stop misinformation in{" "}
            <span className="relative inline-block">
              minutes, not days
              {/* Hand-drawn style underline */}
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#8A76FC]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7201 5.20402 120.612 -2.18562 198 2.00007" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#082235]/60 max-w-lg leading-relaxed font-medium">
            Shrink the 20-day legal process into seconds. Generate court-ready evidence bundles, detect synthetic media, and automate takedowns instantly.
          </p>

          {/* INPUT ACTION COMPONENT */}
          <div className="w-full max-w-lg mt-4 group">
            <div className="relative flex items-center p-2 bg-white rounded-full shadow-[0_4px_20px_rgba(8,34,53,0.08)] border border-[#082235]/5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(138,118,252,0.15)] hover:border-[#8A76FC]/30">
              
              {/* Input Icon */}
              <div className="pl-4 text-[#082235]/40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              </div>

              {/* The Input */}
              <input 
                type="text" 
                placeholder="Paste URL to scan for manipulated media..." 
                className="flex-1 px-4 py-3 bg-transparent outline-none text-[#082235] placeholder-[#082235]/40 font-medium"
              />

              {/* The Button */}
              <button className="bg-[#082235] text-[#F7FFF7] px-8 py-3 rounded-full font-bold text-sm transition-transform duration-300 hover:scale-105 hover:bg-[#8A76FC] hover:shadow-lg flex items-center gap-2">
                Start Audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
            <p className="text-xs text-[#082235]/40 mt-3 ml-6">
              *Scans public social platforms & news sites. No sign-up for first scan.
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 mt-4">
             <div className="flex -space-x-3">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F7FFF7] bg-gradient-to-br from-[#FF6392]/20 to-[#8A76FC]/20 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 42}&backgroundColor=transparent`} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <div className="text-sm font-bold text-[#082235]">
               Protected 500+ <br/><span className="text-[#082235]/50 font-medium">Organizations & Public Figures</span>
             </div>
          </div>
        </div>


        {/* --- RIGHT COLUMN: FLOATING UI VISUAL --- */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
          
          {/* Abstract Back Shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#E2F0FD] to-[#F0E6FE] rounded-[40px] -rotate-6 z-0"></div>

          {/* MAIN GLASS CARD (The "Monitor") */}
          <div className="relative w-[400px] h-[500px] bg-white/60 backdrop-blur-xl border border-white/50 rounded-[32px] shadow-[0_20px_60px_rgba(8,34,53,0.1)] p-6 z-10 flex flex-col gap-6 transform transition-transform hover:scale-[1.02] duration-500">
            
            {/* Header of Card */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#F7FFF7] flex items-center justify-center text-lg shadow-sm">🛡️</div>
                 <div>
                   {/* Updated to .png */}
                   <h4 className="font-bold text-[#082235] text-sm">Case_File_902.png</h4>
                   <p className="text-xs text-[#082235]/50">Cross-referencing 14 networks...</p>
                 </div>
               </div>
               <div className="h-2 w-2 rounded-full bg-[#6CE975] animate-pulse"></div>
            </div>

            {/* --- REPLACED VIDEO AREA WITH IMAGE --- */}
            <div className="w-full h-48 rounded-2xl relative overflow-hidden group bg-black/5">
               {/* The Image */}
               <img 
                 src="/deepfakeimg.png" 
                 alt="Deepfake Scan Preview" 
                 className="w-full h-full object-cover"
               />
               
               {/* Scanning Line Animation Overlay */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-[#6CE975] shadow-[0_0_15px_#6CE975] animate-[scan_3s_ease-in-out_infinite] z-20"></div>
            </div>

            {/* Analysis List */}
            <div className="space-y-3">
               <AnalysisItem label="Content Fingerprint" status="Synthetic" color="red" percent="99%" />
               <AnalysisItem label="Blockchain Anchor" status="Verified" color="green" percent="100%" />
               <AnalysisItem label="Manipulation Trace" status="High" color="yellow" percent="85%" />
            </div>

            {/* Bottom Action */}
            <div className="mt-auto bg-[#F7FFF7] rounded-xl p-3 flex items-center justify-between border border-[#082235]/5">
               <span className="text-xs font-bold text-[#082235]">Legal Bundle Ready</span>
               <button className="bg-[#FF6392] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#ff477e] transition-colors">
                 Enforce
               </button>
            </div>
          </div>

          {/* FLOATING PILL 1 (Left) */}
          <div className="absolute top-[20%] left-[-20px] lg:left-0 bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-3 animate-[float_4s_ease-in-out_infinite] z-20 border border-[#F7FFF7]">
             <div className="w-8 h-8 rounded-full bg-[#FF6392]/10 flex items-center justify-center text-sm">⚠️</div>
             <div>
                <p className="text-xs font-bold text-[#082235]">Synthetic Media</p>
                {/* Updated text to match image context */}
                <p className="text-[10px] text-[#082235]/50">Image Match: 98%</p>
             </div>
          </div>

          {/* FLOATING PILL 2 (Right) */}
          <div className="absolute bottom-[25%] right-[-20px] lg:right-[-10px] bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_reverse] z-20 border border-[#F7FFF7]">
             <div className="w-8 h-8 rounded-full bg-[#8A76FC]/10 flex items-center justify-center text-sm">⚖️</div>
             <div>
                <p className="text-xs font-bold text-[#082235]">DMCA Notice</p>
                <p className="text-[10px] text-[#082235]/50">Draft Generated</p>
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
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT: Analysis Item ---
function AnalysisItem({ label, status, color, percent }) {
  const colorMap = {
    red: "text-[#FF6392] bg-[#FF6392]/10",
    green: "text-[#6CE975] bg-[#6CE975]/10",
    yellow: "text-amber-500 bg-amber-500/10"
  };

  return (
    <div className="flex items-center justify-between p-2 hover:bg-[#F9FCF9] rounded-lg transition-colors cursor-default">
      <div className="flex items-center gap-3">
        <div className={`w-1.5 h-1.5 rounded-full ${color === 'green' ? 'bg-[#6CE975]' : color === 'red' ? 'bg-[#FF6392]' : 'bg-amber-500'}`}></div>
        <span className="text-sm text-[#082235]/80 font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
         <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${colorMap[color]}`}>{status}</span>
         <span className="text-xs font-bold text-[#082235]">{percent}</span>
      </div>
    </div>
  )
}