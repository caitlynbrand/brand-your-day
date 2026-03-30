import { createFileRoute } from '@tanstack/react-router'
import HeroSection from "@/components/services-hero-section";

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
    </div>
  );
}
