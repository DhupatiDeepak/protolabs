import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ProductLifeCycle from "@/components/ProductLifeCycle";
import EngineeringSupport from "@/components/EngineeringSupport";
import IndustriesServed from "@/components/IndustriesServed";
import Resources from "@/components/Resources";
import StayConnected from "@/components/StayConnected";

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <Hero />
      <Services />
      
      <div style={{ marginTop: '4rem' }}>
        <ProductLifeCycle />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <EngineeringSupport />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <HowItWorks />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <IndustriesServed />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Resources />
      </div>

      <StayConnected />
    </main>
  );
}
