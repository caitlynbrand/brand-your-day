import { c as createServerRpc, a as createServerFn } from "./server.mjs";
import { Resend } from "resend";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const resend = new Resend(process.env.RESEND_API_KEY);
const sendEmail_createServerFn_handler = createServerRpc("303fa5f7cd12b751b5b393b6750baff8278d6dcff739cbc035827c116c7ef3a7", (opts, signal) => sendEmail.__executeServer(opts, signal));
const sendEmail = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(sendEmail_createServerFn_handler, async ({
  data
}) => {
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
                `
    });
    return {
      success: true
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: err.message
    };
  }
});
export {
  sendEmail_createServerFn_handler
};
