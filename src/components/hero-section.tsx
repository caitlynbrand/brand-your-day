// import React from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import type { Variants } from 'framer-motion'

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
            <AnimatedGroup
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
            </AnimatedGroup>

            {/* Gradient overlay */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center">

                {/* Announcement pill */}
                {/* <AnimatedGroup
                  variants={variants}
                //   initial="hidden"
                //   animate="visible"
                >
                  <Link
                    to="/"
                    className="hover:bg-background bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md transition-colors"
                  >
                    <span className="text-sm">
                      Introducing Support for AI Models
                    </span>

                    <div className="size-6 overflow-hidden rounded-full">
                      <ArrowRight className="m-auto size-3" />
                    </div>
                  </Link>
                </AnimatedGroup> */}

                {/* Heading */}
                <TextEffect
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-balance text-4xl md:text-7xl"
                >
                  Every detail, designed to be felt, not just seen
                </TextEffect>

                {/* Subtext */}
                <h2 className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-2xl">
                  At Brand Your Day, we believe every event should reflect something deeper, your story, your people, and the moments that matter most. We remove the stress of planning so you can be fully present and savor every part of your celebration.
                </h2>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md">
                  From intimate gatherings to large-scale events, we provide thoughtful, personalized support tailored to your needs. Whether you want to be involved in every decision or prefer us to confidently guide the process, we meet you where you are, making the journey as seamless and enjoyable as the day itself.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  Known for our calm presence and meticulous eye for detail, we work closely with each client to bring their vision to life beautifully and effortlessly.
                </p>

                <p className="mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md">
                  You focus on the memories. We’ll take care of everything else.
                </p>


                {/* CTA buttons */}
                {/* <AnimatedGroup
                  variants={variants}
                //   initial="hidden"
                //   animate="visible"
                  className="mt-12 flex flex-col items-center gap-2 md:flex-row md:justify-center"
                >
                  <Link to="/">
                    <Button size="lg" className="rounded-xl px-5 text-base">
                      Start Building
                    </Button>
                  </Link>

                  <Link to="/">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="h-10.5 rounded-xl px-5"
                    >
                      Request a demo
                    </Button>
                  </Link>
                </AnimatedGroup> */}
              </div>
            </div>

            {/* App preview */}
            {/* {/* <AnimatedGroup
              variants={variants}
            //   initial="hidden"
            //   animate="visible"
            >
              <div className="mask-b-from-55% relative mt-20 px-2">
                <div className="bg-background mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg">
                  <img
                    className="hidden rounded-2xl dark:block w-full"
                    src="/mail2.png"
                    alt="app screen"
                  />
                  <img
                    className="rounded-2xl border dark:hidden w-full"
                    src="/mail2-light.png"
                    alt="app screen"
                  />
                </div>
              </div>
            </AnimatedGroup>
            */}
          </div>
        </section>

        {/* Bottom section */}
        {/* <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="group relative m-auto max-w-5xl px-6 text-center">
            <Link
              to="/"
              className="text-sm duration-150 hover:opacity-75"
            >
              Meet Our Customers
              <ChevronRight className="ml-1 inline-block size-3" />
            </Link>
          </div>
        </section> */}
      </main>
    </>
  )
}