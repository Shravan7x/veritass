// "use client";

// import { useState, useEffect } from "react";

// export default function AccountabilityAudit() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   // Mock Data for the Leaderboard
//   const goodApps = [
//     { name: "YouTube", grade: "A", speed: "< 15 mins", rate: "99.8%", status: "Verified Partner" },
//     { name: "LinkedIn", grade: "A-", speed: "45 mins", rate: "95%", status: "High Compliance" },
//     { name: "Vimeo", grade: "B+", speed: "2 hours", rate: "92%", status: "Active" },
//   ];

//   const badApps = [
//     { name: "UnknownStream", grade: "F", speed: "> 7 Days", rate: "12%", status: "Ignores DMCA" },
//     { name: "ClipShare", grade: "D-", speed: "48 hours", rate: "40%", status: "Slow Response" },
//     { name: "SocialX", grade: "D", speed: "24 hours", rate: "55%", status: "Inconsistent" },
//   ];

//   return (
//     <section className="py-24 bg-[#F7FFF7] relative overflow-hidden">
      
//       {/* Background Decor */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#082235]/5 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
        
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#082235]/5 border border-[#082235]/10 mb-4">
//             <div className="w-2 h-2 rounded-full bg-[#FF6392] animate-pulse"></div>
//             <span className="text-[#082235] text-xs font-bold uppercase tracking-wider">Live Public Ledger</span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#082235] font-sansation">
//             We track who acts.<br />
//             <span className="text-[#082235]/50">And expose who doesn't.</span>
//           </h2>
//           <p className="max-w-2xl mx-auto mt-4 text-[#082235]/60 text-lg">
//             Veritas Shield ranks platforms based on their actual response time to our takedown requests. We believe transparency drives accountability.
//           </p>
//         </div>

//         {/* --- THE LEADERBOARD STAGE --- */}
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
//           {/* 1. THE GOOD APPS (Green Zone) */}
//           <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_rgba(108,233,117,0.15)] border border-[#6CE975]/30 relative overflow-hidden group">
//             <div className="absolute top-0 left-0 w-full h-2 bg-[#6CE975]"></div>
            
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-[#082235]">Top Performers</h3>
//                 <p className="text-sm text-[#082235]/50">Fastest compliance & removal</p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-[#6CE975]/10 flex items-center justify-center text-2xl">
//                 🏆
//               </div>
//             </div>

//             <div className="space-y-4">
//               {goodApps.map((app, i) => (
//                 <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-[#F7FFF7] border border-[#6CE975]/10 hover:border-[#6CE975] transition-all cursor-default">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full bg-[#082235] flex items-center justify-center text-white font-bold text-xs">
//                       {app.name[0]}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#082235]">{app.name}</h4>
//                       <div className="flex items-center gap-2">
//                         <span className="text-[10px] uppercase font-bold text-[#6CE975] bg-[#6CE975]/10 px-2 py-0.5 rounded-sm">{app.status}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-2xl font-bold text-[#6CE975]">{app.grade}</div>
//                     <div className="text-[10px] text-[#082235]/50">{app.speed} avg</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 2. THE BAD APPS (Red Zone) */}
//           <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_rgba(255,99,146,0.15)] border border-[#FF6392]/30 relative overflow-hidden group">
//             <div className="absolute top-0 left-0 w-full h-2 bg-[#FF6392]"></div>
            
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-[#082235]">Audit Watchlist</h3>
//                 <p className="text-sm text-[#082235]/50">High risk of inaction & harm</p>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-[#FF6392]/10 flex items-center justify-center text-2xl">
//                 ⚠️
//               </div>
//             </div>

//             <div className="space-y-4">
//               {badApps.map((app, i) => (
//                 <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-[#FFF5F7] border border-[#FF6392]/10 hover:border-[#FF6392] transition-all cursor-default">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full bg-[#FF6392]/20 flex items-center justify-center text-[#FF6392] font-bold text-xs">
//                       {app.name[0]}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#082235]">{app.name}</h4>
//                       <div className="flex items-center gap-2">
//                         <span className="text-[10px] uppercase font-bold text-[#FF6392] bg-[#FF6392]/10 px-2 py-0.5 rounded-sm">{app.status}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-2xl font-bold text-[#FF6392]">{app.grade}</div>
//                     <div className="text-[10px] text-[#082235]/50">{app.speed} avg</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* --- SCORING CRITERIA (The Thresholds) --- */}
//         <div className="mt-16 bg-white/60 backdrop-blur-xl rounded-[32px] p-8 lg:p-12 border border-white shadow-lg">
//           <div className="text-center mb-10">
//             <h3 className="text-2xl font-bold text-[#082235]">How We Calculate the Score</h3>
//             <p className="text-[#082235]/60 mt-2">Our proprietary "Safety Index" ranks platforms based on 3 critical vectors.</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
            
//             {/* Criteria 1: Speed */}
//             <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F7FFF7] border border-[#082235]/5 hover:scale-105 transition-transform">
//               <div className="w-14 h-14 rounded-full bg-[#8A76FC]/10 flex items-center justify-center text-2xl mb-4">⏱️</div>
//               <h4 className="font-bold text-[#082235] text-lg">Response Time</h4>
//               <div className="mt-4 w-full space-y-2 text-sm">
//                 <div className="flex justify-between px-4 py-2 bg-white rounded-lg border border-[#6CE975]/30">
//                   <span className="text-[#082235]/60">Target</span>
//                   <span className="font-bold text-[#6CE975]">&lt; 1 Hour</span>
//                 </div>
//                 <div className="flex justify-between px-4 py-2 bg-white rounded-lg border border-[#FF6392]/30">
//                   <span className="text-[#082235]/60">Failure</span>
//                   <span className="font-bold text-[#FF6392]">&gt; 24 Hours</span>
//                 </div>
//               </div>
//             </div>

//             {/* Criteria 2: Action */}
//             <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F7FFF7] border border-[#082235]/5 hover:scale-105 transition-transform">
//               <div className="w-14 h-14 rounded-full bg-[#6CE975]/10 flex items-center justify-center text-2xl mb-4">🛡️</div>
//               <h4 className="font-bold text-[#082235] text-lg">Takedown Rate</h4>
//               <div className="mt-4 w-full space-y-2 text-sm">
//                 <div className="flex justify-between px-4 py-2 bg-white rounded-lg border border-[#6CE975]/30">
//                   <span className="text-[#082235]/60">Effective</span>
//                   <span className="font-bold text-[#6CE975]">&gt; 95%</span>
//                 </div>
//                 <div className="flex justify-between px-4 py-2 bg-white rounded-lg border border-[#FF6392]/30">
//                   <span className="text-[#082235]/60">Ineffective</span>
//                   <span className="font-bold text-[#FF6392]">&lt; 50%</span>
//                 </div>
//               </div>
//             </div>

//             {/* Criteria 3: Policy */}
//             <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F7FFF7] border border-[#082235]/5 hover:scale-105 transition-transform">
//               <div className="w-14 h-14 rounded-full bg-[#FF6392]/10 flex items-center justify-center text-2xl mb-4">⚖️</div>
//               <h4 className="font-bold text-[#082235] text-lg">Repeat Offender Policy</h4>
//               <div className="mt-4 w-full space-y-2 text-sm">
//                 <div className="flex justify-between px-4 py-2 bg-white rounded-lg border border-[#6CE975]/30">
//                   <span className="text-[#082235]/60">Good</span>
//                   <span className="font-bold text-[#6CE975]">Permanent Ban</span>
//                 </div>
//                 <div className="flex justify-between px-4 py-2 bg-white rounded-lg border border-[#FF6392]/30">
//                   <span className="text-[#082235]/60">Bad</span>
//                   <span className="font-bold text-[#FF6392]">No Action</span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }