import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AnimatedGroup, T as TextEffect } from "./animated-group-D6sDd8Eq.mjs";
import "./router-DaUv6NbV.mjs";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@base-ui/react/button";
import "class-variance-authority";
import "@base-ui/react/menu";
import "motion/react";
const variants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.75
      }
    }
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
};
function HeroSection() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "overflow-hidden sm:-mt-20 md:-mt-30", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 isolate hidden opacity-65 contain-strict lg:block",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" }),
          /* @__PURE__ */ jsx("div", { className: "h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" }),
          /* @__PURE__ */ jsx("div", { className: "h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "relative pt-24 md:pt-36", children: [
      /* @__PURE__ */ jsx(
        AnimatedGroup,
        {
          variants,
          className: "mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg",
              alt: "background",
              className: "hidden size-full dark:block"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx(
          TextEffect,
          {
            as: "h1",
            className: "mx-auto mt-8 max-w-4xl text-balance text-5xl md:text-7xl",
            children: "Brand Your Day is here to make your visions and dreams come true"
          }
        ),
        /* @__PURE__ */ jsx("h2", { id: "community", className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30", children: "Community" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Bringing People Together for a Purpose" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md", children: "Community and non-profit events are rooted in heart, service, and impact. At Brand Your Day, we honor the mission behind your event and support it with intention and care." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "We collaborate closely with your team to create meaningful, well-organized experiences that allow you to focus on what matters most: building connections, inspiring generosity, and strengthening your community." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "From fundraisers and galas to awareness campaigns and volunteer appreciation events, we thoughtfully manage every detail so sponsors feel valued, guests feel welcomed, and your message shines through. When your event runs smoothly, your impact reaches further." }),
        /* @__PURE__ */ jsx("h2", { id: "professional", className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30", children: "Corporate & Professional Events" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Professional. Organized. Collaborative." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Your event reflects your brand, and it should feel seamless, polished, and purposeful. At Brand Your Day, we partner with you to ensure every element aligns with your goals and company culture." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Whether you’re hosting a conference, networking event, seminar, executive gathering, or company celebration, we bring clarity, structure, and proactive coordination to every step of the process." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "From managing timelines and vendors to overseeing guest experience and behind-the-scenes logistics, we create an environment where your team can stay present, confident, and focused on what matters most: meaningful connections and lasting organizational impact." }),
        /* @__PURE__ */ jsx("h2", { id: "weddings", className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30", children: "Weddings" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "A Day You’ll Never Forget" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Your wedding day is more than an event—it’s a once-in-a-lifetime memory. At Brand Your Day, we approach your celebration with care, calm, and attention to every detail." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "We guide couples and families with thoughtful planning, clear communication, and steady coordination so you can be fully present for every moment." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "From managing timelines and vendors to gently handling the unexpected, we reduce stress and create space for joy. Every detail is handled with intention, allowing your vision to unfold effortlessly and leaving you free to celebrate, laugh, and soak in the day you’ve been dreaming about." }),
        /* @__PURE__ */ jsx("h2", { id: "everything-in-between", className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl scroll-mt-30", children: "Everything in Between" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Celebrating Life’s Meaningful Moments" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Life is full of moments that deserve to be honored. At Brand Your Day, we provide compassionate, organized support for celebrations that bring people together." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Whether it’s a milestone birthday, baby shower, retirement, or a celebration of life, we take the time to understand the meaning behind your gathering." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md mb-10", children: "With thoughtful planning and attentive coordination, we create spaces where guests feel comfortable, cared for, and connected—allowing you to focus on what truly matters: celebrating, remembering, and making lasting memories with the people who mean the most." })
      ] }) })
    ] }) })
  ] }) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx(HeroSection, {}) });
}
export {
  RouteComponent as component
};
