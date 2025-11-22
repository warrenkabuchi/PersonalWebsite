import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, name, email, phone, eventType, date, details, company, role, interest, message, destination, travelDates, budget, travelers, interests } = body;

        // Basic Validation
        if (!name || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        let subject = "New Request";
        let htmlContent = "";

        if (type === 'ai') {
            subject = `AI Consultation Request: ${name}`;
            htmlContent = `
        <h1>New AI Consultation Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Role:</strong> ${role || "N/A"}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
        } else if (type === 'travel') {
            subject = `Travel Planning Request: ${name}`;
            htmlContent = `
        <h1>New Travel Planning Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Dates:</strong> ${travelDates}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Travelers:</strong> ${travelers}</p>
        <p><strong>Interests:</strong></p>
        <p>${interests}</p>
      `;
        } else {
            // Default to DJ Booking
            subject = `New DJ Booking Request: ${eventType} - ${name}`;
            htmlContent = `
        <h1>New DJ Booking Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Details:</strong> ${details || "N/A"}</p>
      `;
        }

        // Send Email Notification (to you)
        const emailResponse = await resend.emails.send({
            from: "Booking Request <onboarding@resend.dev>", // Update this once you have a domain
            to: process.env.MY_EMAIL || "delivered@resend.dev",
            subject: subject,
            html: htmlContent,
        });

        if (emailResponse.error) {
            console.error("Resend Error:", emailResponse.error);
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Booking request received" });
    } catch (error) {
        console.error("Booking Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
