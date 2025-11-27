import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "travelblogs");

const posts = [
  {
    title: "Colors of La Candelaria: A Weekend in Bogota",
    slug: "bogota-2025",
    location: "Bogota, Colombia",
    coverImage: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Discovering the vibrant street art, world-class coffee, and colonial architecture in Colombia's captivating capital.",
    content: `Bogota surprised me at every turn. The historic neighborhood of La Candelaria is a maze of colorful colonial buildings, world-renowned street art, and some of the best coffee I've ever tasted.

The city sits at 8,660 feet above sea level, and you can feel it in the crisp mountain air. I spent my mornings wandering the cobblestone streets, stopping at tiny cafes where baristas treat coffee-making as an art form. Every cup tells a story of Colombia's rich coffee heritage.

The street art scene here is unparalleled. Entire buildings serve as canvases for local and international artists. The graffiti tour I took revealed the political and social narratives embedded in these murals—each one a commentary on Colombia's complex history and hopeful future.

One evening, I took the cable car up to Monserrate, a church and monastery perched high above the city. The panoramic view of Bogota sprawling across the valley, with the Andes as a backdrop, was breathtaking.

The food scene blends traditional Colombian flavors with modern innovation. I had ajiaco, a hearty chicken and potato soup, at a family-run restaurant that's been serving it the same way for three generations.

Bogota is a city of contrasts—old and new, traditional and progressive, chaotic and serene. It's a place that demands you slow down, pay attention, and let it reveal itself to you layer by layer.`,
    date: Date.now() - 86400000, // 1 day ago
    createdAt: Date.now() - 86400000,
    category: "travel",
  },
  {
    title: "Monuments and Memories: A Weekend in Washington DC",
    slug: "washington-dc-2025",
    location: "Washington DC, USA",
    coverImage: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Exploring the nation's capital, from the iconic monuments along the National Mall to the hidden gems of Georgetown.",
    content: `Washington DC is a city that wears its history proudly. Every street corner tells a story, every monument stands as a testament to the nation's journey.

I started my weekend at the National Mall, walking the length of the reflecting pool as the Washington Monument towered above. The Lincoln Memorial at sunset was particularly moving—standing in the same spot where Martin Luther King Jr. delivered his "I Have a Dream" speech gave me chills.

Beyond the monuments, DC revealed itself as a city of neighborhoods, each with its own personality. Georgetown's cobblestone streets and historic rowhouses transported me back in time. I spent an afternoon browsing the boutiques on M Street and enjoying coffee at one of the many cafes overlooking the Potomac.

The Smithsonian museums are a treasure trove—and they're free. I lost myself in the National Museum of African American History and Culture, spending hours absorbing the powerful exhibits. The Air and Space Museum brought out my inner child with its collection of aircraft and spacecraft.

Food-wise, DC surprised me. The city has evolved into a culinary destination, with neighborhoods like Shaw and U Street offering incredible dining experiences. I had some of the best Ethiopian food I've ever tasted on U Street, a reflection of DC's diverse population.

What struck me most about Washington was the sense of purpose. Whether in the halls of the Capitol or the quiet pathways of Rock Creek Park, there's a feeling that this city matters—that the decisions made here ripple across the world.`,
    date: Date.now(),
    createdAt: Date.now(),
    category: "travel",
  },
  {
    title: "Building Scalable AI Agents with Copilot Studio",
    slug: "scalable-ai-agents-2025",
    location: "Remote / Tech",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    excerpt: "A deep dive into architecting enterprise-grade conversational AI agents using Microsoft Copilot Studio and Azure.",
    content: `The landscape of enterprise AI is shifting rapidly. It's no longer just about having a chatbot; it's about building intelligent agents that can take action, reason over data, and integrate seamlessly with existing business workflows.

In my recent work with Copilot Studio, I've found that the key to scalability lies in a modular architecture. Instead of building one monolithic bot, we break down capabilities into distinct "topics" and "actions" that can be managed independently.

One of the biggest challenges is governance. How do you ensure your agent stays on brand and doesn't hallucinate? We implemented a strict RAG (Retrieval-Augmented Generation) pattern, grounding the model's responses in verified internal documentation. This reduced hallucination rates by over 90%.

Integration is another critical piece. By leveraging Power Automate, we connected our agents to legacy SQL databases and modern REST APIs, allowing users to check order status, update customer records, and even trigger workflows directly from the chat interface.

The future of work is agentic. As these tools become more sophisticated, they will move from passive assistants to proactive partners, anticipating needs and automating complex tasks before we even ask.`,
    date: Date.now(),
    createdAt: Date.now(),
    category: "work",
  },
];

async function seedPosts() {
  try {
    for (const post of posts) {
      const docRef = await addDoc(collection(db, "posts"), post);
      console.log("Document written with ID: ", docRef.id);
    }
    console.log("All posts seeded successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

seedPosts();
