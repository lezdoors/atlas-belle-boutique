
import AppleStyleHeader from "@/components/AppleStyleHeader";
import AppleStyleHero from "@/components/AppleStyleHero";
import AppleStyleProductGrid from "@/components/AppleStyleProductGrid";
import AppleStyleAbout from "@/components/AppleStyleAbout";
import AppleStyleFooter from "@/components/AppleStyleFooter";
import AppleStyleChatbot from "@/components/AppleStyleChatbot";

const AppleStyleIndex = () => {
  return (
    <div className="min-h-screen bg-white font-light antialiased">
      <AppleStyleHeader />
      <main>
        <AppleStyleHero />
        <AppleStyleProductGrid />
        <AppleStyleAbout />
      </main>
      <AppleStyleFooter />
      <AppleStyleChatbot />
    </div>
  );
};

export default AppleStyleIndex;
