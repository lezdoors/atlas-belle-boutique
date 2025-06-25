
import FooterBrand from '@/components/footer/FooterBrand';
import FooterNavigation from '@/components/footer/FooterNavigation';
import FooterServices from '@/components/footer/FooterServices';
import FooterContact from '@/components/footer/FooterContact';
import FooterNewsletter from '@/components/footer/FooterNewsletter';
import FooterBottom from '@/components/footer/FooterBottom';

const Footer = () => {
  return (
    <footer className="bg-sand-800 text-sand-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            <div className="lg:col-span-2">
              <FooterBrand />
            </div>
            <FooterNavigation />
            <FooterServices />
            <FooterContact />
            <div className="lg:col-span-1">
              <FooterNewsletter />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
