"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingOverlay
        navItems={[{name: 'Hero', id: 'hero'}, {name: 'About', id: 'about'}, {name: 'How to Buy', id: 'how-to-buy'}, {name: 'Tokenomics', id: 'tokenomics'}, {name: 'Footer', id: 'footer'}]}
        logoSrc='/images/logo.svg'
        logoWidth={120}
        logoHeight={60}
        buttonText='Get Tokens'
        onButtonClick={() => { console.log('CTA clicked!'); }}
      />
      <div id='hero' data-section='hero' className='scroll-mt-24'>
        <SplitHero
          title='Welcome to Dog Memecoin!'
          subtitle='Join the fun and invest in your favorite dog coin!'
          primaryButtonText='Get Started'
          secondaryButtonText='Learn More'
          onPrimaryButtonClick={() => { console.log('Primary Button Clicked!'); }}
          onSecondaryButtonClick={() => { console.log('Secondary Button Clicked!'); }}
        />
      </div>
      <div id='about' data-section='about' className='scroll-mt-24'>
        <CtaAbout
          title='About Dog Memecoin'
          descriptions={['A fun and friendly community-driven cryptocurrency that aims to bring joy and rewards to its holders.', 'Explore the basics of how to buy, trade, and benefit from Dog Memecoin.']}
        />
      </div>
      <div id='how-to-buy' data-section='how-to-buy' className='scroll-mt-24'>
        <HowToBuy3D
          title='How to Buy Dog Memecoin'
          steps={[{ title: 'Step 1: Get a Wallet', description: 'Create a new wallet to hold your Dog Memecoin.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },{ title: 'Step 2: Buy Ethereum', description: 'Purchase Ethereum on an exchange to trade for Dog Memecoin.', image: '/images/placeholder2.avif', position: 'center', isCenter: true },{ title: 'Step 3: Swap for Dog Memecoin', description: 'Use a DEX to swap your Ethereum for Dog Memecoin!', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]}
        />
      </div>
      <div id='tokenomics' data-section='tokenomics' className='scroll-mt-24'>
        <BigNumberTokenomics
          title='Tokenomics'
          description='Understanding the tokenomics is essential to investing in any cryptocurrency.'
          kpiItems={[{ value: '1M+', description: 'Total Supply', longDescription: 'Total supply of Dog Memecoin is capped at 1 million tokens.', icon: 'Rocket' },{ value: '500K', description: 'Market Cap', longDescription: 'Current market cap based on trading volume.', icon: 'DollarSign' },{ value: '150K+', description: 'Total Holders', longDescription: 'Number of unique holders of Dog Memecoin, demonstrating community trust.', icon: 'Users' }]}
        />
      </div>
      <div id='footer' data-section='footer' className='scroll-mt-24'>
        <FooterLogo
          logoSrc='/images/logo.svg'
          logoText='Dog Memecoin'
          columns={[
            { title: 'Company', items: [{ label: 'About Us', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
            { title: 'Support', items: [{ label: 'FAQ', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
            { title: 'Community', items: [{ label: 'Twitter', onClick: () => {} }, { label: 'Telegram', onClick: () => {} }] }
          ]}
          copyrightText='© 2023 Dog Memecoin'
          onPrivacyClick={() => { console.log('Privacy Policy Clicked!'); }}
        />
      </div>
    </SiteThemeProvider>
  );
}