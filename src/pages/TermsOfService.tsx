
import React from "react";

const TermsOfService = () => (
  <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-3xl font-display font-bold mb-4">Terms of Service</h1>
    <ol className="list-decimal pl-6 space-y-2">
      <li>
        By using <b>Pineapple Calculator Hub</b>, you agree to these terms.
      </li>
      <li>
        No misuse or unauthorized use of the platform is allowed.
      </li>
      <li>
        Calculators are provided for informational purposes, not professional advice.
      </li>
      <li>
        Account security is your responsibility. Report any issues to us immediately.
      </li>
      <li>
        We reserve the right to update these Terms at any time.
      </li>
    </ol>
    <p className="mt-4 text-xs text-muted-foreground">
      Last updated: {new Date().toLocaleDateString()}
    </p>
  </div>
);

export default TermsOfService;
