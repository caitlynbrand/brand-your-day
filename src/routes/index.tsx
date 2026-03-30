import { createFileRoute } from "@tanstack/react-router";
import { CarouselDemo } from "@/components/carousel-demo";
import HeroSection from "@/components/hero-section";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <HeroSection />
      <CarouselDemo />
    </>
  );
}