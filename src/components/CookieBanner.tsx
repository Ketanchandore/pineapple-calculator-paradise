
import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieAccepted")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#FFE066] text-[#2A2605] p-4 flex flex-col sm:flex-row items-center justify-between z-50 shadow-lg">
      <span>
        This website uses cookies needed for basic functionality. By using our site, you accept our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </span>
      <button
        onClick={acceptCookies}
        className="mt-2 sm:mt-0 px-4 py-1 rounded bg-[#00B86B] text-white font-semibold shadow hover:bg-[#01995C] transition"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
