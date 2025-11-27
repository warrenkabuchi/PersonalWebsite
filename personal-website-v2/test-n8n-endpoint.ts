import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const API_KEY = process.env.N8N_API_KEY;
const API_URL = "http://localhost:3000/api/posts";

async function testCreatePost() {
    console.log("Testing n8n API Endpoint...");
    console.log("URL:", API_URL);
    console.log("API Key:", API_KEY ? "Found" : "Missing");

    const samplePost = {
        title: "Automated Post from n8n",
        content: "<p>This is a test post created via the API endpoint. It demonstrates how n8n can automate article publishing.</p>",
        category: "work",
        excerpt: "Testing automation integration...",
        location: "Cloud",
        coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(samplePost)
        });

        const data = await response.json();
        console.log("Response Status:", response.status);
        console.log("Response Data:", data);

        if (response.ok) {
            console.log("✅ API Test Passed!");
        } else {
            console.error("❌ API Test Failed!");
        }
    } catch (error) {
        console.error("Error testing API:", error);
    }
}

testCreatePost();
