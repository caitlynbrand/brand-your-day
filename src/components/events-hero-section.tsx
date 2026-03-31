import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import type { Variants } from 'framer-motion'
import image from "@/assets/images/CaitlynBrand.jpeg"

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
                  Brand Your Day is here to make your visions and dreams come true
                </TextEffect>

                <h2 id='community' className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30">
                  Community
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Bringing People Together for a Purpose
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md">
                  Community and non-profit events are rooted in heart, service, and impact. At Brand Your Day, we honor the mission behind your event and support it with intention and care.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  We collaborate closely with your team to create meaningful, well-organized experiences that allow you to focus on what matters most: building connections, inspiring generosity, and strengthening your community.            
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  From fundraisers and galas to awareness campaigns and volunteer appreciation events, we thoughtfully manage every detail so sponsors feel valued, guests feel welcomed, and your message shines through. When your event runs smoothly, your impact reaches further.
                </p>

                <h2 id='professional' className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30">
                  Corporate & Professional Events
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Professional. Organized. Collaborative.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Your event reflects your brand, and it should feel seamless, polished, and purposeful. At Brand Your Day, we partner with you to ensure every element aligns with your goals and company culture.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Whether you’re hosting a conference, networking event, seminar, executive gathering, or company celebration, we bring clarity, structure, and proactive coordination to every step of the process.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  From managing timelines and vendors to overseeing guest experience and behind-the-scenes logistics, we create an environment where your team can stay present, confident, and focused on what matters most: meaningful connections and lasting organizational impact.
                </p>

                <h2 id='weddings' className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30">
                  Weddings
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  A Day You’ll Never Forget
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Your wedding day is more than an event—it’s a once-in-a-lifetime memory. At Brand Your Day, we approach your celebration with care, calm, and attention to every detail.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  We guide couples and families with thoughtful planning, clear communication, and steady coordination so you can be fully present for every moment.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  From managing timelines and vendors to gently handling the unexpected, we reduce stress and create space for joy. Every detail is handled with intention, allowing your vision to unfold effortlessly and leaving you free to celebrate, laugh, and soak in the day you’ve been dreaming about.
                </p>

                <h2 id='everything-in-between' className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30">
                  Everything in Between
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Celebrating Life’s Meaningful Moments
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Life is full of moments that deserve to be honored. At Brand Your Day, we provide compassionate, organized support for celebrations that bring people together.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Whether it’s a milestone birthday, baby shower, retirement, or a celebration of life, we take the time to understand the meaning behind your gathering.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md mb-10">
                  With thoughtful planning and attentive coordination, we create spaces where guests feel comfortable, cared for, and connected—allowing you to focus on what truly matters: celebrating, remembering, and making lasting memories with the people who mean the most.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
