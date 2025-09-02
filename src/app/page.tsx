import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import DemoVoiceAgent from '@/components/sections/DemoVoiceAgent';
import CaseAnalogySection from '@/components/sections/CaseAnalogySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SolutionsGrid />
      <DemoVoiceAgent />
      <CaseAnalogySection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
}
