import { Hero } from '@/components/sections/hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { WhyUpward } from '@/components/sections/why-upward';
import { Testimonials } from '@/components/sections/testimonials';
import { CTABanner } from '@/components/sections/cta-banner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUpward />
      <Testimonials />
      <CTABanner />
    </>
  );
}
