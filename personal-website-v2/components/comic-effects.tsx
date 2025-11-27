/**
 * Comic Book UI Components
 * Reusable components for comic book aesthetic
 */

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { comicColors, comicShadows, comicBorders } from '@/lib/design-tokens';

// ============================================
// Comic Panel Component
// ============================================
interface ComicPanelProps extends HTMLMotionProps<'div'> {
    variant?: 'default' | 'primary' | 'accent';
    borderColor?: string;
    children: React.ReactNode;
}

export function ComicPanel({
    variant = 'default',
    borderColor,
    className,
    children,
    ...props
}: ComicPanelProps) {
    const getBorderColor = () => {
        if (borderColor) return borderColor;
        switch (variant) {
            case 'primary': return comicColors.primary.red;
            case 'accent': return comicColors.accent.cyan;
            default: return comicColors.neutral.darkest;
        }
    };

    return (
        <motion.div
            className={cn(
                'relative bg-white border-4 rounded-lg overflow-hidden',
                className
            )}
            style={{
                borderColor: getBorderColor(),
                boxShadow: comicShadows.lg,
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// Speech Bubble Component
// ============================================
interface SpeechBubbleProps {
    children: React.ReactNode;
    variant?: 'speech' | 'thought' | 'shout';
    color?: string;
    className?: string;
}

export function SpeechBubble({
    children,
    variant = 'speech',
    color = comicColors.primary.yellow,
    className
}: SpeechBubbleProps) {
    return (
        <div
            className={cn(
                'relative px-6 py-4 rounded-2xl border-4 font-bold text-center',
                variant === 'shout' && 'border-8 uppercase tracking-wider',
                variant === 'thought' && 'border-dashed',
                className
            )}
            style={{
                backgroundColor: color,
                borderColor: comicColors.neutral.darkest,
                boxShadow: comicShadows.md,
            }}
        >
            {children}
            {/* Tail for speech bubble */}
            {variant === 'speech' && (
                <div
                    className="absolute -bottom-3 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-t-[20px] border-r-[15px] border-r-transparent"
                    style={{ borderTopColor: comicColors.neutral.darkest }}
                >
                    <div
                        className="absolute -top-[16px] -left-[11px] w-0 h-0 border-l-[11px] border-l-transparent border-t-[16px] border-r-[11px] border-r-transparent"
                        style={{ borderTopColor: color }}
                    />
                </div>
            )}
        </div>
    );
}

// ============================================
// Action Text Component (POW!, BAM!, etc.)
// ============================================
interface ActionTextProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
    animate?: boolean;
}

export function ActionText({
    children,
    color = comicColors.primary.red,
    className,
    animate = true,
}: ActionTextProps) {
    const MotionComponent = animate ? motion.div : 'div';

    return (
        <MotionComponent
            className={cn(
                'inline-block font-black text-6xl md:text-8xl uppercase tracking-wider transform -rotate-12',
                className
            )}
            style={{
                color: color,
                textShadow: `
          3px 3px 0 ${comicColors.neutral.darkest},
          6px 6px 0 ${comicColors.neutral.darkest}30
        `,
                WebkitTextStroke: `3px ${comicColors.neutral.darkest}`,
                paintOrder: 'stroke fill',
            }}
            {...(animate && {
                initial: { scale: 0, rotate: -180 },
                animate: { scale: 1, rotate: -12 },
                transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                },
            })}
        >
            {children}
        </MotionComponent>
    );
}

// ============================================
// Halftone Background Component
// ============================================
interface HalftoneBackgroundProps {
    color?: string;
    dotSize?: number;
    opacity?: number;
    className?: string;
    children?: React.ReactNode;
}

export function HalftoneBackground({
    color = comicColors.accent.cyan,
    dotSize = 3,
    opacity = 0.15,
    className,
    children
}: HalftoneBackgroundProps) {
    return (
        <div className={cn('relative', className)}>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, ${color} ${dotSize}px, transparent ${dotSize}px)`,
                    backgroundSize: `${dotSize * 5}px ${dotSize * 5}px`,
                    opacity: opacity,
                }}
            />
            {children && <div className="relative z-10">{children}</div>}
        </div>
    );
}

// ============================================
// Comic Badge Component
// ============================================
interface ComicBadgeProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
}

export function ComicBadge({
    children,
    color = comicColors.primary.yellow,
    className
}: ComicBadgeProps) {
    return (
        <span
            className={cn(
                'inline-block px-4 py-2 font-bold text-sm uppercase tracking-wide border-3 rounded-full',
                className
            )}
            style={{
                backgroundColor: color,
                borderColor: comicColors.neutral.darkest,
                boxShadow: comicShadows.sm,
                color: comicColors.neutral.darkest,
            }}
        >
            {children}
        </span>
    );
}

// ============================================
// Speed Lines Effect
// ============================================
interface SpeedLinesProps {
    direction?: 'left' | 'right' | 'center';
    color?: string;
    className?: string;
}

export function SpeedLines({
    direction = 'right',
    color = comicColors.neutral.darkest,
    className
}: SpeedLinesProps) {
    const lines = Array.from({ length: 8 }, (_, i) => i);

    const getTransform = (index: number) => {
        const offset = index * 15;
        switch (direction) {
            case 'left':
                return `translateX(${offset}px) rotate(-5deg)`;
            case 'right':
                return `translateX(-${offset}px) rotate(5deg)`;
            default:
                return `translateY(${offset}px)`;
        }
    };

    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {lines.map((i) => (
                <div
                    key={i}
                    className="absolute w-full h-1 opacity-20"
                    style={{
                        backgroundColor: color,
                        transform: getTransform(i),
                        top: `${i * 12}%`,
                    }}
                />
            ))}
        </div>
    );
}

// ============================================
// Comic Card Component
// ============================================
interface ComicCardProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
    onClick?: () => void;
}

export function ComicCard({
    children,
    color = comicColors.neutral.white,
    className,
    onClick
}: ComicCardProps) {
    return (
        <motion.div
            className={cn(
                'relative p-6 border-4 rounded-xl cursor-pointer',
                className
            )}
            style={{
                backgroundColor: color,
                borderColor: comicColors.neutral.darkest,
                boxShadow: comicShadows.md,
            }}
            whileHover={{
                y: -4,
                boxShadow: comicShadows.xl,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}
