import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ModernElegantFooter = () => {
  const { language, toggleLanguage, currency } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error('Cette adresse email est déjà inscrite à notre newsletter');
        } else {
          throw error;
        }
      } else {
        toast.success('Merci pour votre inscription !');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = {
    'Notre Maison': [
      { name: 'À propos', href: '/about' },
      { name: 'Nos artisans', href: '/artisans' },
      { name: 'Boutique Atlas Perle', href: '/boutique' }
    ],
    'Services Client': [
      { name: 'FAQ', href: '/faq' },
      { name: 'Suivi de commande', href: '/tracking' },
      { name: 'Retours & échanges', href: '/returns' },
      { name: 'Contact', href: '/contact' }
    ],
    'Mentions Légales': [
      { name: 'Conditions Générales de Vente', href: '/terms-of-sale' },
      { name: 'Mentions légales', href: '/legal' },
      { name: 'Politique de confidentialité', href: '/privacy' },
      { name: 'Paramètres des cookies', href: '/cookies' }
    ],
    'Suivez-nous': [
      { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
      { name: 'TikTok', href: 'https://tiktok.com' },
      { name: 'Pinterest', href: 'https://pinterest.com' },
      { name: 'YouTube', href: 'https://youtube.com', icon: Youtube }
    ]
  };

  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-3">
            Newsletter
          </h2>
          <p className="text-stone-600 font-light mb-8">
            Inscrivez-vous pour recevoir nos dernières actualités
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 mb-3">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-stone-300 focus:border-stone-500 focus:ring-stone-500"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 bg-stone-900 text-white hover:bg-stone-800 font-light"
              >
                {isSubmitting ? '...' : 'S\'inscrire'}
              </Button>
            </div>
            <p className="text-xs text-stone-500">
              <a href="/privacy" className="hover:underline">
                Voir notre politique de confidentialité
              </a>
            </p>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-medium text-stone-900 mb-4 text-sm uppercase tracking-wide">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-stone-600 hover:text-stone-900 font-light text-sm transition-colors flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            {/* Logo */}
            <div className="order-2 md:order-1">
              <img
                src="/lovable-uploads/perle-atlas-logo.png"
                alt="Perle de l'Atlas"
                className="h-8 w-auto opacity-60"
              />
            </div>

            {/* Copyright */}
            <div className="order-1 md:order-2 flex-1 text-center">
              <p className="text-xs text-stone-500 font-light">
                © 2025 Perle de l'Atlas — Tous droits réservés
              </p>
            </div>

            {/* Language & Currency */}
            <div className="order-3 flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="text-xs text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1"
              >
                {language === 'fr' ? '🇫🇷' : '🇺🇸'}
                <span>{language === 'fr' ? 'FR' : 'EN'}</span>
              </button>
              <span className="text-xs text-stone-400">|</span>
              <span className="text-xs text-stone-600">
                {currency}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernElegantFooter;