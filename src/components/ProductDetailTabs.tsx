
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductDetailTabsProps {
  product: {
    longDescription: string;
    ingredients: string[];
    benefits: string[];
    usage: string;
  };
}

const ProductDetailTabs = ({ product }: ProductDetailTabsProps) => {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="description" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">
              {language === 'fr' ? 'Description' : 'Description'}
            </TabsTrigger>
            <TabsTrigger value="ingredients">
              {language === 'fr' ? 'Ingrédients' : 'Ingredients'}
            </TabsTrigger>
            <TabsTrigger value="usage">
              {language === 'fr' ? 'Utilisation' : 'Usage'}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <p className="elegant-text text-clay-700 leading-relaxed mb-6">
                  {product.longDescription}
                </p>
                <div>
                  <h4 className="font-semibold text-clay-800 mb-4">
                    {language === 'fr' ? 'Bienfaits:' : 'Benefits:'}
                  </h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-clay-700">
                        <span className="w-2 h-2 bg-copper-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-clay-700">
                      <span className="w-2 h-2 bg-copper-500 rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <p className="elegant-text text-clay-700 leading-relaxed">
                  {product.usage}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductDetailTabs;
