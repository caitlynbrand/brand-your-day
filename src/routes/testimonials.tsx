import { createFileRoute } from '@tanstack/react-router'
import HeroSection from "@/components/testimonials-hero-section";

export const Route = createFileRoute('/testimonials')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
    </div>
  );
}
