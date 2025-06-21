
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, HelpCircle, Phone, Crown } from 'lucide-react';

interface ChatQuickActionsProps {
  language: 'fr' | 'en';
  onActionClick: (message: string) => void;
  onWhatsAppRedirect: () => void;
}

const ChatQuickActions = ({ language, onActionClick, onWhatsAppRedirect }: ChatQuickActionsProps) => {
  const quickActions = [
    {
      icon: ShoppingBag,
      label: language === 'fr' ? 'Produits' : 'Products',
      action: () => {
        const msg = language === 'fr' ? 'Quels produits recommandez-vous ?' : 'What products do you recommend?';
        onActionClick(msg);
      }
    },
    {
      icon: Heart,
      label: language === 'fr' ? 'Rituels' : 'Rituals',
      action: () => {
        const msg = language === 'fr' ? 'Parlez-moi des rituels de beauté' : 'Tell me about beauty rituals';
        onActionClick(msg);
      }
    },
    {
      icon: Crown,
      label: language === 'fr' ? 'Fidélité' : 'Loyalty',
      action: () => {
        const msg = language === 'fr' ? 'Comment fonctionne le programme fidélité ?' : 'How does the loyalty program work?';
        onActionClick(msg);
      }
    },
    {
      icon: HelpCircle,
      label: language === 'fr' ? 'Aide' : 'Help',
      action: () => {
        const msg = language === 'fr' ? 'J\'ai besoin d\'aide avec ma commande' : 'I need help with my order';
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
    <div className="grid grid-cols-5 gap-2 mb-3">
      {quickActions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={action.action}
          className="flex flex-col items-center gap-1 h-auto py-2 px-1 border-clay-200 hover:border-copper-400 hover:bg-copper-50"
        >
          <action.icon className="h-4 w-4" />
          <span className="text-xs">{action.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ChatQuickActions;
