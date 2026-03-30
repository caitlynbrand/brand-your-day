import { createFileRoute } from '@tanstack/react-router'
import HeroSection from "@/components/events-hero-section"

export const Route = createFileRoute('/events')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
    </div>
  );
}
