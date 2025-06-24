
import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Map any stock images to authentic Perle d'Atlas images
  const getAuthenticImages = (imageList: string[]) => {
    const imageMap: { [key: string]: string } = {
      'photo-1465146344425-f00d5f5c8f07': '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      'photo-1482881497185-d4a9ddbe4151': '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
      'photo-1500673922987-e212871fec22': '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
      'photo-1506744038136-46273834b3fb': '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
      'photo-1469474968028-56623f02e42e': '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png'
    };

    return imageList.map(image => {
      for (const [stockId, authenticImage] of Object.entries(imageMap)) {
        if (image.includes(stockId)) {
          return authenticImage;
        }
      }
      return image;
    });
  };

  const authenticImages = getAuthenticImages(images);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square overflow-hidden rounded-2xl luxury-shadow">
        <img 
          src={authenticImages[selectedImage]} 
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnail Images */}
      <div className="flex space-x-2">
        {authenticImages.map((image, index) => (
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
