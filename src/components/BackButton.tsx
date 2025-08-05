
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  to?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/", className = "" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleBack}
      className={`flex items-center gap-2 mb-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-700 dark:hover:to-slate-600 hover:border-blue-300 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
      aria-label="Go back to home page"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Home
    </Button>
  );
};

export default BackButton;
