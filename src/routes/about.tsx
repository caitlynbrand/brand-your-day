import { createFileRoute } from '@tanstack/react-router'
import HeroSection from "@/components/about-hero-section";

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
    </div>
  );
}
