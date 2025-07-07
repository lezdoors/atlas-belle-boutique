import { useLanguage } from '@/contexts/LanguageContext';

const CertificationBanner = () => {
  const { language } = useLanguage();

  const certifications = [
    {
      name: 'SFA',
      logo: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//sfa-logo.png',
      fullName: 'Specialty Food Association',
      ariaLabel: language === 'fr' ? 'Certifié par SFA' : 'Certified by SFA',
      tooltip: language === 'fr' ? 'Membre certifié de la Specialty Food Association' : 'Certified member of the Specialty Food Association'
    },
    {
      name: 'IHA',
      logo: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//iha-logo.jpg',
      fullName: 'International Housewares Association',
      ariaLabel: language === 'fr' ? 'Certifié par IHA' : 'Certified by IHA',
      tooltip: language === 'fr' ? 'Membre certifié de l\'International Housewares Association' : 'Certified member of the International Housewares Association'
    }
  ];

  return (
    <section className="w-full bg-stone-800 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            {language === 'fr' ? 'Nos Certifications' : 'Our Certifications'}
          </h2>
          <p className="text-white/70 text-sm font-light max-w-2xl mx-auto">
            {language === 'fr' ? 'Qualité et authenticité garanties' : 'Quality and authenticity guaranteed'}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group relative flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
              aria-label={cert.ariaLabel}
              role="img"
            >
              {/* Logo */}
              <div className="relative mb-4">
                <img
                  src={cert.logo}
                  alt={cert.fullName}
                  className="h-16 lg:h-20 w-auto filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Certification Name */}
              <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                <div className="font-medium text-sm tracking-wide mb-1">
                  {cert.name}
                </div>
                <div className="text-xs font-light text-white/60 group-hover:text-white/80 transition-colors duration-300 max-w-32">
                  {cert.fullName}
                </div>
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-stone-900/95 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {cert.tooltip}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-stone-900/95"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;