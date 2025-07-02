
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface SamraChatHeaderProps {
  language: 'fr' | 'en';
  onClose: () => void;
}

const SamraChatHeader = ({ language, onClose }: SamraChatHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-6 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="relative flex items-center justify-between">
        <div>
          <h3 className="text-xl font-light mb-1" style={{ fontFamily: 'Brush Script MT, cursive' }}>
            Samra
          </h3>
          <p className="text-amber-100 font-light text-sm">
            {language === 'fr' ? 'Votre conseillère beauté' : 'Your beauty consultant'}
          </p>
        </div>
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SamraChatHeader;
