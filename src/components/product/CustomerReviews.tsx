import { useState } from 'react';
import { Star, ThumbsUp, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface CustomerReviewsProps {
  rating: number;
  reviewCount: number;
  productId: string;
}

const sampleReviews = [
  {
    id: '1',
    author: 'Marie L.',
    rating: 5,
    date: '2024-01-15',
    title: 'Absolument magnifique',
    content: 'Cette tagine est tout simplement parfaite. La qualité artisanale est exceptionnelle et elle fait sensation à chaque dîner. Livraison rapide et emballage soigné.',
    verified: true,
    helpful: 12
  },
  {
    id: '2',
    author: 'James R.',
    rating: 5,
    date: '2024-01-10',
    title: 'Authentic and Beautiful',
    content: 'Purchased this for my dinner parties and it never fails to impress guests. The craftsmanship is evident in every detail. Worth every penny.',
    verified: true,
    helpful: 8
  },
  {
    id: '3',
    author: 'Sophie M.',
    rating: 4,
    date: '2024-01-08',
    title: 'Très satisfaite',
    content: 'Belle pièce artisanale, conforme aux photos. Parfaite pour la présentation. Juste un petit défaut sur le vernis mais rien de grave.',
    verified: true,
    helpful: 5
  },
  {
    id: '4',
    author: 'David K.',
    rating: 5,
    date: '2024-01-05',
    title: 'Exceptional Quality',
    content: 'The attention to detail is remarkable. You can tell this was made by skilled artisans. It arrived well-packaged and exactly as described.',
    verified: true,
    helpful: 15
  },
  {
    id: '5',
    author: 'Camille B.',
    rating: 5,
    date: '2023-12-28',
    title: 'Un vrai bijou',
    content: 'Je recommande vivement ! Cette tagine apporte une touche d\'authenticité à ma table. La finition est impeccable.',
    verified: true,
    helpful: 7
  }
];

const CustomerReviews = ({ rating, reviewCount, productId }: CustomerReviewsProps) => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({});

  const displayedReviews = showAll ? sampleReviews : sampleReviews.slice(0, 3);

  const handleHelpfulVote = (reviewId: string) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 70 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 8, percentage: 6 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 2, percentage: 2 }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-stone-900 mb-4">
          {language === 'fr' ? 'Avis Clients' : 'Customer Reviews'}
        </h2>
      </div>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Overall Rating */}
        <div className="text-center">
          <div className="text-5xl font-light text-stone-900 mb-2">{rating}</div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-6 h-6 ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} 
              />
            ))}
          </div>
          <p className="text-stone-600">
            {reviewCount} {language === 'fr' ? 'avis' : 'reviews'}
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <span className="text-sm text-stone-600 w-8">{item.stars}★</span>
              <div className="flex-1 bg-stone-200 rounded-full h-2">
                <div 
                  className="bg-amber-400 h-2 rounded-full" 
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-stone-600 w-8">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <Card key={review.id} className="border border-stone-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-stone-900">{review.author}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">
                        ✓ {language === 'fr' ? 'Vérifié' : 'Verified'}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-stone-500">
                      {new Date(review.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-stone-400">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              <h4 className="font-medium text-stone-900 mb-2">{review.title}</h4>
              <p className="text-stone-700 mb-4 leading-relaxed">{review.content}</p>

              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpfulVote(review.id)}
                  className={`text-stone-600 hover:text-stone-900 ${
                    helpfulVotes[review.id] ? 'bg-stone-100' : ''
                  }`}
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {language === 'fr' ? 'Utile' : 'Helpful'} ({review.helpful + (helpfulVotes[review.id] ? 1 : 0)})
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && sampleReviews.length > 3 && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="border-stone-300 text-stone-700 hover:bg-stone-50"
          >
            {language === 'fr' 
              ? `Voir tous les avis (${sampleReviews.length})`
              : `Show all reviews (${sampleReviews.length})`
            }
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;