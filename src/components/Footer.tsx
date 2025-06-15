const Footer = () => (
  <footer className="w-full bg-[#222a16] text-[#FFE066] px-6 py-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
    <span>
      © {new Date().getFullYear()} Pineapple Calculator Hub. All rights reserved.
    </span>
    <span>
      Crafted with <span className="text-[#00B86B] font-bold text-lg">🍍</span> by Pineapple Team.
    </span>
    <nav className="flex flex-col sm:flex-row gap-2 text-sm">
      <a href="/about" className="underline hover:text-[#FFBF00] transition-colors">About</a>
      <a href="/privacy-policy" className="underline hover:text-[#FFBF00] transition-colors">Privacy</a>
      <a href="/terms-of-service" className="underline hover:text-[#FFBF00] transition-colors">Terms</a>
      <a href="/contact" className="underline hover:text-[#FFBF00] transition-colors" id="contact">Contact</a>
    </nav>
  </footer>
);
export default Footer;
