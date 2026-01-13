
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/landing/HeroSection';
import ProblemaSection from '@/components/landing/ProblemaSection';
import QualificacaoSection from '@/components/landing/QualificacaoSection';
import MetodoSection from '@/components/landing/MetodoSection';
import ProvaSection from '@/components/landing/ProvaSection';
import BonusSection from '@/components/landing/BonusSection';
import PrecoSection from '@/components/landing/PrecoSection';
import QuemSomosSection from '@/components/landing/QuemSomosSection';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Método LPV - Pare de viajar como pobre pagando preço de rico</title>
        <meta 
          name="description" 
          content="Aprenda a viajar mais barato com o Método LPV. Descubra como usar milhas e pontos para economizar em passagens aéreas e realizar seus sonhos de viagem." 
        />
      </Helmet>
      <div className="w-full overflow-x-hidden">
        <HeroSection />
        <ProblemaSection />
        <QualificacaoSection />
        <MetodoSection />
        <ProvaSection />
        <BonusSection />
        <PrecoSection />
        <QuemSomosSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
