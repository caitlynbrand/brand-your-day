import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AnimatedGroup, T as TextEffect } from "./animated-group-CapVW4ZR.mjs";
import "./router-B1rEAMQG.mjs";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@base-ui/react/button";
import "class-variance-authority";
import "@base-ui/react/menu";
import "motion/react";
const image = "/assets/IMG_5050-ufjM3enl.jpg";
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
            children: "Testimonials"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: "Sydney Fellerman and Chris Santos",
            className: "w-[48rem] h-[32rem] object-contain mx-auto mt-10"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "I truly cannot say enough amazing things about our day-of coordinator. From the moment she arrived at our ceremony and reception venue until the very end of the night, she was completely attentive, organized, and on top of every single detail." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md", children: "She handled everything seamlessly, from organizing my DIY décor for our welcome and gift table, to managing my stationery, to creating the most perfect midnight snack table. Every detail was thoughtfully executed. What impressed me most was how she managed some more difficult guests and family situations with complete professionalism and grace. She protected my peace the entire day." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "If anything went wrong or if we were behind schedule (like during dinner service), I had absolutely no idea, and that’s because she handled it all. She kept me on track with our timeline without ever making me feel rushed or stressed. I was able to fully enjoy my wedding day without worrying about a single thing, and that is priceless." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "She went above and beyond in every possible way, and I am beyond grateful for her. I have nothing but the very best things to say and would highly, highly recommend her to any bride-to-be. She is worth her weight in gold!" }),
        /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl mb-10", children: "Sydney Fellerman and Chris Santos" })
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
