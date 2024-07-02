import Image from "next/image";
import { HeroSection } from "@/components/aceternity/frontHero";
import { ProductGrid } from "@/components/aceternity/productGrid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <h2 className="text-3xl font-bold text-center mt-32 mb-8">
        Explore Our Product Line
      </h2>
      <ProductGrid />
    </main>
  );
}
