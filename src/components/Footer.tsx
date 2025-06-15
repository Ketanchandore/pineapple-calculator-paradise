
const Footer = () => (
  <footer className="w-full bg-[#222a16] text-[#FFE066] px-6 py-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
    <span>
      © {new Date().getFullYear()} Pineapple Calculator Hub. All rights reserved.
    </span>
    <span>
      Crafted with <span className="text-[#00B86B] font-bold text-lg">🍍</span> by Pineapple Team.
    </span>
    <a href="mailto:support@pineapplehub.com" className="underline hover:text-[#FFBF00] transition-colors" id="contact">
      Contact Us
    </a>
  </footer>
);

export default Footer;
