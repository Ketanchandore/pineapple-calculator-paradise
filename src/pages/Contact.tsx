
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex-1 max-w-3xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-display font-bold mb-4">Contact Us</h1>
      <p>
        For support, requests, or questions, email us at:
        <a href="mailto:support@pineapplehub.com" className="underline ml-1">support@pineapplehub.com</a>
      </p>
      <p className="mt-4">
        We'll get back to you as soon as possible!
      </p>
    </main>
    <Footer />
  </div>
);

export default Contact;
