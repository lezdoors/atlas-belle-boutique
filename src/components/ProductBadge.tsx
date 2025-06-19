
import { Badge } from '@/components/ui/badge';

interface ProductBadgeProps {
  type: 'new' | 'bestseller' | 'limited' | 'discount';
  label?: string;
  discount?: number;
}

const ProductBadge: React.FC<ProductBadgeProps> = ({ type, label, discount }) => {
  const getBadgeContent = () => {
    switch (type) {
      case 'new':
        return label || 'Nouveau';
      case 'bestseller':
        return label || 'Best-seller';
      case 'limited':
        return label || 'Édition limitée';
      case 'discount':
        return discount ? `-${discount}%` : label || '-25%';
      default:
        return label || 'Nouveau';
    }
  };

  const getBadgeStyle = () => {
    switch (type) {
      case 'new':
        return 'bg-green-500 hover:bg-green-600';
      case 'bestseller':
        return 'bg-amber-500 hover:bg-amber-600';
      case 'limited':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'discount':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-amber-500 hover:bg-amber-600';
    }
  };

  return (
    <Badge className={`absolute top-3 left-3 z-10 text-white font-medium px-2 py-1 text-xs rounded-full ${getBadgeStyle()}`}>
      {getBadgeContent()}
    </Badge>
  );
};

export default ProductBadge;
