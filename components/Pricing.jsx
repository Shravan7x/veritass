"use client";

import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Creator Shield",
      target: "For Journalists & Creators",
      price: isAnnual ? "2,499" : "2,999",
      period: "/mo",
      desc: "Essential protection for your personal AI avatar and brand.",
      btnText: "Start Free Trial",
      btnStyle: "bg-[#E2F0FD] text-[#082235] hover:bg-[#d0e6fa]",
      cardStyle: "bg-white border border-[#082235]/10",
      features: [
        "1 AI Avatar Monitor", // Updated
        "Daily Radar Scans",
        "5 Auto-Takedowns",
        "Legal Evidence Bundles" // Replaced Blockchain
      ]
    },
    {
      name: "Brand Guardian",
      target: "For Media Teams",
      price: isAnnual ? "12,999" : "14,999",
      period: "/mo",
      desc: "Prioritized defense for teams managing multiple digital identities.",
      popular: true,
      btnText: "Get Protected",
      btnStyle: "bg-[#082235] text-white hover:bg-[#082235]/90",
      // Rose Pink Gradient
      cardStyle: "bg-gradient-to-br from-[#FF6392] to-[#FA5282] text-[#082235] border-none shadow-2xl scale-105 z-10",
      features: [
        "5 Team Seats",
        "Real-time Avatar Defense", // Explicit Feature
        "Unlimited Takedowns",
        "Direct API Access",
        "24h Forensic Review"
      ]
    },
    {
      name: "Civic Integrity",
      target: "Public Bodies & NGOs",
      price: "Custom",
      period: "",
      desc: "High-stakes protection for critical events and public figures.",
      btnText: "Contact Sales",
      btnStyle: "bg-[#E2F0FD] text-[#082235] hover:bg-[#d0e6fa]",
      cardStyle: "bg-white border border-[#082235]/10",
      features: [
        "Crisis Monitoring",
        "Deepfake Origin Tracing", // Advanced Feature
        "Transparency Reports",
        "Dedicated Legal Partner"
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#F7FFF7] relative overflow-hidden">
      
      {/* Subtle Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8A76FC]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* COMPACT HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#082235] font-sansation">
            Fair protection for everyone.
          </h2>
          <p className="text-[#082235]/60 mt-2 text-base max-w-xl mx-auto">
            Scalable defense against misinformation and identity theft.
          </p>

          {/* COMPACT TOGGLE */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm font-bold ${!isAnnual ? "text-[#082235]" : "text-[#082235]/50"}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 bg-[#082235] rounded-full p-1 transition-colors cursor-pointer"
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? "translate-x-6" : "translate-x-0"}`}></div>
            </button>
            <span className={`text-sm font-bold ${isAnnual ? "text-[#082235]" : "text-[#082235]/50"}`}>
              Yearly <span className="text-[#FF6392] text-xs ml-1 font-normal">(-20%)</span>
            </span>
          </div>
        </div>

        {/* COMPACT PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-6 flex flex-col justify-between transition-transform duration-300 ${plan.cardStyle}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#082235] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className={`text-lg font-bold ${plan.popular ? "text-white" : "text-[#082235]"}`}>{plan.name}</h3>
                  <p className={`text-xs font-bold mt-1 ${plan.popular ? "text-white/80" : "text-[#8A76FC]"}`}>{plan.target}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#082235]"}`}>
                      {plan.price === "Custom" ? "" : "₹"}
                      {plan.price}
                    </span>
                    <span className={`ml-1 text-sm ${plan.popular ? "text-white/80" : "text-[#082235]/60"}`}>{plan.period}</span>
                  </div>
                  <p className={`mt-2 text-xs leading-relaxed ${plan.popular ? "text-white/90" : "text-[#082235]/70"}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Compact Feature List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? "bg-white/20 text-white" : "bg-[#6CE975]/20 text-[#6CE975]"}`}>
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className={`text-xs font-medium ${plan.popular ? "text-white" : "text-[#082235]/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-xl text-sm font-bold transition-transform active:scale-95 shadow-sm ${plan.btnStyle}`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}