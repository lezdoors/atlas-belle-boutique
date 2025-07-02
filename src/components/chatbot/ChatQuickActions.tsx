
import { Button } from '@/components/ui/button';
import { Crown, Heart, HelpCircle, MessageCircle, Sparkles, MapPin } from 'lucide-react';

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
      icon: Crown,
      label: language === 'fr' ? 'Tajines' : 'Tajines',
      action: () => {
        const msg = language === 'fr' ? 'Parlez-moi de vos tajines artisanaux' : 'Tell me about your handmade tajines';
        onActionClick(msg);
      }
    },
    {
      icon: Sparkles,
      label: language === 'fr' ? 'Verres' : 'Glasses',
      action: () => {
        const msg = language === 'fr' ? 'Quels verres marocains proposez-vous ?' : 'What Moroccan glasses do you offer?';
        onActionClick(msg);
      }
    },
    {
      icon: MapPin,
      label: language === 'fr' ? 'Livraison' : 'Shipping',
      action: () => {
        const msg = language === 'fr' ? 'Comment fonctionne la livraison ?' : 'How does shipping work?';
        onActionClick(msg);
      }
    },
    {
      icon: MessageCircle,
      label: language === 'fr' ? 'Contacter via WhatsApp' : 'Contact WhatsApp',
      action: onWhatsAppRedirect
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-1 md:gap-2 mb-2 md:mb-3">
      {quickActions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={action.action}
          className="flex flex-col items-center gap-1 h-auto py-1.5 md:py-2 px-1 border-clay-200 hover:border-copper-400 hover:bg-copper-50 text-xs"
        >
          <action.icon className="h-3 w-3 md:h-4 md:w-4" />
          <span className="text-[10px] md:text-xs leading-tight text-center">{action.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ChatQuickActions;
