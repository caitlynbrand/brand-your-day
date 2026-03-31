import React, { useState } from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Example,
  ExampleWrapper,
} from "@/components/example"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { HugeiconsIcon } from "@hugeicons/react"
import { MoreVerticalCircle01Icon, FileIcon, FolderIcon, FolderOpenIcon, CodeIcon, MoreHorizontalCircle01Icon, SearchIcon, FloppyDiskIcon, DownloadIcon, EyeIcon, LayoutIcon, PaintBoardIcon, SunIcon, MoonIcon, ComputerIcon, UserIcon, CreditCardIcon, SettingsIcon, KeyboardIcon, LanguageCircleIcon, NotificationIcon, MailIcon, ShieldIcon, HelpCircleIcon, File01Icon, LogoutIcon } from "@hugeicons/core-free-icons"
import { sendEmail } from "@/server-functions/contactForm.server"

const eventTypes = [
  "Community/Non-Profit",
  "Professional",
  "Weddings",
  "Everything in Between"
] as const

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventSize: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          comments: "",
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

  return (
    <Card className="relative z-50 w-full max-w-md my-10 mx-auto">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            {/* Name */}
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Field>
            {/* Event Type */}
            <Field>
              <FieldLabel htmlFor="eventType">Event Type</FieldLabel>
              <Combobox
                items={eventTypes}
                value={formData.eventType}
                onValueChange={(value) => {
                  if (!value) {
                    return
                  }

                  setFormData((prev) => ({
                    ...prev,
                    eventType: value,
                  }))
                }}
              >
                <ComboboxInput placeholder="Event Type" />
                <ComboboxContent>
                  <ComboboxList>
                    {eventTypes.map((item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Field>

            {/* Email and Phone */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Field>

            {/* Event Date and Size */}
            <Field>
              <FieldLabel htmlFor="eventDate">Event Date</FieldLabel>
              <Input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="eventSize">Event Size</FieldLabel>
              <Input
                type="number"
                id="eventSize"
                name="eventSize"
                value={formData.eventSize}
                onChange={handleChange}
                placeholder="Number of attendees"
                required
              />
            </Field>

            {/* Comments */}
            <Field>
              <FieldLabel htmlFor="comments">Comments</FieldLabel>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Add any additional comments"
              />
            </Field>

            {/* Buttons */}
            <Field orientation="horizontal">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>

            {/* Status Message */}
            {formStatus && <p>{formStatus}</p>}
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
