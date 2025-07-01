
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Truck, RotateCcw, Leaf, CreditCard, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();

  const faqSections = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: language === 'fr' ? 'Livraison' : 'Shipping',
      items: [
        {
          question: language === 'fr' ? 'Quels sont les délais de livraison ?' : 'What are the delivery times?',
          answer: language === 'fr' 
            ? 'Nous livrons en 2-3 jours ouvrés en France métropolitaine et en 5-7 jours ouvrés en Europe. Pour les commandes internationales, comptez 7-14 jours ouvrés selon la destination.'
            : 'We deliver in 2-3 business days in metropolitan France and in 5-7 business days in Europe. For international orders, allow 7-14 business days depending on destination.'
        },
        {
          question: language === 'fr' ? 'Livrez-vous à l\'international ?' : 'Do you deliver internationally?',
          answer: language === 'fr'
            ? 'Oui, nous livrons dans le monde entier. Les frais de port varient selon la destination et le poids de votre commande. Vous pouvez calculer les frais lors de votre commande.'
            : 'Yes, we deliver worldwide. Shipping costs vary according to destination and weight of your order. You can calculate costs during checkout.'
        },
        {
          question: language === 'fr' ? 'À partir de quel montant la livraison est-elle gratuite ?' : 'From what amount is shipping free?',
          answer: language === 'fr'
            ? 'La livraison est gratuite en France métropolitaine à partir de 50€ d\'achat et en Europe à partir de 75€.'
            : 'Shipping is free in metropolitan France from €50 purchase and in Europe from €75.'
        }
      ]
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: language === 'fr' ? 'Retours & Échanges' : 'Returns & Exchanges',
      items: [
        {
          question: language === 'fr' ? 'Puis-je retourner ma commande ?' : 'Can I return my order?',
          answer: language === 'fr'
            ? 'Vous disposez de 30 jours pour retourner vos produits non utilisés dans leur emballage d\'origine. Les frais de retour sont à votre charge sauf en cas de produit défectueux.'
            : 'You have 30 days to return unused products in their original packaging. Return costs are at your expense except for defective products.'
        },
        {
          question: language === 'fr' ? 'Comment procéder à un échange ?' : 'How to proceed with an exchange?',
          answer: language === 'fr'
            ? 'Contactez notre service client avec votre numéro de commande. Nous vous enverrons une étiquette de retour et traiterons votre échange dès réception.'
            : 'Contact our customer service with your order number. We will send you a return label and process your exchange upon receipt.'
        }
      ]
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: language === 'fr' ? 'Ingrédients & Produits' : 'Ingredients & Products',
      items: [
        {
          question: language === 'fr' ? 'Vos produits sont-ils bio ?' : 'Are your products organic?',
          answer: language === 'fr'
            ? 'La majorité de nos produits sont formulés avec des ingrédients biologiques certifiés. Nous privilégions les ingrédients naturels et traditionnels du Maroc, notamment l\'huile d\'argan pure.'
            : 'Most of our products are formulated with certified organic ingredients. We favor natural and traditional ingredients from Morocco, especially pure argan oil.'
        },
        {
          question: language === 'fr' ? 'Conviennent-ils aux peaux sensibles ?' : 'Are they suitable for sensitive skin?',
          answer: language === 'fr'
            ? 'Nos formules sont douces et adaptées à tous types de peaux, y compris les plus sensibles. Cependant, nous recommandons de faire un test sur une petite zone avant la première utilisation.'
            : 'Our formulas are gentle and suitable for all skin types, including the most sensitive. However, we recommend testing on a small area before first use.'
        },
        {
          question: language === 'fr' ? 'D\'où proviennent vos ingrédients ?' : 'Where do your ingredients come from?',
          answer: language === 'fr'
            ? 'Tous nos ingrédients principaux proviennent du Maroc et sont sourcés directement auprès de coopératives locales. Nous privilégions le commerce équitable et la traçabilité.'
            : 'All our main ingredients come from Morocco and are sourced directly from local cooperatives. We favor fair trade and traceability.'
        }
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: language === 'fr' ? 'Paiement & Sécurité' : 'Payment & Security',
      items: [
        {
          question: language === 'fr' ? 'Quels moyens de paiement acceptez-vous ?' : 'What payment methods do you accept?',
          answer: language === 'fr'
            ? 'Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal et les virements bancaires. Tous les paiements sont sécurisés par cryptage SSL.'
            : 'We accept bank cards (Visa, Mastercard, American Express), PayPal and bank transfers. All payments are secured by SSL encryption.'
        },
        {
          question: language === 'fr' ? 'Mes données sont-elles sécurisées ?' : 'Is my data secure?',
          answer: language === 'fr'
            ? 'Absolument. Nous utilisons les dernières technologies de sécurisation et ne conservons jamais vos données bancaires. Toutes les transactions sont chiffrées.'
            : 'Absolutely. We use the latest security technologies and never store your banking data. All transactions are encrypted.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-amber-50 to-yellow-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-copper-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
            </h1>
            <p className="font-serif text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr'
                ? 'Trouvez rapidement les réponses à vos questions sur nos produits, livraisons et services'
                : 'Quickly find answers to your questions about our products, deliveries and services'
              }
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-copper-50 to-amber-50 p-8 border-b border-copper-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-copper-600 rounded-full flex items-center justify-center text-white">
                        {section.icon}
                      </div>
                      <h2 className="font-serif font-bold text-2xl text-clay-800">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <Accordion type="single" collapsible className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <AccordionItem 
                          key={itemIndex} 
                          value={`${sectionIndex}-${itemIndex}`}
                          className="border border-copper-100 rounded-2xl px-6 hover:shadow-md transition-all duration-300"
                        >
                          <AccordionTrigger className="font-serif font-semibold text-lg text-clay-800 hover:text-copper-600 py-6">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="font-serif text-clay-600 leading-relaxed pb-6 text-base">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-copper-100 via-amber-100 to-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-clay-800 mb-8">
                {language === 'fr' ? 'Besoin d\'aide supplémentaire ?' : 'Need additional help?'}
              </h2>
              <p className="font-serif text-lg text-clay-600 mb-10 leading-relaxed">
                {language === 'fr'
                  ? 'Notre équipe est à votre disposition pour répondre à toutes vos questions'
                  : 'Our team is available to answer all your questions'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center bg-copper-600 hover:bg-copper-700 text-white px-8 py-4 rounded-full font-serif font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                </a>
                <a 
                  href="tel:+33663068980"
                  className="inline-flex items-center bg-white hover:bg-pearl-50 text-copper-700 border-2 border-copper-200 hover:border-copper-400 px-8 py-4 rounded-full font-serif font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +33 6 63 06 89 80
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default FAQ;
