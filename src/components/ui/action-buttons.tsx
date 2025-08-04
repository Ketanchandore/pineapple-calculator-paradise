
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ModernButton } from '@/components/ui/modern-button';
import { 
  Download, 
  Printer, 
  Share2, 
  Copy, 
  MessageCircle, 
  Mail, 
  CheckCircle,
  Facebook
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ActionButtonsProps {
  result: any;
  calculatorName: string;
  resultElementId?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  result, 
  calculatorName, 
  resultElementId = 'calculator-result' 
}) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const copyToClipboard = async () => {
    try {
      const resultText = typeof result === 'object' 
        ? Object.entries(result).map(([key, value]) => `${key}: ${value}`).join('\n')
        : result.toString();
      
      await navigator.clipboard.writeText(resultText);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Result copied to clipboard",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy result",
        variant: "destructive",
      });
    }
  };

  const downloadPDF = async () => {
    setDownloading(true);
    try {
      const element = document.getElementById(resultElementId);
      if (!element) throw new Error('Result element not found');

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${calculatorName}-result.pdf`);
      
      toast({
        title: "Downloaded!",
        description: "PDF saved successfully",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to download PDF",
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  };

  const printResult = () => {
    const element = document.getElementById(resultElementId);
    if (!element) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${calculatorName} Result - PineappleHub</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .result-container { max-width: 600px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 30px; }
            .footer { text-align: center; margin-top: 30px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>PineappleHub - ${calculatorName}</h1>
            <p>Free Online Calculator Results</p>
          </div>
          <div class="result-container">
            ${element.outerHTML}
          </div>
          <div class="footer">
            <p>Generated at ${new Date().toLocaleDateString()} | Visit: PineappleHub.com</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
  };

  const shareViaWhatsApp = () => {
    const resultText = typeof result === 'object' 
      ? Object.entries(result).map(([key, value]) => `${key}: ${value}`).join('\n')
      : result.toString();
    
    const text = `🧮 Check out my ${calculatorName} result from PineappleHub!\n\n${resultText}\n\nCalculate yours: ${window.location.href}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
  };

  const shareViaTelegram = () => {
    const resultText = typeof result === 'object' 
      ? Object.entries(result).map(([key, value]) => `${key}: ${value}`).join('\n')
      : result.toString();
    
    const text = `🧮 Check out my ${calculatorName} result from PineappleHub!\n\n${resultText}\n\nCalculate yours: ${window.location.href}`;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://t.me/share/url?url=${url}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareViaEmail = () => {
    const resultText = typeof result === 'object' 
      ? Object.entries(result).map(([key, value]) => `${key}: ${value}`).join('\n')
      : result.toString();
    
    const subject = encodeURIComponent(`${calculatorName} Result from PineappleHub`);
    const body = encodeURIComponent(`Hi,\n\nI calculated my ${calculatorName} result using PineappleHub's free calculator.\n\nMy Result:\n${resultText}\n\nTry it yourself: ${window.location.href}\n\nBest regards`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  const shareViaFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const quote = encodeURIComponent(`Just used PineappleHub's ${calculatorName} - awesome free calculator tool!`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`, '_blank');
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-6 animate-fade-in" id="action-buttons">
      <ModernButton
        onClick={copyToClipboard}
        variant="outline"
        size="sm"
        className="gap-2"
        glassEffect
      >
        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? 'Copied!' : 'Copy'}
      </ModernButton>

      <ModernButton
        onClick={downloadPDF}
        variant="outline"
        size="sm"
        className="gap-2"
        loading={downloading}
        glassEffect
      >
        <Download className="h-4 w-4" />
        Download PDF
      </ModernButton>

      <ModernButton
        onClick={printResult}
        variant="outline"
        size="sm"
        className="gap-2"
        glassEffect
      >
        <Printer className="h-4 w-4" />
        Print
      </ModernButton>

      <ModernButton
        onClick={shareViaWhatsApp}
        variant="outline"
        size="sm"
        className="gap-2 text-green-600 hover:text-green-700"
        glassEffect
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </ModernButton>

      <ModernButton
        onClick={shareViaTelegram}
        variant="outline"
        size="sm"
        className="gap-2 text-blue-500 hover:text-blue-600"
        glassEffect
      >
        <Share2 className="h-4 w-4" />
        Telegram
      </ModernButton>

      <ModernButton
        onClick={shareViaFacebook}
        variant="outline"
        size="sm"
        className="gap-2 text-blue-600 hover:text-blue-700"
        glassEffect
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </ModernButton>

      <ModernButton
        onClick={shareViaEmail}
        variant="outline"
        size="sm"
        className="gap-2"
        glassEffect
      >
        <Mail className="h-4 w-4" />
        Email
      </ModernButton>
    </div>
  );
};

export default ActionButtons;
