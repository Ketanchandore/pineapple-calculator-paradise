
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const About = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex-1 max-w-3xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-display font-bold mb-4">About Us</h1>
      <p>
        <b>Pineapple Calculator Hub</b> brings together many calculators in one easy-to-use, modern website.
        Our mission: empower everyone with accurate, fast, and free calculation tools.
      </p>
      <p className="mt-4">
        Built with ❤️ by the Pineapple Team.
      </p>
    </main>
    <Footer />
  </div>
);

export default About;
