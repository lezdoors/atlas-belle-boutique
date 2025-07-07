import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  selectedIndex: number;
  onImageSelect: (index: number) => void;
}

const ProductImageGallery = ({ images, productName, selectedIndex, onImageSelect }: ProductImageGalleryProps) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const nextImage = () => {
    onImageSelect((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    onImageSelect(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-stone-50 rounded-2xl overflow-hidden group">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - Vue ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}

        {/* Zoom Button */}
        <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ZoomIn className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
            <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
              <img
                src={images[selectedIndex]}
                alt={`${productName} - Vue agrandie`}
                className="w-full h-full object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                ×
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Image Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onImageSelect(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`relative aspect-square bg-stone-50 rounded-lg overflow-hidden transition-all ${
                index === selectedIndex 
                  ? 'ring-2 ring-stone-900 ring-offset-2' 
                  : 'hover:ring-2 hover:ring-stone-300 hover:ring-offset-1'
              }`}
            >
              <img
                src={image}
                alt={`${productName} - Miniature ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;