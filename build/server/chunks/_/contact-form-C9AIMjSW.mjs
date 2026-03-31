import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Combobox as Combobox$1 } from "@base-ui/react";
import { B as Button, c as cn } from "./router-DaUv6NbV.mjs";
import { cva } from "class-variance-authority";
import { Input as Input$1 } from "@base-ui/react/input";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowDown01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { C as Card, a as CardContent } from "./card-B38QVf1X.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server.mjs";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    Input$1,
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 h-9 rounded-md border shadow-xs transition-[color,box-shadow] has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot][aria-invalid=true]]:ring-[3px] has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 [[data-slot=combobox-content]_&]:focus-within:border-inherit [[data-slot=combobox-content]_&]:focus-within:ring-0 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
        className
      ),
      ...props
    }
  );
}
const inputGroupAddonVariants = cva(
  "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
  {
    variants: {
      align: {
        "inline-start": "pl-2 has-[>button]:ml-[-0.25rem] has-[>kbd]:ml-[-0.15rem] order-first",
        "inline-end": "pr-2 has-[>button]:mr-[-0.25rem] has-[>kbd]:mr-[-0.15rem] order-last",
        "block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
        "block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
const inputGroupButtonVariants = cva(
  "gap-2 text-sm shadow-none flex items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn("rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent flex-1", className),
      ...props
    }
  );
}
const Combobox = Combobox$1.Root;
function ComboboxTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Combobox$1.Trigger,
    {
      "data-slot": "combobox-trigger",
      className: cn("[&_svg:not([class*='size-'])]:size-4", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowDown01Icon, strokeWidth: 2, className: "text-muted-foreground size-4 pointer-events-none" })
      ]
    }
  );
}
function ComboboxClear({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Combobox$1.Clear,
    {
      "data-slot": "combobox-clear",
      render: /* @__PURE__ */ jsx(InputGroupButton, { variant: "ghost", size: "icon-xs" }),
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, strokeWidth: 2, className: "pointer-events-none" })
    }
  );
}
function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs(InputGroup, { className: cn("w-auto", className), children: [
    /* @__PURE__ */ jsx(
      Combobox$1.Input,
      {
        render: /* @__PURE__ */ jsx(InputGroupInput, { disabled }),
        ...props
      }
    ),
    /* @__PURE__ */ jsxs(InputGroupAddon, { align: "inline-end", children: [
      showTrigger && /* @__PURE__ */ jsx(
        InputGroupButton,
        {
          size: "icon-xs",
          variant: "ghost",
          render: /* @__PURE__ */ jsx(ComboboxTrigger, {}),
          "data-slot": "input-group-button",
          className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
          disabled
        }
      ),
      showClear && /* @__PURE__ */ jsx(ComboboxClear, { disabled })
    ] }),
    children
  ] });
}
function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}) {
  return /* @__PURE__ */ jsx(Combobox$1.Portal, { children: /* @__PURE__ */ jsx(
    Combobox$1.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      anchor,
      className: "isolate z-50",
      children: /* @__PURE__ */ jsx(
        Combobox$1.Popup,
        {
          "data-slot": "combobox-content",
          "data-chips": !!anchor,
          className: cn("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 max-h-72 min-w-36 overflow-hidden rounded-md shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)", className),
          ...props
        }
      )
    }
  ) });
}
function ComboboxList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Combobox$1.List,
    {
      "data-slot": "combobox-list",
      className: cn(
        "no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0 overflow-y-auto overscroll-contain",
        className
      ),
      ...props
    }
  );
}
function ComboboxItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Combobox$1.Item,
    {
      "data-slot": "combobox-item",
      className: cn(
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(
          Combobox$1.ItemIndicator,
          {
            render: /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
            children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Tick02Icon, strokeWidth: 2, className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "label",
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4 group/field-group @container/field-group flex w-full flex-col",
        className
      ),
      ...props
    }
  );
}
const fieldVariants = cva("data-[invalid=true]:text-destructive gap-3 group/field flex w-full", {
  variants: {
    orientation: {
      vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
      horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive: "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      ),
      ...props
    }
  );
}
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
const sendEmail = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("303fa5f7cd12b751b5b393b6750baff8278d6dcff739cbc035827c116c7ef3a7"));
const eventTypes = [
  "Community/Non-Profit",
  "Professional",
  "Weddings",
  "Everything in Between"
];
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventSize: "",
    comments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const result = await sendEmail({ data: formData });
      if (result.success) {
        setFormStatus("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          eventSize: "",
          comments: ""
        });
      } else {
        setFormStatus(`Error: ${result.error}`);
      }
    } catch (err) {
      setFormStatus("Something went wrong while sending the email.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(Card, { className: "w-full max-w-md mt-20 mb-10 mx-auto", children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
    /* @__PURE__ */ jsxs(Field, { children: [
      /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "name", children: "Name" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "name",
          name: "name",
          placeholder: "Enter your name",
          value: formData.name,
          onChange: handleChange,
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Field, { children: [
      /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "eventType", children: "Event Type" }),
      /* @__PURE__ */ jsxs(
        Combobox,
        {
          items: eventTypes,
          value: formData.eventType,
          onValueChange: (value) => {
            if (!value) {
              return;
            }
            setFormData((prev) => ({
              ...prev,
              eventType: value
            }));
          },
          children: [
            /* @__PURE__ */ jsx(ComboboxInput, { placeholder: "Event Type" }),
            /* @__PURE__ */ jsx(ComboboxContent, { children: /* @__PURE__ */ jsx(ComboboxList, { children: eventTypes.map((item) => /* @__PURE__ */ jsx(ComboboxItem, { value: item, children: item }, item)) }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Field, { children: [
      /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          placeholder: "Enter your email",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Field, { children: [
      /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "phone", children: "Phone Number" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "tel",
          id: "phone",
          name: "phone",
          value: formData.phone,
          onChange: handleChange,
          placeholder: "Enter your phone number",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Field, { children: [
      /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "eventDate", children: "Event Date" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "date",
          id: "eventDate",
          name: "eventDate",
          value: formData.eventDate,
          onChange: handleChange,
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Field, { children: [
      /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "eventSize", children: "Event Size" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "number",
          id: "eventSize",
          name: "eventSize",
          value: formData.eventSize,
          onChange: handleChange,
          placeholder: "Number of attendees",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Field, { children: [
      /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "comments", children: "Comments" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "comments",
          name: "comments",
          value: formData.comments,
          onChange: handleChange,
          placeholder: "Add any additional comments"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Field, { orientation: "horizontal", children: [
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Submitting..." : "Submit" }),
      /* @__PURE__ */ jsx(Button, { variant: "outline", type: "button", children: "Cancel" })
    ] }),
    formStatus && /* @__PURE__ */ jsx("p", { children: formStatus })
  ] }) }) }) });
}
export {
  ContactForm as C
};
