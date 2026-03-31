import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AnimatedGroup, T as TextEffect } from "./animated-group-D6sDd8Eq.mjs";
import { C as ContactForm } from "./contact-form-C9AIMjSW.mjs";
import "./router-DaUv6NbV.mjs";
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
import "./card-B38QVf1X.mjs";
import "./server.mjs";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
const image = "/assets/CaitlynBrand-DhJHsm9J.jpeg";
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
            children: "Every event deserves to be enjoyed, not managed."
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "We work closely with you to create a personalized planning package that aligns with your needs, priorities, and budget. Everyone deserves to fully enjoy their event, stress-free, and we’re here to make that possible. Together, we’ll design a plan that fits your vision and your budget—without compromising on style, detail, or experience." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl font-normal text-balance text-md", children: "Whether you’re seeking full-service planning or need a professional to step in at just the right moment, we offer flexible options tailored to your level of involvement, ensuring your celebration unfolds seamlessly and beautifully." }),
        /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl", children: "Full Event Planning" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "A comprehensive, start-to-finish planning experience where we take the lead so you can stay present, excited, and completely stress-free." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl", children: "What’s Included:" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-lg", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Vision development & event design"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Budget creation & management"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Venue sourcing & vendor selection"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Contract review & negotiations"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Timeline & production schedule creation"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Guest experience planning"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Logistics management"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Final walkthroughs"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Full on-site coordination"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "You make the key decisions, we manage the execution." }),
        /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl", children: "Collaboration Planning" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "A shared planning partnership designed for clients who want to be hands-on, but not alone." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "You’ll handle agreed-upon tasks while we guide, organize, and manage the strategic and logistical elements. Think of it as having a professional planner in your corner, without giving up control." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl", children: "How It Works:" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-lg", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "We create a structured planning roadmap"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "You complete assigned planning tasks"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "We manage vendors, logistics, and problem-solving"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Regular check-ins to keep everything on track"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Professional oversight to prevent costly mistakes"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "This option provides flexibility, structure, and expert support throughout the process." }),
        /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl", children: "Month-Of Planning:" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "You’ve planned your event, now let us bring it all together." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Beginning 4–6 weeks before your event, we step in to finalize details, confirm logistics, and ensure nothing falls through the cracks." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl", children: "Includes:" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-lg", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Vendor confirmation & coordination"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Timeline refinement & final production schedule"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Final logistics review"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Venue walkthrough"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Emergency planning & contingency strategies"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Creation of a detailed event-day timeline"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Primary point of contact for all vendors"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "This service ensures the month before your event is stress free and comes together seamlessly." }),
        /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl", children: "Day-Of Coordination:" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "You’ve done the planning. Now it’s time to enjoy it." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "We step in on event day to manage the timeline, vendors, setup, and any unexpected issues so you don’t have to answer a single question." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance font-semibold text-2xl", children: "Includes:" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-lg", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Timeline execution"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Vendor coordination"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Setup supervision"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Ceremony & reception cueing (if applicable)"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Troubleshooting & real-time problem-solving"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Primary point of contact for venue & vendors"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }),
            "Overseeing breakdown"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Your only job? Be present and enjoy the moment." }),
        /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-4xl", children: "Not Sure Which Service Fits?" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md", children: "Every event is unique, during your consultation, we’ll help determine the right level of support and create a customized package that aligns with your needs, priorities, and budget." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 sm:max-w-2xl md:max-w-4xl text-balance text-md mb-10", children: "Let’s design a package that works for you." }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: "Caitlyn Brand",
            className: "w-[48rem] h-[32rem] object-contain mx-auto mt-10"
          }
        ),
        /* @__PURE__ */ jsx(ContactForm, {})
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
