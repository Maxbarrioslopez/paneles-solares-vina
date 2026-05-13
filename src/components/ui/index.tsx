"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Button - Componente de botón reutilizable
 * 
 * Variantes disponibles:
 * - default: Fondo primario (ámbar)
 * - secondary: Fondo secundario (azul)
 * - outline: Borde con fondo transparente
 * - ghost: Sin fondo, solo texto
 * - whatsapp: Verde estilo WhatsApp
 * 
 * Tamaños:
 * - default: Tamaño estándar
 * - sm: Pequeño
 * - lg: Grande
 * - xl: Extra grande (para CTAs principales)
 * - icon: Solo ícono
 */

const buttonVariants = {
  variant: {
    default: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500",
    secondary: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500",
    accent: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500",
    outline: "border-2 border-amber-500 text-amber-600 hover:bg-amber-50 focus:ring-amber-500",
    ghost: "text-slate-700 hover:bg-slate-100 focus:ring-slate-500",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    white: "bg-white text-slate-900 hover:bg-slate-100 focus:ring-white",
  },
  size: {
    default: "h-11 px-6 py-2",
    sm: "h-9 px-4 py-1.5 text-sm",
    lg: "h-12 px-8 py-3 text-lg",
    xl: "h-14 px-10 py-4 text-lg font-semibold",
    icon: "h-11 w-11 p-2",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.98]",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

/**
 * Card - Componente de tarjeta reutilizable
 */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-slate-200 bg-white shadow-sm",
      "transition-all duration-200 hover:shadow-md",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-slate-900",
      className
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

/**
 * AnimatedSection - Componente para animar secciones al hacer scroll
 */

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedSection };

/**
 * Badge - Componente de etiqueta
 */

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" | "accent" }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-amber-100 text-amber-800 border-amber-200",
    secondary: "bg-sky-100 text-sky-800 border-sky-200",
    outline: "border-2 border-slate-300 text-slate-700 bg-transparent",
    accent: "bg-emerald-100 text-emerald-800 border-emerald-200",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge };

/**
 * Input - Componente de input reutilizable
 */

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm",
        "placeholder:text-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-200",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };

/**
 * Textarea - Componente de textarea reutilizable
 */

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm",
        "placeholder:text-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-200 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };

/**
 * Select - Componente de select reutilizable
 */

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-200 appearance-none",
        "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]",
        "bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Select.displayName = "Select";

export { Select };
