use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay 
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "FAQ", id: "faq" },
          { name: "Footer", id: "footer" }
        ]}
        buttonText="Buy Paw"
        onButtonClick={() => alert('Button clicked!')}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to PawMemecoin" subtitle="The fun and friendly memecoin for dog lovers!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="What is PawMemecoin?" descriptions={["PawMemecoin is a fun token designed for the dog-loving community", "Join us in creating a vibrant ecosystem and community support!"]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy PawMemecoin" steps={[
          { title: "Step 1", description: "Get a wallet that supports memecoins", image: "/images/placeholder1.avif", position: "left", isCenter: false },
          { title: "Step 2", description: "Purchase BNB or ETH to swap", image: "/images/placeholder2.avif", position: "center", isCenter: true },
          { title: "Step 3", description: "Swap for PawMemecoin", image: "/images/placeholder3.avif", position: "right", isCenter: false }
        ]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics title="Tokenomics" description="Explore our comprehensive tokenomics for PawMemecoin" kpiItems={[{ value: "10M", description: "Total Supply" }, { value: "5%", description: "Liquidity" }, { value: "2%", description: "Marketing" }]} />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ items={[
          { title: "What is PawMemecoin?", content: "A fun token for dog lovers!" },
          { title: "How can I buy it?", content: "You can buy it through popular exchanges." }
        ]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="PawMemecoin" logoText="PawMemecoin" items={[
          { label: "Privacy Policy", onClick: () => alert('Privacy Policy') },
          { label: "Terms of Service", onClick: () => alert('Terms of Service') },
          { label: "Contact Us", onClick: () => alert('Contact Us') }
        ]} />
      </div>
    </SiteThemeProvider>
  );
}