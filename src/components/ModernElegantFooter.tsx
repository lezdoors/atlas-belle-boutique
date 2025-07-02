import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { t } from '@/utils/translations';

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
    [t('footer.sections.ourHouse', language)]: [
      { name: t('footer.links.about', language), href: '/about' },
      { name: t('footer.links.artisans', language), href: '/artisans' },
      { name: t('footer.links.shop', language), href: '/boutique' }
    ],
    [t('footer.sections.customerService', language)]: [
      { name: t('footer.links.faq', language), href: '/faq' },
      { name: t('footer.links.tracking', language), href: '/tracking' },
      { name: t('footer.links.shippingReturns', language), href: '/shipping-returns' },
      { name: t('footer.links.contact', language), href: '/contact' }
    ],
    [t('footer.sections.legal', language)]: [
      { name: t('footer.links.terms', language), href: '/terms' },
      { name: t('footer.links.legal', language), href: '/legal' },
      { name: t('footer.links.privacy', language), href: '/privacy-policy' },
      { name: t('footer.links.cookies', language), href: '/cookies' }
    ],
    [t('footer.sections.followUs', language)]: [
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
            {t('footer.newsletter', language)}
          </h2>
          <p className="text-stone-600 font-light mb-8">
            {t('footer.newsletterSubtitle', language)}
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 mb-3">
              <Input
                type="email"
                placeholder={t('footer.emailPlaceholder', language)}
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
                {isSubmitting ? '...' : t('footer.subscribe', language)}
              </Button>
            </div>
            <p className="text-xs text-stone-500">
              <a href="/privacy-policy" className="hover:underline">
                {t('footer.privacyLink', language)}
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
                {t('footer.copyright', language)}
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