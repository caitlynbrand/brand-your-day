import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, createElement, useState, useRef, useEffect, createContext } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button as Button$1 } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { Menu as Menu$1 } from "@base-ui/react/menu";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
const __iconNode = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode);
const appCss = "/assets/styles-CkM1090k.css";
const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => defaultTheme
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const logo = "/assets/Logo%20White-V3TwQgBY.png";
const Logo = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logo,
      alt: "Logo",
      className: cn("h-32 -mb-5 w-full", className)
    }
  );
};
const LogoIcon = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logo,
      alt: "Logo Icon",
      className: cn("h-24", className)
    }
  );
};
function FooterSection() {
  return /* @__PURE__ */ jsx("footer", { className: "md:py-6 bg-accent-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center md:justify-start", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        "aria-label": "go home",
        className: "block size-fit",
        children: /* @__PURE__ */ jsx(Logo, {})
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-center sm:mt-6 md:mt-0 sm:-mb-2 md:mb-0 gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary sm:text-sm md:text-md font-medium mb-3", children: "Location: British Columbia, Canada" }),
      /* @__PURE__ */ jsxs("span", { className: "text-primary sm:text-sm md:text-md font-medium", children: [
        "Brand Your Day © ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " All rights reserved."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center md:justify-end", children: /* @__PURE__ */ jsxs("div", { className: "my-6 flex flex-wrap justify-center gap-6 text-sm", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://m.facebook.com/profile.php?id=61586033957207",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Facebook",
          className: "text-primary hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "sm:size-8 md:size-12",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.instagram.com/bydeventplanning/",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Instagram",
          className: "text-primary hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "sm:size-8 md:size-12",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                }
              )
            }
          )
        }
      )
    ] }) })
  ] }) });
}
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Button$1,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx(Menu$1.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Menu$1.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(Menu$1.Portal, { children: /* @__PURE__ */ jsx(
    Menu$1.Positioner,
    {
      className: "isolate z-50 outline-none",
      align,
      alignOffset,
      side,
      sideOffset,
      children: /* @__PURE__ */ jsx(
        Menu$1.Popup,
        {
          "data-slot": "dropdown-menu-content",
          className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
          ...props
        }
      )
    }
  ) });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx(Menu$1.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Menu$1.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
const Navbar = ({ navigationData: navigationData2 }) => {
  const [isHoverOpen, setIsHoverOpen] = useState(false);
  const timeoutRef = useRef(null);
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHoverOpen(true);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsHoverOpen(false);
    }, 300);
  };
  return /* @__PURE__ */ jsx("header", { className: "bg-accent-foreground sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-8 px-2 sm:px-2", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "md:hidden flex", children: /* @__PURE__ */ jsx(LogoIcon, {}) }),
    /* @__PURE__ */ jsx("div", { className: "text-primary sm:hidden md:flex flex-1 items-center justify-center gap-8 font-medium lg:gap-16", children: navigationData2.map((item, index) => {
      return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        index === 3 && /* @__PURE__ */ jsx("a", { href: "/", className: "sm:ml-0 sm:mr-0 md:-ml-8 md:mr-10", children: /* @__PURE__ */ jsx(LogoIcon, {}) }),
        index === 2 ? /* @__PURE__ */ jsx(
          "div",
          {
            className: "relative hidden md:flex",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs(DropdownMenu, { open: isHoverOpen, onOpenChange: setIsHoverOpen, children: [
              /* @__PURE__ */ jsx(
                DropdownMenuTrigger,
                {
                  render: /* @__PURE__ */ jsxs("a", { href: item.href, className: "flex items-center gap-1 hover:text-primary focus:outline-none focus:ring-0 bg-transparent", children: [
                    item.title,
                    /* @__PURE__ */ jsx(ChevronDown, { style: { width: 16, height: 16 } })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                DropdownMenuContent,
                {
                  className: "w-40",
                  align: "start",
                  onMouseEnter: handleMouseEnter,
                  onMouseLeave: handleMouseLeave,
                  children: /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
                    /* @__PURE__ */ jsx(DropdownMenuItem, { render: /* @__PURE__ */ jsx("a", { href: "/events#community", children: "Community" }) }),
                    /* @__PURE__ */ jsx(DropdownMenuItem, { render: /* @__PURE__ */ jsx("a", { href: "/events#professional", children: "Professional" }) }),
                    /* @__PURE__ */ jsx(DropdownMenuItem, { render: /* @__PURE__ */ jsx("a", { href: "/events#weddings", children: "Weddings" }) }),
                    /* @__PURE__ */ jsx(DropdownMenuItem, { render: /* @__PURE__ */ jsx("a", { href: "/events#everything-in-between", children: "Everything in Between" }) })
                  ] })
                }
              )
            ] })
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "font-medium sm:hidden md:flex hover:text-primary transition-colors",
            children: item.title
          }
        )
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "md:hidden bg-accent-foreground mr-2 w-12 h-12", render: /* @__PURE__ */ jsx(Button, { size: "icon" }), children: [
        /* @__PURE__ */ jsx(Menu, { style: { width: 32, height: 32 }, color: "black" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Menu" })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuContent, { className: "w-36", align: "end", children: /* @__PURE__ */ jsx(DropdownMenuGroup, { children: navigationData2.map((item, index) => /* @__PURE__ */ jsx(DropdownMenuItem, { render: /* @__PURE__ */ jsx("a", { href: item.href, children: item.title }) }, index)) }) })
    ] }) })
  ] }) });
};
const navigationData = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Services", href: "/services" },
  { title: "Testimonials", href: "/testimonials" },
  // { title: 'Preferred Vendors', href: '/vendors' },
  { title: "Contact", href: "/contact" }
];
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Brand Your Day"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        href: "/logo.png",
        type: "image/png"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsx("body", { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsx(Navbar, { navigationData }),
      /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(ThemeProvider, { defaultTheme: "light", storageKey: "vite-ui-theme", children }) }),
      /* @__PURE__ */ jsx(FooterSection, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] }) })
  ] });
}
const $$splitComponentImporter$5 = () => import("./testimonials-PZCHAstZ.mjs");
const Route$5 = createFileRoute("/testimonials")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services-hcocSRaV.mjs");
const Route$4 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./events-ujxG_7or.mjs");
const Route$3 = createFileRoute("/events")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-DYkK_hBo.mjs");
const Route$2 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-C9vtxOoi.mjs");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DRedI7es.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$5.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const EventsRoute = Route$3.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  EventsRoute,
  ServicesRoute,
  TestimonialsRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  cn as c,
  router as r
};
