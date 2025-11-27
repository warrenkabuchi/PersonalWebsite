export interface BlogPost {
    id?: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage: string;
    location: string;
    date: number; // Timestamp
    createdAt: number;
    category: 'work' | 'travel';
}
