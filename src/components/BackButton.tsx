
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </Button>
  );
};
