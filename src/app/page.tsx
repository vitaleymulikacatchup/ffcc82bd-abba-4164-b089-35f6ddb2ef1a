"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={30}
        buttonText="Buy DOGM"
        navItems={[
          { name: "hero", id: "hero" },
          { name: "about", id: "about" },
          { name: "how-to-buy", id: "how-to-buy" },
          { name: "tokenomics", id: "tokenomics" },
          { name: "footer", id: "footer" }
        ]}
        onButtonClick={() => { /* handle click */ }}
      />
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to DogMemeCoin"
          subtitle="Join the most playful community in crypto!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { /* handle primary button click */ }}
          onSecondaryButtonClick={() => { /* handle secondary button click */ }}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="DogMemeCoin is more than just a currency; it's a community-driven project aimed at bringing joy and fun to the crypto space."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Set up your wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose an exchange", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Buy DogMemeCoin", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Transparent and fair token distribution to support the community"
          tokenData={[
            { value: "1B", description: "Total Supply" },
            { value: "10%", description: "Liquidity" },
            { value: "30%", description: "Community" },
            { value: "15%", description: "Development" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="DogMemeCoin Logo"
          logoText="DogMemeCoin"
          className="footer-class"
          svgClassName="logo-class"
        />
      </div>
    </SiteThemeProvider>
  );
}