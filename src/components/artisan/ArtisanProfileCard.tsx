import { MapPin, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ArtisanProfile {
  id: string;
  name: string;
  region: string;
  specialty: string;
  yearsExperience: number;
  photo: string;
  storyFr: string;
  storyEn: string;
  techniques: string[];
  familyHeritage: string;
}

interface ArtisanProfileCardProps {
  artisan: ArtisanProfile;
  compact?: boolean;
}

const ArtisanProfileCard = ({ artisan, compact = false }: ArtisanProfileCardProps) => {
  const { language } = useLanguage();

  const regionInfo = {
    'Fès': {
      description: language === 'fr' 
        ? 'Réputée pour ses céramiques bleues traditionnelles et ses techniques ancestrales'
        : 'Renowned for traditional blue ceramics and ancestral techniques',
      color: 'blue'
    },
    'Safi': {
      description: language === 'fr'
        ? 'Centre historique de la poterie marocaine depuis le 12ème siècle'
        : 'Historic center of Moroccan pottery since the 12th century',
      color: 'amber'
    },
    'Salé': {
      description: language === 'fr'
        ? 'Innovation contemporaine respectueuse des traditions séculaires'
        : 'Contemporary innovation respecting centuries-old traditions',
      color: 'emerald'
    }
  };

  const regionData = regionInfo[artisan.region as keyof typeof regionInfo] || {
    description: '',
    color: 'stone'
  };

  if (compact) {
    return (
      <div className="bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start space-x-4">
          <img
            src={artisan.photo}
            alt={artisan.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h4 className="font-serif text-lg text-stone-900 mb-1">{artisan.name}</h4>
            <div className="flex items-center text-sm text-stone-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {artisan.region} • {artisan.specialty}
            </div>
            <div className="flex items-center text-xs text-stone-500">
              <Clock className="w-3 h-3 mr-1" />
              {artisan.yearsExperience} {language === 'fr' ? 'ans d\'expérience' : 'years experience'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-500">
      {/* Header with Photo */}
      <div className="relative h-48 bg-gradient-to-br from-stone-100 to-stone-200">
        <img
          src={artisan.photo}
          alt={artisan.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Region Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-${regionData.color}-100 text-${regionData.color}-800 border border-${regionData.color}-200`}>
          {artisan.region}
        </div>
        
        {/* Name */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-2xl text-white mb-1">{artisan.name}</h3>
          <p className="text-white/90 text-sm font-light">{artisan.specialty}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Experience & Heritage */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-stone-600">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-light">
              {artisan.yearsExperience} {language === 'fr' ? 'ans d\'expérience' : 'years experience'}
            </span>
          </div>
          <div className="text-xs text-stone-500 font-light">
            {artisan.familyHeritage}
          </div>
        </div>

        {/* Region Description */}
        <div className="mb-4 p-3 bg-stone-50 rounded-lg">
          <p className="text-xs text-stone-600 font-light italic">
            {regionData.description}
          </p>
        </div>

        {/* Story */}
        <div className="mb-4">
          <p className="text-sm text-stone-700 font-light leading-relaxed">
            {language === 'fr' ? artisan.storyFr : artisan.storyEn}
          </p>
        </div>

        {/* Techniques */}
        <div>
          <h4 className="text-sm font-medium text-stone-900 mb-2">
            {language === 'fr' ? 'Techniques Maîtrisées' : 'Master Techniques'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {artisan.techniques.map((technique, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-amber-50 text-amber-800 text-xs rounded-md border border-amber-200 font-light"
              >
                {technique}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfileCard;