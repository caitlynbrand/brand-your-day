import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import type { Variants } from 'framer-motion'
import image from "@/assets/images/CaitlynBrand.jpeg"
import { ContactForm } from './contact-form'

const variants: {
  container: Variants
  item: Variants
} = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.75,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function HeroSection() {
  return (
    <>
      {/* <HeroHeader /> */}

      <main className="overflow-hidden -mt-20 md:-mt-30">
        {/* Background blobs */}
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section>
          <div className="relative pt-24 md:pt-36">

            {/* Background image */}
            {/* <AnimatedGroup
              variants={variants}
            //   initial="hidden"
            //   animate="visible"
              className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            >
              <img
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg"
                alt="background"
                className="hidden size-full dark:block"
              />
            </AnimatedGroup> */}

            {/* Gradient overlay */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center">
                <TextEffect
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-balance text-5xl md:text-7xl"
                >
                  Every event deserves to be enjoyed, not managed.
                </TextEffect>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  We work closely with you to create a personalized planning package that aligns with your needs, priorities, and budget. Everyone deserves to fully enjoy their event, stress-free, and we’re here to make that possible. Together, we’ll design a plan that fits your vision and your budget—without compromising on style, detail, or experience.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md">
                  Whether you’re seeking full-service planning or need a professional to step in at just the right moment, we offer flexible options tailored to your level of involvement, ensuring your celebration unfolds seamlessly and beautifully.
                </p>

                <h2 className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl">
                  Full Event Planning
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  A comprehensive, start-to-finish planning experience where we take the lead so you can stay present, excited, and completely stress-free.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl">
                  What’s Included:
                </p>

                <div className="flex justify-center mt-4">
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Vision development & event design
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Budget creation & management
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Venue sourcing & vendor selection
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Contract review & negotiations
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Timeline & production schedule creation
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Guest experience planning
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Logistics management
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Final walkthroughs
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Full on-site coordination
                        </li>
                    </ul>
                </div>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  You make the key decisions, we manage the execution.
                </p>

                <h2 className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl">
                  Collaboration Planning
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  A shared planning partnership designed for clients who want to be hands-on, but not alone.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  You’ll handle agreed-upon tasks while we guide, organize, and manage the strategic and logistical elements. Think of it as having a professional planner in your corner, without giving up control.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl">
                  How It Works:
                </p>

                <div className="flex justify-center mt-4">
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            We create a structured planning roadmap
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            You complete assigned planning tasks
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            We manage vendors, logistics, and problem-solving
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Regular check-ins to keep everything on track
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Professional oversight to prevent costly mistakes
                        </li>
                    </ul>
                </div>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  This option provides flexibility, structure, and expert support throughout the process.
                </p>

                <h2 className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl">
                  Month-Of Planning:
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  You’ve planned your event, now let us bring it all together.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Beginning 4–6 weeks before your event, we step in to finalize details, confirm logistics, and ensure nothing falls through the cracks.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl">
                  Includes:
                </p>

                <div className="flex justify-center mt-4">
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Vendor confirmation & coordination
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Timeline refinement & final production schedule
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Final logistics review
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Venue walkthrough
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Emergency planning & contingency strategies
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Creation of a detailed event-day timeline
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Primary point of contact for all vendors
                        </li>
                    </ul>
                </div>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  This service ensures the month before your event is stress free and comes together seamlessly. 
                </p>

                <h2 className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl">
                  Day-Of Coordination:
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  You’ve done the planning. Now it’s time to enjoy it.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  We step in on event day to manage the timeline, vendors, setup, and any unexpected issues so you don’t have to answer a single question.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl">
                  Includes:
                </p>

                <div className="flex justify-center mt-4">
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Timeline execution
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Vendor coordination
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Setup supervision
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Ceremony & reception cueing (if applicable)
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Troubleshooting & real-time problem-solving
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Primary point of contact for venue & vendors
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            Overseeing breakdown
                        </li>
                    </ul>
                </div>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Your only job? Be present and enjoy the moment.
                </p>

                <h2 className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl">
                  Not Sure Which Service Fits?
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Every event is unique, during your consultation, we’ll help determine the right level of support and create a customized package that aligns with your needs, priorities, and budget.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md mb-10">
                  Let’s design a package that works for you.
                </p>

                <img
                  src={image}
                  alt="Caitlyn Brand"
                  className="w-[48rem] h-[32rem] object-contain mx-auto mt-10"
                />

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
