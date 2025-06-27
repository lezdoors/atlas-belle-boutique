
import SeasonCard from './SeasonCard';

interface Product {
  name: string;
  price: string;
}

interface Season {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  color: string;
  products: Product[];
}

interface SeasonGridProps {
  seasons: Season[];
  language: 'fr' | 'en';
}

const SeasonGrid = ({ seasons, language }: SeasonGridProps) => {
  return (
    <div className="hidden lg:grid grid-cols-4 gap-8 mb-16">
      {seasons.map((season, index) => (
        <SeasonCard
          key={season.id}
          {...season}
          language={language}
          animationDelay={index}
        />
      ))}
    </div>
  );
};

export default SeasonGrid;
