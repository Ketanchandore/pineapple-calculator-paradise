
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex-1 max-w-3xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-display font-bold mb-4">Privacy Policy</h1>
      <p>
        <b>Pineapple Calculator Hub</b> values your privacy. We only collect data necessary to provide and improve our service (such as an internal user ID and email for authentication).
      </p>
      <p className="mt-4">
        We do not sell or share your personal information with third parties except as necessary for authentication or legal compliance.
      </p>
      <p className="mt-4">
        If you have any questions, please contact us at <a href="mailto:support@pineapplehub.com" className="underline">support@pineapplehub.com</a>.
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
