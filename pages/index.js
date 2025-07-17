import FeaturesSlider from "@/components/featuressection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import PricingSection from "@/components/pricing";
import StatsSection from "@/components/statussection";
import TestimonialsSection from "@/components/testimonial";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
    <Header/>
    <HeroSection/>
    <FeaturesSlider/>
    <StatsSection/>
    <TestimonialsSection/>
    <PricingSection/>
    <Footer/>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
