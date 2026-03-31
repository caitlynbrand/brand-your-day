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
const image = "/assets/Caitlyn2-CSPiVlNk.jpg";
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
            children: "Hi, I’m Caitlyn Brand"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl", children: "The Owner and Event Planner behind Brand Your Day" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: "Caitlyn Brand",
            className: "w-[48rem] h-[32rem] object-contain mx-auto mt-10"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "For over five years, I’ve had the joy of planning weddings, celebrations, and special events that honor life’s biggest and smallest moments. I believe every celebration deserves thoughtful intention, seamless organization, and meaningful detail." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md", children: "Bringing my clients’ visions to life isn’t just my job—it’s my passion. I take the time to truly understand what matters most to you, then transform those ideas into a beautifully coordinated experience that feels authentic, elevated, and unforgettable. Every event is customized to reflect your unique story and style." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "I thrive on timelines, clear communication, and making sure no detail is overlooked, so you can feel confident, relaxed, and fully present on your day. Building trusting, collaborative relationships with my clients is at the heart of what I do, because a strong connection makes the planning process smooth, joyful, and truly meaningful." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "When I’m not planning events, I’m a proud dog mom who loves spending time with my pup and giving back to the community I care deeply about. Whether volunteering my time or supporting local organizations, I’m always looking for ways to make a positive impact and bring people together." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "At Brand Your Day, my mission is simple: to take the stress off your plate, offer thoughtful guidance, and create a beautiful day that reflects you—whether it’s an intimate gathering or a large-scale celebration." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md mb-10", children: "I can’t wait to help you brand your day." })
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
