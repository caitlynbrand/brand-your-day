import { createFileRoute } from '@tanstack/react-router'
import HeroSection from "@/components/contact-hero-section";
import { ContactForm } from '@/components/contact-form';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <ContactForm />
    </>
  );
}
