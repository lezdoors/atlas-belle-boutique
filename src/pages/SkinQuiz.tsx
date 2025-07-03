
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraEnhancedChatbot from '@/components/SamraEnhancedChatbot';
import FloatingCart from '@/components/FloatingCart';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const SkinQuiz = () => {
  const { language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: language === 'fr' ? 'Comment décririez-vous votre peau le matin ?' : 'How would you describe your skin in the morning?',
      options: [
        { id: 'oily', label: language === 'fr' ? 'Grasse, avec des brillances' : 'Oily, with shine', value: 'oily' },
        { id: 'dry', label: language === 'fr' ? 'Sèche, tiraillements' : 'Dry, tight feeling', value: 'dry' },
        { id: 'mixed', label: language === 'fr' ? 'Zone T grasse, joues normales' : 'Oily T-zone, normal cheeks', value: 'combination' },
        { id: 'normal', label: language === 'fr' ? 'Équilibrée, confortable' : 'Balanced, comfortable', value: 'normal' }
      ]
    },
    {
      id: 1,
      question: language === 'fr' ? 'Comment réagit votre peau au soleil ?' : 'How does your skin react to the sun?',
      options: [
        { id: 'burns', label: language === 'fr' ? 'Brûle facilement, bronze peu' : 'Burns easily, tans little', value: 'sensitive' },
        { id: 'tans', label: language === 'fr' ? 'Bronze facilement' : 'Tans easily', value: 'normal' },
        { id: 'spots', label: language === 'fr' ? 'Développe des taches' : 'Develops spots', value: 'mature' },
        { id: 'protected', label: language === 'fr' ? 'Bien protégée naturellement' : 'Naturally well protected', value: 'oily' }
      ]
    },
    {
      id: 2,
      question: language === 'fr' ? 'Quel est votre âge ?' : 'What is your age?',
      options: [
        { id: 'young', label: language === 'fr' ? 'Moins de 25 ans' : 'Under 25', value: 'young' },
        { id: 'adult', label: language === 'fr' ? '25-35 ans' : '25-35 years', value: 'adult' },
        { id: 'mature', label: language === 'fr' ? '35-50 ans' : '35-50 years', value: 'mature' },
        { id: 'senior', label: language === 'fr' ? 'Plus de 50 ans' : 'Over 50', value: 'senior' }
      ]
    },
    {
      id: 3,
      question: language === 'fr' ? 'Quels sont vos préoccupations principales ?' : 'What are your main concerns?',
      options: [
        { id: 'acne', label: language === 'fr' ? 'Imperfections, boutons' : 'Imperfections, acne', value: 'oily' },
        { id: 'dryness', label: language === 'fr' ? 'Sécheresse, desquamation' : 'Dryness, flaking', value: 'dry' },
        { id: 'aging', label: language === 'fr' ? 'Rides, perte de fermeté' : 'Wrinkles, loss of firmness', value: 'mature' },
        { id: 'sensitivity', label: language === 'fr' ? 'Rougeurs, irritations' : 'Redness, irritation', value: 'sensitive' }
      ]
    },
    {
      id: 4,
      question: language === 'fr' ? 'À quelle fréquence hydratez-vous votre peau ?' : 'How often do you moisturize your skin?',
      options: [
        { id: 'daily', label: language === 'fr' ? 'Deux fois par jour' : 'Twice daily', value: 'routine' },
        { id: 'once', label: language === 'fr' ? 'Une fois par jour' : 'Once daily', value: 'normal' },
        { id: 'sometimes', label: language === 'fr' ? 'Parfois' : 'Sometimes', value: 'neglected' },
        { id: 'never', label: language === 'fr' ? 'Rarement' : 'Rarely', value: 'neglected' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateSkinType = () => {
    const values = Object.values(answers);
    const counts = values.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const skinType = Object.entries(counts).reduce((a, b) => counts[a[0]] > counts[b[0]] ? a : b)[0];
    
    const skinTypes = {
      'oily': {
        type: language === 'fr' ? 'Peau Grasse' : 'Oily Skin',
        description: language === 'fr' 
          ? 'Votre peau produit un excès de sébum, particulièrement sur la zone T. Elle a tendance à briller et peut présenter des imperfections.'
          : 'Your skin produces excess sebum, particularly in the T-zone. It tends to shine and may have imperfections.',
        recommendations: [
          language === 'fr' ? 'Nettoyage doux au Ghassoul' : 'Gentle cleansing with Ghassoul',
          language === 'fr' ? 'Hydratation légère à l\'huile d\'argan' : 'Light moisturizing with argan oil',
          language === 'fr' ? 'Masque purifiant hebdomadaire' : 'Weekly purifying mask'
        ],
        products: [
          language === 'fr' ? 'Savon au Ghassoul Purifiant' : 'Purifying Ghassoul Soap',
          language === 'fr' ? 'Sérum Équilibrant' : 'Balancing Serum',
          language === 'fr' ? 'Crème Matifiante' : 'Mattifying Cream'
        ]
      },
      'dry': {
        type: language === 'fr' ? 'Peau Sèche' : 'Dry Skin',
        description: language === 'fr'
          ? 'Votre peau manque de lipides et d\'hydratation. Elle peut tirailler, desquamer et présenter des ridules de déshydratation.'
          : 'Your skin lacks lipids and hydration. It may feel tight, flake and show dehydration lines.',
        recommendations: [
          language === 'fr' ? 'Nettoyage doux sans savon' : 'Gentle soap-free cleansing',
          language === 'fr' ? 'Hydratation riche matin et soir' : 'Rich moisturizing morning and evening',
          language === 'fr' ? 'Huiles nourrissantes' : 'Nourishing oils'
        ],
        products: [
          language === 'fr' ? 'Huile d\'Argan Premium' : 'Premium Argan Oil',
          language === 'fr' ? 'Crème Nourrissante Intense' : 'Intense Nourishing Cream',
          language === 'fr' ? 'Masque Hydratant au Miel' : 'Honey Hydrating Mask'
        ]
      },
      'combination': {
        type: language === 'fr' ? 'Peau Mixte' : 'Combination Skin',
        description: language === 'fr'
          ? 'Votre peau présente une zone T grasse (front, nez, menton) et des joues normales à sèches.'
          : 'Your skin has an oily T-zone (forehead, nose, chin) and normal to dry cheeks.',
        recommendations: [
          language === 'fr' ? 'Soins ciblés par zone' : 'Targeted care by zone',
          language === 'fr' ? 'Nettoyage équilibrant' : 'Balancing cleansing',
          language === 'fr' ? 'Hydratation modulée' : 'Modulated hydration'
        ],
        products: [
          language === 'fr' ? 'Gel Nettoyant Équilibrant' : 'Balancing Cleansing Gel',
          language === 'fr' ? 'Sérum Multi-zones' : 'Multi-zone Serum',
          language === 'fr' ? 'Crème Adaptative' : 'Adaptive Cream'
        ]
      },
      'sensitive': {
        type: language === 'fr' ? 'Peau Sensible' : 'Sensitive Skin',
        description: language === 'fr'
          ? 'Votre peau réagit facilement aux agressions extérieures et peut présenter des rougeurs ou irritations.'
          : 'Your skin reacts easily to external aggressions and may show redness or irritation.',
        recommendations: [
          language === 'fr' ? 'Produits hypoallergéniques' : 'Hypoallergenic products',
          language === 'fr' ? 'Ingrédients apaisants' : 'Soothing ingredients',
          language === 'fr' ? 'Protection solaire quotidienne' : 'Daily sun protection'
        ],
        products: [
          language === 'fr' ? 'Lait Démaquillant Doux' : 'Gentle Cleansing Milk',
          language === 'fr' ? 'Crème Apaisante' : 'Soothing Cream',
          language === 'fr' ? 'Huile Régénérante' : 'Regenerating Oil'
        ]
      },
      'mature': {
        type: language === 'fr' ? 'Peau Mature' : 'Mature Skin',
        description: language === 'fr'
          ? 'Votre peau montre des signes de vieillissement : rides, perte de fermeté, taches pigmentaires.'
          : 'Your skin shows signs of aging: wrinkles, loss of firmness, pigmentation spots.',
        recommendations: [
          language === 'fr' ? 'Soins anti-âge ciblés' : 'Targeted anti-aging care',
          language === 'fr' ? 'Hydratation intensive' : 'Intensive hydration',
          language === 'fr' ? 'Protection antioxydante' : 'Antioxidant protection'
        ],
        products: [
          language === 'fr' ? 'Sérum Anti-âge' : 'Anti-aging Serum',
          language === 'fr' ? 'Crème Régénérante' : 'Regenerating Cream',
          language === 'fr' ? 'Masque Lift Naturel' : 'Natural Lift Mask'
        ]
      },
      'normal': {
        type: language === 'fr' ? 'Peau Normale' : 'Normal Skin',
        description: language === 'fr'
          ? 'Votre peau est équilibrée, sans problèmes particuliers. Elle est confortable et éclatante.'
          : 'Your skin is balanced, without particular problems. It is comfortable and radiant.',
        recommendations: [
          language === 'fr' ? 'Routine d\'entretien simple' : 'Simple maintenance routine',
          language === 'fr' ? 'Protection préventive' : 'Preventive protection',
          language === 'fr' ? 'Soins saisonniers' : 'Seasonal care'
        ],
        products: [
          language === 'fr' ? 'Nettoyant Universel' : 'Universal Cleanser',
          language === 'fr' ? 'Crème Équilibrante' : 'Balancing Cream',
          language === 'fr' ? 'Huile de Beauté' : 'Beauty Oil'
        ]
      }
    };

    return skinTypes[skinType as keyof typeof skinTypes] || skinTypes.normal;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const result = calculateSkinType();
    
    return (
      <div className="min-h-screen bg-pearl-50">
        <MaisonStyleHeaderNew />
        
        <main className="pt-20 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-copper-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-copper-600" />
              </div>
              <h1 className="font-display text-4xl font-bold text-clay-800 mb-4">
                {language === 'fr' ? 'Votre Type de Peau' : 'Your Skin Type'}
              </h1>
              <Badge className="bg-copper-600 text-white text-lg px-6 py-2">
                {result.type}
              </Badge>
            </div>

            <Card className="border-0 luxury-shadow mb-8">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-clay-800 mb-4">
                  {language === 'fr' ? 'Analyse de Votre Peau' : 'Your Skin Analysis'}
                </h2>
                <p className="text-clay-700 font-serif text-lg leading-relaxed mb-6">
                  {result.description}
                </p>
                
                <h3 className="font-bold text-xl text-clay-800 mb-4">
                  {language === 'fr' ? 'Nos Recommandations' : 'Our Recommendations'}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-clay-700 mb-3">
                      {language === 'fr' ? 'Conseils d\'Usage' : 'Usage Tips'}
                    </h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-center text-clay-600">
                          <CheckCircle className="h-4 w-4 text-copper-600 mr-2 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-clay-700 mb-3">
                      {language === 'fr' ? 'Produits Recommandés' : 'Recommended Products'}
                    </h4>
                    <ul className="space-y-2">
                      {result.products.map((product, index) => (
                        <li key={index} className="flex items-center text-clay-600">
                          <CheckCircle className="h-4 w-4 text-copper-600 mr-2 flex-shrink-0" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <Button className="copper-gradient text-white mr-4">
                {language === 'fr' ? 'Voir les Produits Recommandés' : 'View Recommended Products'}
              </Button>
              <Button variant="outline" onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
              }}>
                {language === 'fr' ? 'Refaire le Quiz' : 'Retake Quiz'}
              </Button>
            </div>
          </div>
        </main>
        
        <ModernElegantFooter />
        <SamraEnhancedChatbot />
        <FloatingCart />
        <BackToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl-50">
      <MaisonStyleHeaderNew />
      
      <main className="pt-20 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-clay-800 mb-4">
              {language === 'fr' ? 'Quiz Type de Peau' : 'Skin Type Quiz'}
            </h1>
            <p className="text-xl text-clay-600 font-serif">
              {language === 'fr'
                ? 'Découvrez votre type de peau et obtenez des conseils personnalisés'
                : 'Discover your skin type and get personalized advice'
              }
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-clay-600">
                {language === 'fr' ? 'Progression' : 'Progress'}
              </span>
              <span className="text-sm text-clay-600">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="border-0 luxury-shadow mb-8">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold text-clay-800 mb-8">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                      answers[currentQuestion] === option.value
                        ? 'border-copper-500 bg-copper-50'
                        : 'border-pearl-200 hover:border-copper-300 hover:bg-copper-25'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-4 ${
                        answers[currentQuestion] === option.value
                          ? 'border-copper-500 bg-copper-500'
                          : 'border-clay-300'
                      }`}>
                        {answers[currentQuestion] === option.value && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="font-serif text-clay-700">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Précédent' : 'Previous'}
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="copper-gradient text-white flex items-center"
            >
              {currentQuestion === questions.length - 1
                ? (language === 'fr' ? 'Voir les Résultats' : 'View Results')
                : (language === 'fr' ? 'Suivant' : 'Next')
              }
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
      <SamraEnhancedChatbot />
      <FloatingCart />
      <BackToTop />
    </div>
  );
};

export default SkinQuiz;
