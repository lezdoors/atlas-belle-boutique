
import React from 'react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircle, Mail } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();

  const faqData = [
    {
      question: language === 'fr' ? 'Livrez-vous à l\'international ?' : 'Do you ship internationally?',
      answer: language === 'fr' 
        ? 'Oui, nous expédions dans le monde entier depuis le Maroc. Nos créations voyagent avec soin jusqu\'à votre porte, où que vous soyez. Nous utilisons des services de livraison express fiables pour garantir que vos trésors artisanaux arrivent en parfait état.'
        : 'Yes, we ship worldwide from Morocco. Our creations travel with care to your door, wherever you are. We use reliable express delivery services to ensure your artisanal treasures arrive in perfect condition.'
    },
    {
      question: language === 'fr' ? 'Quand ma commande arrivera-t-elle ?' : 'When will my order arrive?',
      answer: language === 'fr'
        ? 'Vos créations voyagent généralement entre 2 à 5 jours ouvrables selon votre destination. Chaque commande est soigneusement emballée à la main dans nos ateliers de Casablanca avant son voyage vers vous. Vous recevrez un numéro de suivi pour accompagner votre commande.'
        : 'Your creations typically travel between 2-5 business days depending on your destination. Each order is carefully hand-packed in our Casablanca workshops before its journey to you. You\'ll receive a tracking number to follow your order.'
    },
    {
      question: language === 'fr' ? 'La livraison est-elle vraiment gratuite dès 149€ ?' : 'Is shipping really free over $149?',
      answer: language === 'fr'
        ? 'Absolument ! Dès que votre panier atteint 149€, nous prenons en charge tous les frais de livraison internationale. C\'est notre façon de vous remercier de célébrer l\'artisanat marocain avec nous. En dessous de ce montant, les frais de livraison varient selon votre région.'
        : 'Absolutely! Once your basket reaches €149, we cover all international shipping costs. It\'s our way of thanking you for celebrating Moroccan craftsmanship with us. Below this amount, shipping costs vary by region.'
    },
    {
      question: language === 'fr' ? 'Puis-je retourner mon produit ?' : 'Can I return my product?',
      answer: language === 'fr'
        ? 'Si votre création arrive endommagée ou ne correspond pas à vos attentes, contactez-nous dans les 7 jours. Nous travaillons toujours avec bienveillance pour trouver une solution équitable. Chaque pièce étant unique et faite main, nous privilégions le dialogue pour résoudre tout malentendu.'
        : 'If your creation arrives damaged or doesn\'t meet your expectations, contact us within 7 days. We always work with kindness to find a fair solution. Since each piece is unique and handmade, we favor dialogue to resolve any misunderstanding.'
    },
    {
      question: language === 'fr' ? 'Vos produits sont-ils vraiment faits main ?' : 'Are your products really handmade?',
      answer: language === 'fr'
        ? 'Chaque création naît des mains expertes de nos artisans partenaires dans tout le Maroc. Du soufflage du verre à Fès au modelage de l\'argile dans l\'Atlas, chaque geste perpétue des traditions millénaires. C\'est cette authenticité qui rend chaque pièce unique et précieuse.'
        : 'Each creation is born from the expert hands of our partner artisans throughout Morocco. From glass blowing in Fez to clay molding in the Atlas, each gesture perpetuates thousand-year-old traditions. It\'s this authenticity that makes each piece unique and precious.'
    },
    {
      question: language === 'fr' ? 'Quels moyens de paiement acceptez-vous ?' : 'What payment methods do you accept?',
      answer: language === 'fr'
        ? 'Nous acceptons toutes les cartes bancaires principales (Visa, Mastercard, American Express) ainsi que PayPal. Tous vos paiements sont sécurisés par cryptage SSL et traités avec la plus grande confidentialité. Votre sécurité est notre priorité absolue.'
        : 'We accept all major bank cards (Visa, Mastercard, American Express) as well as PayPal. All your payments are secured by SSL encryption and processed with the utmost confidentiality. Your security is our absolute priority.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AppleStyleHeader />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-black mb-6 tracking-tight">
            {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl font-light text-black/60 leading-relaxed max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Tout ce que vous devez savoir sur nos créations artisanales et notre service'
              : 'Everything you need to know about our artisanal creations and our service'
            }
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-black/10 rounded-2xl px-6 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-light text-black hover:text-black/70 py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-black/70 leading-relaxed pb-6 text-base font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extralight text-black mb-6 tracking-tight">
            {language === 'fr' ? 'Besoin d\'aide supplémentaire ?' : 'Need additional help?'}
          </h2>
          <p className="text-lg font-light text-black/60 mb-8 leading-relaxed">
            {language === 'fr'
              ? 'Notre équipe est là pour vous accompagner dans votre découverte de l\'artisanat marocain'
              : 'Our team is here to guide you in your discovery of Moroccan craftsmanship'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="mailto:support@atlasperle.com"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-light transition-all duration-300 hover:bg-black/90"
            >
              <Mail className="h-5 w-5 mr-2" />
              support@atlasperle.com
            </a>
            <button
              onClick={() => {
                // This would trigger the chatbot
                console.log('Open chatbot');
              }}
              className="inline-flex items-center justify-center border border-black/20 text-black px-6 py-3 rounded-full font-light transition-all duration-300 hover:bg-black/5"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {language === 'fr' ? 'Chat avec Samra' : 'Chat with Samra'}
            </button>
          </div>
        </div>
      </section>

      <AppleStyleFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default FAQ;
