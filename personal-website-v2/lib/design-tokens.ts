/**
 * Design Token System - Comic Book Theme
 * Centralized design tokens for colors, typography, spacing, and effects
 * Focus: Fun, vibrant, user-experience driven
 */

export const comicColors = {
    // Primary Comic Colors - Vibrant & Fun
    primary: {
        red: 'hsl(355, 85%, 55%)',      // Comic book red
        yellow: 'hsl(45, 100%, 55%)',   // Comic book yellow
        blue: 'hsl(210, 100%, 55%)',    // Comic book blue
        black: 'hsl(0, 0%, 8%)',        // Deep black
    },

    // Secondary Accent Colors
    accent: {
        purple: 'hsl(280, 75%, 60%)',   // DJ/Music vibes
        cyan: 'hsl(185, 85%, 55%)',     // Tech/AI vibes
        green: 'hsl(145, 70%, 50%)',    // Success/Growth
        orange: 'hsl(25, 95%, 55%)',    // Energy/Action
        pink: 'hsl(330, 85%, 60%)',     // Fun/Creative
        yellow: 'hsl(45, 100%, 55%)',   // Also in accent for convenience
    },

    // Neutral Base Colors
    neutral: {
        white: 'hsl(0, 0%, 98%)',
        lightest: 'hsl(0, 0%, 95%)',
        light: 'hsl(0, 0%, 85%)',
        mid: 'hsl(0, 0%, 50%)',
        dark: 'hsl(0, 0%, 20%)',
        darkest: 'hsl(0, 0%, 12%)',
        black: 'hsl(0, 0%, 5%)',
    },

    // Additional helpers
    foreground: 'hsl(0, 0%, 8%)',  // matches primary.black
    muted: {
        foreground: 'hsl(0, 0%, 40%)',
    },
    secondary: {
        blue: 'hsl(210, 100%, 55%)',  // same as primary.blue for convenience
    },

    // Page-Specific Theme Colors
    pageThemes: {
        home: {
            primary: 'hsl(355, 85%, 55%)',    // Red
            secondary: 'hsl(210, 100%, 55%)', // Blue
            accent: 'hsl(45, 100%, 55%)',     // Yellow
        },
        ai: {
            primary: 'hsl(250, 80%, 60%)',   // Deep purple/blue - changed from cyan
            secondary: 'hsl(200, 90%, 50%)', // Vibrant blue accent
        },
        dj: {
            primary: 'hsl(355, 85%, 55%)',    // Red - changed from purple for energy
            secondary: 'hsl(330, 85%, 60%)',  // Pink
            accent: 'hsl(25, 95%, 55%)',      // Orange - Energy
        },
        travel: {
            primary: 'hsl(210, 100%, 55%)',   // Blue - Sky
            secondary: 'hsl(145, 70%, 50%)',  // Green - Nature
            accent: 'hsl(45, 100%, 55%)',     // Yellow - Sun
        },
    },
} as const;

export const comicTypography = {
    fonts: {
        display: 'var(--font-display)',  // Oswald for comic-style headers
        sans: 'var(--font-sans)',        // Inter for body
        mono: 'var(--font-mono)',        // JetBrains Mono for code
    },

    sizes: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem',// 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem',  // 72px
        '8xl': '6rem',    // 96px
    },

    weights: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
    },
} as const;

export const comicSpacing = {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
    '4xl': '6rem',  // 96px
    '5xl': '8rem',  // 128px
} as const;

export const comicBorders = {
    width: {
        thin: '2px',
        medium: '3px',
        thick: '4px',
        comic: '5px',  // Signature comic book border
    },
    radius: {
        none: '0',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
    },
} as const;

export const comicShadows = {
    // Flat comic shadows
    sm: '2px 2px 0 hsl(0, 0%, 8%)',
    md: '4px 4px 0 hsl(0, 0%, 8%)',
    lg: '6px 6px 0 hsl(0, 0%, 8%)',
    xl: '8px 8px 0 hsl(0, 0%, 8%)',

    // Colored comic shadows for emphasis
    red: '6px 6px 0 hsl(355, 85%, 45%)',
    blue: '6px 6px 0 hsl(210, 100%, 45%)',
    yellow: '6px 6px 0 hsl(45, 100%, 45%)',
    purple: '6px 6px 0 hsl(280, 75%, 50%)',
} as const;

export const comicAnimations = {
    duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
    },

    easing: {
        ease: 'ease',
        easeIn: 'ease-in',
        easeOut: 'ease-out',
        easeInOut: 'ease-in-out',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        comic: 'cubic-bezier(0.22, 1, 0.36, 1)', // Smooth but snappy
    },
} as const;

// Utility function to get page theme colors
export function getPageTheme(page: 'home' | 'ai' | 'dj' | 'travel') {
    return comicColors.pageThemes[page];
}

// Utility function to create halftone pattern CSS
export function getHalftonePattern(color: string, size: number = 4) {
    return {
        backgroundImage: `radial-gradient(circle, ${color} ${size}px, transparent ${size}px)`,
        backgroundSize: `${size * 4}px ${size * 4}px`,
    };
}
