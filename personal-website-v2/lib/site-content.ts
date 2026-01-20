/**
 * Site Content Configuration
 * Centralized content management - all text, links, and copy in one place
 */

export const siteMetadata = {
    title: 'Warren Kabuchi | AI Engineer & Cloud Architect',
    description: 'Personal portfolio of Warren Kabuchi - AI Engineer specializing in enterprise AI agents, cloud architecture, and governance frameworks.',
    author: 'Warren Kabuchi',
    siteUrl: 'https://warrenkabuchi.com',
    email: 'hello@warrenkabuchi.com',
} as const;

export const navigation = {
    links: [
        { href: '/', label: 'Home', theme: 'default' },
        { href: '/ai', label: 'AI Consulting', theme: 'ai' },
        { href: '/#experience', label: 'Experience', theme: 'default' },
        { href: '/drone', label: 'Sky 360', theme: 'drone' },
        { href: '/dj', label: 'DJ', theme: 'dj' },
        { href: '/travel', label: 'Travel', theme: 'travel' },
        { href: '/#contact', label: 'Contact', theme: 'default' },
    ],
    cta: {
        text: 'Get In Touch',
        href: '/ai',
    },
} as const;

export const hero = {
    badges: [
        { text: 'Azure', color: 'blue' },
        { text: 'GCP', color: 'cyan' },
        { text: 'Copilot Studio', color: 'purple' },
        { text: 'Python', color: 'yellow' },
    ],
    headline: 'Architecting the Future of Enterprise AI',
    subheadline: 'I build, deploy, and govern intelligent agents that solve real business problems.',
    cta: {
        primary: {
            text: 'Explore Projects',
            scrollTo: 'experience',
        },
        secondary: {
            text: 'Contact Me',
            scrollTo: 'contact',
        },
    },
} as const;

export const about = {
    title: 'About Me',
    bio: [
        'I am a data-driven AI Engineer with a deep background in Azure Cloud & FinOps. My passion lies in bridging the gap between cutting-edge AI research and practical, scalable enterprise solutions.',
        'With years of experience in multi-cloud architectures, I specialize in building robust infrastructure that supports the next generation of intelligent applications. From governance frameworks to autonomous agents, I ensure AI is not just powerful, but safe and compliant.',
    ],
    beyondTheCode: [
        {
            icon: 'music',
            title: 'DJ & Producer',
            description: 'Spinning house & techno.',
            href: '/dj' as string | undefined,
        },
        {
            icon: 'globe',
            title: 'Global Traveler',
            description: 'Exploring the world.',
            href: '/travel' as string | undefined,
        },
        {
            icon: 'flag',
            title: 'USSF Referee',
            description: 'Fair play on the weekends.',
            href: undefined as string | undefined,
        },
    ],
} as const;

export const experience = [
    {
        role: 'Senior Technology Consultant',
        company: 'Protiviti',
        period: '2023 - Present',
        focus: 'AI Governance & Agents',
        description: 'Leading the implementation of enterprise-grade AI agents and governance frameworks. Architecting secure, scalable solutions for Fortune 500 clients.',
    },
    {
        role: 'Technology Consultant',
        company: 'Protiviti',
        period: '2021 - 2023',
        focus: 'Multi-Cloud & Computer Vision',
        description: 'Designed and deployed computer vision models on Azure and GCP. Optimized cloud infrastructure for high-performance computing tasks.',
    },
    {
        role: 'Lead Machine Learning Engineer',
        company: 'Hagos Marketing',
        period: '2020 - 2021',
        focus: 'AWS SageMaker Architecture',
        description: 'Built end-to-end ML pipelines using AWS SageMaker. Improved model inference times by 40% through architecture optimization.',
    },
    {
        role: 'Research Fellow',
        company: 'National Science Foundation',
        period: '2019 - 2020',
        focus: 'NLP & AI Safety',
        description: 'Conducted research on bias mitigation in Large Language Models. Published findings on AI safety protocols.',
    },
] as const;

export const skills = {
    'Generative AI': {
        icon: 'cpu',
        color: 'green',
        items: ['Copilot Studio', 'LangChain', 'RAG Architecture', 'OpenAI API', 'Prompt Engineering'],
    },
    'Cloud Operations': {
        icon: 'cloud',
        color: 'blue',
        items: ['Azure Expert', 'Google Cloud Platform', 'Bicep / Terraform', 'FinOps', 'Vertex AI'],
    },
    'DevOps & Engineering': {
        icon: 'terminal',
        color: 'purple',
        items: ['CI/CD Pipelines', 'Docker & Kubernetes', 'GitOps', 'SQL / NoSQL', 'Python'],
    },
    'Governance & Compliance': {
        icon: 'shield',
        color: 'orange',
        items: ['AuditBoard', 'AML Frameworks', 'Risk Management', 'AI Safety', 'Policy as Code'],
    },
} as const;

export const contact = {
    title: 'Ready to Architect the Future?',
    description: 'Whether you need to deploy autonomous agents, secure your cloud infrastructure, or just want to chat about the latest in AI—I\'m here to help. Reach out below.',
    cta: {
        primary: {
            text: 'Email Me',
            href: 'mailto:hello@warrenkabuchi.com',
            icon: 'mail',
        },
        secondary: {
            text: 'Connect on LinkedIn',
            href: 'https://linkedin.com/in/warrenkabuchi',
            icon: 'linkedin',
        },
    },
} as const;

export const socialLinks = {
    github: 'https://github.com/warrenkabuchi',
    linkedin: 'https://linkedin.com/in/warrenkabuchi',
    email: 'mailto:hello@warrenkabuchi.com',
    sky360Instagram: 'https://instagram.com/skyvisions_360',
} as const;

export const footer = {
    copyright: `© ${new Date().getFullYear()} Warren Kabuchi. All rights reserved.`,
    stack: 'Built with Next.js 14 & Tailwind',
} as const;

// Page-specific content

export const aiPage = {
    hero: {
        title: 'AI Consulting & Solutions',
        subtitle: 'Enterprise-Grade AI Agents & Governance',
        description: 'Specialized in Microsoft Copilot Studio, Azure OpenAI, and GCP Vertex AI. Building intelligent systems that are both powerful and compliant.',
    },
    services: [
        {
            title: 'AI Agent Development',
            description: 'Custom Copilot Studio agents and agentic workflows',
            icon: 'brain',
        },
        {
            title: 'Governance Frameworks',
            description: 'AI safety, compliance, and risk management',
            icon: 'shield',
        },
        {
            title: 'Cloud AI Infrastructure',
            description: 'Multi-cloud AI deployment and optimization',
            icon: 'cloud',
        },
    ],
    calendly: {
        // Replace with your actual Calendly public URL
        // Example: 'https://calendly.com/your-username/30min'
        url: 'https://calendly.com/warrenkabuchi/coffee',
        title: 'Schedule a Consultation',
        description: 'Book a 30-minute discovery call to discuss your AI project. Choose a time that works best for you.',
    },
} as const;

export const djPage = {
    hero: {
        title: 'Sonic Journeys',
        subtitle: 'Deep House. Afro-Tech. Melodic Techno.',
        description: 'Curating atmospheres that move the soul and the feet.',
    },
    booking: {
        title: 'Book Me',
        description: 'Available for clubs, festivals, and private events. Fill out the form below to get the conversation started.',
    },
    mixes: [
        {
            title: 'Afro House Beats',
            url: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/warren-kabuchi-1/mix-afro-house-beats-dance',
        },
        {
            title: 'All Around The World',
            url: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/warren-kabuchi-1/all-around-the-world',
        },
        {
            title: 'ke0pdhvft90d',
            url: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/warren-kabuchi-1/ke0pdhvft90d',
        },
    ],
} as const;

export const travelPage = {
    hero: {
        title: 'Wanderlust Chronicles',
        subtitle: 'Exploring the World, One City at a Time',
        description: 'Stories, photos, and insider tips from a globe-trotting adventure seeker. Let me help you craft unforgettable experiences around the world.',
    },
} as const;

export const dronePage = {
    hero: {
        title: 'Sky 360 Visions',
        subtitle: 'See Your World From Every Angle',
        description: 'Cinematic aerial footage with a twist—the drone disappears. Using cutting-edge 360° technology, we capture smooth, floating perspectives that look like magic.',
    },
    instagram: 'https://instagram.com/skyvisions_360',
    gear: {
        drone: 'Antigravity A1',
        camera: 'Insta360 X5',
        features: ['8K 360° Video', 'Invisible Drone', 'Indoor Capable', 'Whisper Quiet'],
    },
    services: [
        {
            id: 'real-estate',
            title: 'Luxury Property Tours',
            tagline: 'Real Estate',
            description: 'Seamless one-take tours that glide from curb appeal through every room and out to the backyard. No cuts, no visible equipment—just a magical floating perspective that makes buyers feel like they\'re already home.',
            benefits: [
                'Single continuous shot from exterior to interior',
                'Safe, quiet indoor flight',
                'Smooth cinematic movement throughout',
                'Premium content for high-end listings',
            ],
            icon: 'home',
            pricing: 'Starting at $500 per property',
        },
        {
            id: 'events',
            title: 'Event & Festival Coverage',
            tagline: 'Live Events',
            description: 'Dynamic floating camera angles that follow performers and capture crowd energy. Get that cinematic third-person look without any visible equipment—perfect for recap videos and social content.',
            benefits: [
                'Both vertical and widescreen formats from one shoot',
                'Unique angles that stand out on social media',
                'Capture the full energy of live performances',
                'Quick turnaround for social media highlights',
            ],
            icon: 'music',
            pricing: 'Custom packages available',
        },
        {
            id: 'vr-spatial',
            title: 'Immersive 360° Content',
            tagline: 'VR & Spatial Video',
            description: 'Full 8K 360° aerial footage ready for Apple Vision Pro, Meta Quest, and other VR platforms. From serene nature escapes to urban exploration—create experiences that transport viewers.',
            benefits: [
                'Apple Vision Pro and VR headset ready',
                'Stunning scenic and location content',
                'Perfect for virtual tours and experiences',
                'Future-proof for emerging platforms',
            ],
            icon: 'glasses',
            pricing: 'Custom shoots or licensing available',
        },
        {
            id: 'inspections',
            title: 'Site Documentation',
            tagline: 'Inspections & Surveys',
            description: 'Comprehensive aerial documentation that captures every angle in a single pass. Review any direction after the flight is complete—perfect for construction progress, roof inspections, and asset management.',
            benefits: [
                'Full 360° documentation from safe distances',
                'Review and zoom into any angle after the fact',
                'Detailed records for insurance and compliance',
                'Efficient single-visit comprehensive coverage',
            ],
            icon: 'hard-hat',
            pricing: 'Project-based pricing',
        },
    ],
    advantages: [
        {
            feature: 'Multiple Formats',
            advantage: 'Get vertical, widescreen, and square video from a single flight',
        },
        {
            feature: 'Invisible Camera',
            advantage: 'No drone in frame—just smooth, floating cinematic footage',
        },
        {
            feature: 'Perfect Every Shot',
            advantage: 'Choose your exact framing in post-production',
        },
    ],
    calendly: {
        url: 'https://calendly.com/warrenkabuchi/drone-consultation',
        title: 'Let\'s Talk About Your Project',
        description: 'Book a free consultation to discuss your vision and get a custom quote.',
    },
} as const;

// Drone Service Packages & Pricing
export const droneServicePackages = {
    'real-estate': {
        name: 'Luxury Property Tours',
        icon: 'home',
        description: 'Seamless one-take tours that glide from curb appeal through every room.',
        packages: [
            {
                tier: 'basic' as const,
                name: 'Essential',
                price: 500,
                includes: ['2-3 min edited video', '10 edited photos', '48hr delivery', 'Basic color correction'],
            },
            {
                tier: 'standard' as const,
                name: 'Professional',
                price: 800,
                includes: ['4-5 min cinematic video', '20 edited photos', 'Social media cuts', '24hr delivery', 'Advanced color grading'],
            },
            {
                tier: 'premium' as const,
                name: 'Luxury',
                price: 1500,
                includes: ['8+ min cinematic tour', '50+ edited photos', 'Twilight shoot included', '360° virtual tour', 'Same-day delivery option', 'Drone + ground footage'],
            },
        ],
        addOns: [
            { id: 'rush', name: 'Rush Delivery (Same Day)', price: 200 },
            { id: 'raw', name: 'Raw Files Included', price: 150 },
            { id: 'twilight', name: 'Additional Twilight Shoot', price: 250 },
            { id: 'floorplan', name: 'Aerial Floor Plan Overlay', price: 175 },
            { id: 'social', name: 'Social Media Package (5 reels)', price: 300 },
        ],
        checklist: [
            'Location scout & shot planning',
            'Capture aerial exteriors',
            'Capture interior walkthrough',
            'Capture backyard/pool area',
            'Color correction & grading',
            'Audio/music selection',
            'Final edit & export',
            'Upload to delivery portal',
            'Notify client',
        ],
    },
    'events': {
        name: 'Event & Festival Coverage',
        icon: 'music',
        description: 'Dynamic floating camera angles that follow performers and capture crowd energy.',
        packages: [
            {
                tier: 'basic' as const,
                name: 'Highlight',
                price: 600,
                includes: ['2-3 min recap video', 'Key moments coverage', '72hr delivery', '10 photos'],
            },
            {
                tier: 'standard' as const,
                name: 'Full Coverage',
                price: 1200,
                includes: ['5-8 min recap video', 'Full event coverage', '48hr delivery', '25 photos', 'Social cuts'],
            },
            {
                tier: 'premium' as const,
                name: 'Festival Pro',
                price: 2500,
                includes: ['Multiple recap videos', 'Multi-day coverage', '24hr daily highlights', '100+ photos', 'Live streaming ready', 'Dedicated operator'],
            },
        ],
        addOns: [
            { id: 'rush', name: 'Rush Delivery (24hr)', price: 300 },
            { id: 'raw', name: 'Raw Files Included', price: 200 },
            { id: 'live', name: 'Live Stream Setup', price: 500 },
            { id: 'extra-day', name: 'Additional Day Coverage', price: 800 },
            { id: 'social', name: 'Social Media Package (10 reels)', price: 400 },
        ],
        checklist: [
            'Pre-event site visit',
            'Coordinate with event staff',
            'Capture setup/preparation',
            'Capture main performances',
            'Capture crowd reactions',
            'Capture venue atmosphere',
            'Color correction & grading',
            'Sync to music',
            'Final edit & export',
            'Upload to delivery portal',
            'Notify client',
        ],
    },
    'vr-spatial': {
        name: 'Immersive 360° Content',
        icon: 'glasses',
        description: 'Full 8K 360° aerial footage ready for Apple Vision Pro, Meta Quest, and VR platforms.',
        packages: [
            {
                tier: 'basic' as const,
                name: 'Explorer',
                price: 800,
                includes: ['Single location shoot', '5 min 360° video', '8K resolution', 'VR-ready export'],
            },
            {
                tier: 'standard' as const,
                name: 'Immersive',
                price: 1500,
                includes: ['Up to 3 locations', '15 min 360° video', '8K resolution', 'Spatial audio', 'Apple Vision Pro optimized'],
            },
            {
                tier: 'premium' as const,
                name: 'Virtual Tour Pro',
                price: 3000,
                includes: ['Unlimited locations', 'Full property/venue tour', '8K + 12K options', 'Interactive hotspots', 'Custom branding', 'All VR platforms'],
            },
        ],
        addOns: [
            { id: 'spatial-audio', name: 'Advanced Spatial Audio', price: 300 },
            { id: 'interactive', name: 'Interactive Hotspots', price: 400 },
            { id: 'licensing', name: 'Commercial Licensing', price: 500 },
            { id: 'narration', name: 'Professional Narration', price: 250 },
        ],
        checklist: [
            'Plan 360° shot positions',
            'Calibrate 360° camera',
            'Capture aerial 360° footage',
            'Capture ground-level 360°',
            'Stitch & process footage',
            'Add spatial audio',
            'Export for VR platforms',
            'Quality check on headset',
            'Upload to delivery portal',
            'Notify client',
        ],
    },
    'inspections': {
        name: 'Site Documentation',
        icon: 'hard-hat',
        description: 'Comprehensive aerial documentation for construction, inspections, and asset management.',
        packages: [
            {
                tier: 'basic' as const,
                name: 'Quick Survey',
                price: 400,
                includes: ['Single site visit', '50 aerial photos', 'Basic report', 'GPS coordinates'],
            },
            {
                tier: 'standard' as const,
                name: 'Full Inspection',
                price: 750,
                includes: ['Detailed site coverage', '150+ photos', 'Video walkthrough', 'Annotated report', 'Thermal imaging'],
            },
            {
                tier: 'premium' as const,
                name: 'Enterprise',
                price: 1500,
                includes: ['Multi-site coverage', '500+ photos', '4K video documentation', '3D mapping', 'Thermal + RGB', 'Detailed analysis report', 'Monthly retainer option'],
            },
        ],
        addOns: [
            { id: 'thermal', name: 'Thermal Imaging Add-on', price: 200 },
            { id: '3d-map', name: '3D Site Mapping', price: 400 },
            { id: 'orthomosaic', name: 'Orthomosaic Map', price: 350 },
            { id: 'recurring', name: 'Monthly Monitoring Setup', price: 300 },
        ],
        checklist: [
            'Review site requirements',
            'Flight path planning',
            'Capture systematic aerial grid',
            'Capture detail shots',
            'Thermal scan (if applicable)',
            'Process & organize images',
            'Generate report',
            'Export deliverables',
            'Upload to delivery portal',
            'Notify client',
        ],
    },
} as const;

export type DroneServiceKey = keyof typeof droneServicePackages;
