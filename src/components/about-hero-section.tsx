import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import type { Variants } from 'framer-motion'
import image from "@/assets/images/Caitlyn2.jpg"

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
                  Hi, I’m Caitlyn Brand
                </TextEffect>

                <h2 className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl">
                  The Owner and Event Planner behind Brand Your Day
                </h2>

                <img
                  src={image}
                  alt="Caitlyn Brand"
                  className="w-[48rem] h-[32rem] object-contain mx-auto mt-10"
                />

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  For over five years, I’ve had the joy of planning weddings, celebrations, and special events that honor life’s biggest and smallest moments. I believe every celebration deserves thoughtful intention, seamless organization, and meaningful detail.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md">
                  Bringing my clients’ visions to life isn’t just my job—it’s my passion. I take the time to truly understand what matters most to you, then transform those ideas into a beautifully coordinated experience that feels authentic, elevated, and unforgettable. Every event is customized to reflect your unique story and style.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  I thrive on timelines, clear communication, and making sure no detail is overlooked, so you can feel confident, relaxed, and fully present on your day. Building trusting, collaborative relationships with my clients is at the heart of what I do, because a strong connection makes the planning process smooth, joyful, and truly meaningful.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  When I’m not planning events, I’m a proud dog mom who loves spending time with my pup and giving back to the community I care deeply about. Whether volunteering my time or supporting local organizations, I’m always looking for ways to make a positive impact and bring people together.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  At Brand Your Day, my mission is simple: to take the stress off your plate, offer thoughtful guidance, and create a beautiful day that reflects you—whether it’s an intimate gathering or a large-scale celebration.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md mb-10">
                  I can’t wait to help you brand your day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}