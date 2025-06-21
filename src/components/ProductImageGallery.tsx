
import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square overflow-hidden rounded-2xl luxury-shadow">
        <img 
          src={images[selectedImage]} 
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnail Images */}
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-1 aspect-square rounded-lg overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-copper-500' : ''
            }`}
          >
            <img 
              src={image} 
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
