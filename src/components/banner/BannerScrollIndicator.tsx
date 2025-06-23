
interface BannerScrollIndicatorProps {
  productCount: number;
}

const BannerScrollIndicator = ({ productCount }: BannerScrollIndicatorProps) => {
  return (
    <div className="flex justify-center mt-3 md:hidden">
      <div className="flex space-x-1">
        {Array.from({ length: Math.ceil(productCount / 2) }).map((_, index) => (
          <div 
            key={index}
            className="w-2 h-2 rounded-full bg-white/30"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerScrollIndicator;
