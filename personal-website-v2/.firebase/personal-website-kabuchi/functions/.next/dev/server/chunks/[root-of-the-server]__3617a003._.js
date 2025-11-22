module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/personal-website-v2/app/api/booking/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$website$2d$v2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-website-v2/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$website$2d$v2$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-website-v2/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$website$2d$v2$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function POST(request) {
    try {
        const body = await request.json();
        const { type, name, email, phone, eventType, date, details, company, role, interest, message, destination, travelDates, budget, travelers, interests } = body;
        // Basic Validation
        if (!name || !email) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$website$2d$v2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required fields"
            }, {
                status: 400
            });
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
            from: "Booking Request <onboarding@resend.dev>",
            to: process.env.MY_EMAIL || "delivered@resend.dev",
            subject: subject,
            html: htmlContent
        });
        if (emailResponse.error) {
            console.error("Resend Error:", emailResponse.error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$website$2d$v2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to send email"
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$website$2d$v2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Booking request received"
        });
    } catch (error) {
        console.error("Booking Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$website$2d$v2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3617a003._.js.map