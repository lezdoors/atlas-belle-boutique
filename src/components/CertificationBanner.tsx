import { useLanguage } from '@/contexts/LanguageContext';

const CertificationBanner = () => {
  const { language } = useLanguage();

  const certifications = [
    {
      name: 'SFA',
      fullName: 'Specialty Food Association',
      description: language === 'fr' ? 'Association des Aliments de Spécialité' : 'Specialty Food Association',
      ariaLabel: language === 'fr' ? 'Certifié par l\'Association des Aliments de Spécialité' : 'Certified by Specialty Food Association'
    },
    {
      name: 'IHA',
      fullName: 'International Housewares Association',
      description: language === 'fr' ? 'Association Internationale des Articles Ménagers' : 'International Housewares Association',
      ariaLabel: language === 'fr' ? 'Membre de l\'Association Internationale des Articles Ménagers' : 'Member of International Housewares Association'
    },
    {
      name: 'OneCert',
      fullName: 'OneCert Certified Organic',
      description: language === 'fr' ? 'Certifié Biologique OneCert' : 'OneCert Certified Organic',
      ariaLabel: language === 'fr' ? 'Certifié Biologique par OneCert' : 'Certified Organic by OneCert'
    }
  ];

  return (
    <section className="w-full py-12 lg:py-16" style={{ backgroundColor: '#3e0e0e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-sm font-light text-stone-300 tracking-wide uppercase">
            {language === 'fr' ? 'Certifications & Affiliations' : 'Certifications & Memberships'}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-center justify-items-center">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
              aria-label={cert.ariaLabel}
              title={cert.description}
            >
              {/* Logo Circle/Badge */}
              <div className="relative mb-3 lg:mb-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                  <span className={`text-white font-bold transition-all duration-300 group-hover:text-white/90 ${
                    cert.name === 'SFA' ? 'text-lg lg:text-xl tracking-wider' :
                    cert.name === 'IHA' ? 'text-lg lg:text-xl tracking-wider' :
                    'text-sm lg:text-base tracking-wide'
                  }`}>
                    {cert.name}
                  </span>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -inset-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Certification Name */}
              <h3 className="text-xs lg:text-sm text-white/70 font-medium tracking-wide text-center max-w-32 lg:max-w-40 leading-tight group-hover:text-white/90 transition-colors duration-300">
                {cert.fullName}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;