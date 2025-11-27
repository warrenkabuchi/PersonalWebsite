import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

        // Log to console (for development/testing)
        console.log("\n=== NEW FORM SUBMISSION ===");
        console.log("Subject:", subject);
        console.log("Content:", htmlContent);
        console.log("===========================\n");

        // If Resend is configured, send the email
        if (resend) {
            try {
                const emailResponse = await resend.emails.send({
                    from: "Booking Request <onboarding@resend.dev>",
                    to: process.env.MY_EMAIL || "delivered@resend.dev",
                    subject: subject,
                    html: htmlContent,
                });

                if (emailResponse.error) {
                    console.error("Resend Error:", emailResponse.error);
                    // Don't fail the whole request, just log it
                }
            } catch (emailError) {
                console.error("Email sending error:", emailError);
                // Don't fail the whole request
            }
        } else {
            console.log("⚠️  Resend API key not configured. Email would have been sent.");
        }

        // Always return success (form submission logged to console)
        return NextResponse.json({
            success: true,
            message: "Request received successfully"
        });

    } catch (error) {
        console.error("Booking Error:", error);
        return NextResponse.json({
            error: "Failed to process request",
            details: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}
