"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#082235] text-[#F7FFF7] pt-20 pb-10 rounded-t-[40px] mt-20 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8A76FC]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: CTA & BRANDING */}
        <div className="grid lg:grid-cols-5 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8A76FC] to-[#FF6392] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:rotate-6 transition-transform duration-300">
                VS
              </div>
              <span className="text-2xl font-bold tracking-tight font-sansation">
                Veritas Shield
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Restoring trust in the digital age. We provide the legal infrastructure to protect identities and stop misinformation at the source.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <SocialIcon icon={<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>} />
              <SocialIcon icon={<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>} />
              <SocialIcon icon={<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="space-y-4">
              <h4 className="font-bold text-white mb-2">Platform</h4>
              <FooterLink href="#">1-Click Takedown</FooterLink>
              <FooterLink href="#">Asset Registry</FooterLink>
              <FooterLink href="#">Audit & Accountability</FooterLink>
              <FooterLink href="#">Forensic API</FooterLink>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white mb-2">Company</h4>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Manifesto</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-sm cursor-not-allowed">Status</span>
                <span className="w-2 h-2 rounded-full bg-[#6CE975] animate-pulse"></span>
              </div>
            </div>

            {/* Newsletter Mini-Form */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <h4 className="font-bold text-white mb-2">Stay Protected</h4>
              <p className="text-xs text-white/50">Get the latest deepfake alerts.</p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#8A76FC] transition-colors"
                />
                <button className="bg-[#8A76FC] hover:bg-[#7b66fa] text-white text-sm font-bold py-2 rounded-lg transition-colors shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT & LEGAL */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
          <p>© 2025 Veritas Shield Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS ---

function FooterLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="block text-sm text-white/60 hover:text-[#FF6392] hover:translate-x-1 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#082235] transition-all duration-300">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {icon}
      </svg>
    </a>
  );
}