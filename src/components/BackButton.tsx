
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
      className={`flex items-center gap-2 mb-4 hover:bg-primary hover:text-primary-foreground transition-colors ${className}`}
      aria-label="Go back to home page"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Home
    </Button>
  );
};

export default BackButton;
