import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AnimatedGroup, T as TextEffect } from "./animated-group-CapVW4ZR.mjs";
import { C as ContactForm } from "./contact-form-DLhjAXuu.mjs";
import "./router-B1rEAMQG.mjs";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@base-ui/react/button";
import "class-variance-authority";
import "@base-ui/react/menu";
import "motion/react";
import "@base-ui/react";
import "@base-ui/react/input";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
import "./card-B8_24Vlp.mjs";
import "./server.mjs";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
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
            children: "Bulding The Brightest Day For You"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-2xl text-balance text-xl", children: "Brand Your Day removes the stress of planning so you can be fully present and truly enjoy your event." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-2xl font-normal text-balance text-md", children: "From intimate gatherings to large-scale celebrations, we provide thoughtful support tailored to your needs. Whether you want to be involved in every detail or prefer us to confidently guide the decisions, we meet you where you are." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-2xl text-balance text-md", children: "Known for our calm presence and meticulous eye for detail, we work closely with each client to bring their vision to life seamlessly and beautifully." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-2xl text-balance text-md", children: "You focus on the memories. We’ll take care of everything else." })
      ] }) })
    ] }) })
  ] }) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
}
export {
  RouteComponent as component
};
