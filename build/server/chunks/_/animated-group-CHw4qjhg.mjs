import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn } from "./router-DyXVSU70.mjs";
import { motion, AnimatePresence } from "motion/react";
import React__default from "react";
const defaultStaggerTimes = {
  char: 0.03,
  word: 0.05,
  line: 0.1
};
const defaultContainerVariants$1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const defaultItemVariants$1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  },
  exit: { opacity: 0 }
};
const presetVariants$1 = {
  blur: {
    container: defaultContainerVariants$1,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(12px)" }
    }
  },
  "fade-in-blur": {
    container: defaultContainerVariants$1,
    item: {
      hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: 20, filter: "blur(12px)" }
    }
  },
  scale: {
    container: defaultContainerVariants$1,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 }
    }
  },
  fade: {
    container: defaultContainerVariants$1,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 }
    }
  },
  slide: {
    container: defaultContainerVariants$1,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    }
  }
};
const AnimationComponent = React__default.memo(({ segment, variants, per, segmentWrapperClassName }) => {
  const content = per === "line" ? /* @__PURE__ */ jsx(motion.span, { variants, className: "block", children: segment }) : per === "word" ? /* @__PURE__ */ jsx(
    motion.span,
    {
      "aria-hidden": "true",
      variants,
      className: "inline-block whitespace-pre",
      children: segment
    }
  ) : /* @__PURE__ */ jsx(motion.span, { className: "inline-block whitespace-pre", children: segment.split("").map((char, charIndex) => /* @__PURE__ */ jsx(
    motion.span,
    {
      "aria-hidden": "true",
      variants,
      className: "inline-block whitespace-pre",
      children: char
    },
    `char-${charIndex}`
  )) });
  if (!segmentWrapperClassName) {
    return content;
  }
  const defaultWrapperClassName = per === "line" ? "block" : "inline-block";
  return /* @__PURE__ */ jsx("span", { className: cn(defaultWrapperClassName, segmentWrapperClassName), children: content });
});
AnimationComponent.displayName = "AnimationComponent";
const splitText = (text, per) => {
  if (per === "line") return text.split("\n");
  return text.split(/(\s+)/);
};
const hasTransition = (variant) => {
  if (!variant) return false;
  return typeof variant === "object" && "transition" in variant;
};
const createVariantsWithTransition = (baseVariants, transition) => {
  if (!transition) return baseVariants;
  const { exit: _, ...mainTransition } = transition;
  return {
    ...baseVariants,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...hasTransition(baseVariants.visible) ? baseVariants.visible.transition : {},
        ...mainTransition
      }
    },
    exit: {
      ...baseVariants.exit,
      transition: {
        ...hasTransition(baseVariants.exit) ? baseVariants.exit.transition : {},
        ...mainTransition,
        staggerDirection: -1
      }
    }
  };
};
function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset = "fade",
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  containerTransition,
  segmentTransition,
  style
}) {
  const segments = splitText(children, per);
  const MotionTag = motion[as];
  const baseVariants = preset ? presetVariants$1[preset] : { container: defaultContainerVariants$1, item: defaultItemVariants$1 };
  const stagger = defaultStaggerTimes[per] / speedReveal;
  const baseDuration = 0.3 / speedSegment;
  const customStagger = hasTransition(variants?.container?.visible ?? {}) ? (variants?.container?.visible).transition?.staggerChildren : void 0;
  const customDelay = hasTransition(variants?.container?.visible ?? {}) ? (variants?.container?.visible).transition?.delayChildren : void 0;
  const computedVariants = {
    container: createVariantsWithTransition(
      variants?.container || baseVariants.container,
      {
        staggerChildren: customStagger ?? stagger,
        delayChildren: customDelay ?? delay,
        ...containerTransition,
        exit: {
          staggerChildren: customStagger ?? stagger,
          staggerDirection: -1
        }
      }
    ),
    item: createVariantsWithTransition(variants?.item || baseVariants.item, {
      duration: baseDuration,
      ...segmentTransition
    })
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: trigger && /* @__PURE__ */ jsxs(
    MotionTag,
    {
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      variants: computedVariants.container,
      className,
      onAnimationComplete,
      onAnimationStart,
      style,
      children: [
        per !== "line" ? /* @__PURE__ */ jsx("span", { className: "sr-only", children }) : null,
        segments.map((segment, index) => /* @__PURE__ */ jsx(
          AnimationComponent,
          {
            segment,
            variants: computedVariants.item,
            per,
            segmentWrapperClassName
          },
          `${per}-${index}-${segment}`
        ))
      ]
    }
  ) });
}
const defaultContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
const presetVariants = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 }
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 }
  },
  blur: {
    hidden: { filter: "blur(4px)" },
    visible: { filter: "blur(0px)" }
  },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 20 },
    visible: { filter: "blur(0px)", y: 0 }
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 8 }
    }
  }
};
const addDefaultVariants = (variants) => ({
  hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
  visible: { ...defaultItemVariants.visible, ...variants.visible }
});
function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = "div",
  asChild = "div"
}) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants)
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;
  const MotionComponent = React__default.useMemo(
    () => motion.create(as),
    [as]
  );
  const MotionChild = React__default.useMemo(
    () => motion.create(asChild),
    [asChild]
  );
  return /* @__PURE__ */ jsx(
    MotionComponent,
    {
      initial: "hidden",
      animate: "visible",
      variants: containerVariants,
      className,
      children: React__default.Children.map(children, (child, index) => /* @__PURE__ */ jsx(MotionChild, { variants: itemVariants, children: child }, index))
    }
  );
}
export {
  AnimatedGroup as A,
  TextEffect as T
};
