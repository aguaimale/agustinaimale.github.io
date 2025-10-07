import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Philosophy } from '@/components/philosophy';
import { TechStack } from '@/components/tech-stack';
import { Contact } from '@/components/contact';
import { RotatingPromoBanner } from '@/components/rotating-promo-banner';

export default function Home() {
   return (
      <>
         <Navbar />
         <main className="min-h-screen">
            <Hero />
            <About />
            <Services />
            <Philosophy />
            <TechStack />
            <RotatingPromoBanner />
            <Contact />
         </main>
      </>
   );
}
