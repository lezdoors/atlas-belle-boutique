
import { Button } from '@/components/ui/button';
import { Crown, Heart, HelpCircle, Phone, Sparkles, MapPin } from 'lucide-react';

interface QuickAction {
  icon: typeof Crown;
  label: string;
  action: () => void;
}

interface ChatQuickActionsProps {
  language: 'fr' | 'en';
  onActionClick: (message: string) => void;
  onWhatsAppRedirect: () => void;
}

const ChatQuickActions = ({ language, onActionClick, onWhatsAppRedirect }: ChatQuickActionsProps) => {
  const quickActions: QuickAction[] = [
    {
      icon: Sparkles,
      label: language === 'fr' ? 'Huile Argan' : 'Argan Oil',
      action: () => {
        const msg = language === 'fr' ? 'Parlez-moi de vos huiles d\'argan premium' : 'Tell me about your premium argan oils';
        onActionClick(msg);
      }
    },
    {
      icon: Heart,
      label: language === 'fr' ? 'Rituels' : 'Rituals',
      action: () => {
        const msg = language === 'fr' ? 'Quels sont vos rituels de beauté traditionnels ?' : 'What are your traditional beauty rituals?';
        onActionClick(msg);
      }
    },
    {
      icon: MapPin,
      label: language === 'fr' ? 'Artisans' : 'Artisans',
      action: () => {
        const msg = language === 'fr' ? 'Parlez-moi de vos artisans berbères' : 'Tell me about your Berber artisans';
        onActionClick(msg);
      }
    },
    {
      icon: Phone,
      label: language === 'fr' ? 'WhatsApp' : 'WhatsApp',
      action: onWhatsAppRedirect
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-1 md:gap-2 mb-2 md:mb-3">
      {quickActions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={action.action}
          className="flex flex-col items-center gap-1 h-auto py-1.5 md:py-2 px-1 border-clay-200 hover:border-copper-400 hover:bg-copper-50 text-xs"
        >
          <action.icon className="h-3 w-3 md:h-4 md:w-4" />
          <span className="text-[10px] md:text-xs leading-tight">{action.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ChatQuickActions;
