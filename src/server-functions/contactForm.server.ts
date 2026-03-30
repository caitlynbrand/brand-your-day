import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = createServerFn({ method: 'POST' })
    .inputValidator((data: {name: string, email: string, phone: string, eventType: string, eventDate: string, eventSize: string, comments: string}) => data)
    .handler(async ({ data }) => {
        try {
            await resend.emails.send({
                from: "caitlyn@brandyourday.ca",
                to: "caitlyn@brandyourday.ca",
                subject: `New Contact Form Submission: ${data.name}`,
                html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Event Type:</strong> ${data.eventType}</p>
                <p><strong>Event Date:</strong> ${data.eventDate}</p>
                <p><strong>Event Size:</strong> ${data.eventSize}</p>
                <p><strong>Comments:</strong> ${data.comments}</p>
                `,
            });

            return { success: true };
        } catch (err) {
            console.error(err);

            return { success: false, error: (err as Error).message };
        }
    })