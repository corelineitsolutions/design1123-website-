export function Footer() {
  const links = {
    Explore: [
      { name: "Home", href: "/#home" },
      { name: "Features", href: "/#features" },
      { name: "Categories", href: "/#categories" },
      { name: "Templates", href: "/#showcases" }
    ],
    Resources: [
      { name: "Pricing", href: "/#pricing" },
      { name: "FAQ", href: "/#faq" }
    ],
    Support: [
      { name: "Contact Support", href: "/#contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" }
    ],
  };

  return (
    <footer id="contact" className="bg-[#101010] border-t border-border-glass pt-20 pb-10 relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-3 space-y-6">
            <div className="font-heading font-black text-2xl tracking-tighter text-white flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Design 1123 Logo" 
                className="h-9 w-auto object-contain" 
              />
              <span>Design <span className="text-gradient">1123</span></span>
            </div>
            <p className="text-text-secondary mb-8 max-w-sm leading-relaxed text-sm">
              The professional template creation platform that enables users to design beautiful and professional marketing graphics in minutes, with zero design experience required.
            </p>
            <div className="flex items-center gap-3">
               {/* Social Icons mock */}
               {["FB", "TW", "IG", "YT"].map((social, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-brand-orange/30 hover:bg-white/10 flex items-center justify-center transition-all duration-300 text-xs font-bold text-text-secondary hover:text-white">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-black text-sm uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              {links.Explore.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-secondary hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-black text-sm uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              {links.Resources.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-secondary hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-black text-sm uppercase tracking-wider mb-6">Legal & Help</h4>
            <ul className="space-y-4 text-sm">
              {links.Support.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-secondary hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-glass pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-xs">
            © {new Date().getFullYear()} Design 1123. All rights reserved.
          </div>
          <div className="text-text-secondary text-xs font-bold uppercase tracking-wider">
            Designed for Instant Impact.
          </div>
        </div>
      </div>
    </footer>
  );
}
