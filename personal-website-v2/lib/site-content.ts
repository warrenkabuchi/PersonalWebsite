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
        { href: '/dj', label: 'DJ', theme: 'dj' },
        { href: '/travel', label: 'Travel', theme: 'travel' },
        { href: '/#contact', label: 'Contact', theme: 'default' },
    ],
    cta: {
        text: 'Hire Me',
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
    description: 'Whether you need to deploy autonomous agents, secure your cloud infrastructure, or just want to chat about the latest in AI—I\'m always open to new opportunities.',
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
    github: '#',
    linkedin: 'https://linkedin.com/in/warrenkabuchi',
    email: 'mailto:hello@warrenkabuchi.com',
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
