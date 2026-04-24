---
name: tailwind-design-system
description: A complete guide to using Tailwind CSS v4 design systems, including configuration, theming, and component patterns.
---

# Tailwind Design System (v4)

## When to Use This Skill
- Creating a component library with Tailwind v4
- Implementing design tokens and theming with CSS-first configuration
- Building responsive and accessible components
- Standardizing UI patterns across a codebase
- Migrating from Tailwind v3 to v4
- Setting up dark mode with native CSS features

## Key v4 Changes
- **CSS-first configuration**: Use `@theme` in CSS instead of `tailwind.config.ts`
- **Native dark mode**: Use `@custom-variant dark (&:where(.dark, .dark *))`
- **OKLCH colors**: Preferred for better perceptual uniformity
- **Native animations**: Define keyframes inside `@theme`
- **Container queries**: standard support with `@theme { --container-*: ... }`

## Quick Start
```css
/* app.css - Tailwind v4 CSS-first configuration */
@import "tailwindcss";

@theme {
  /* Semantic color tokens using OKLCH */
  --color-background: oklch(100% 0 0);
  --color-foreground: oklch(14.5% 0.025 264);
  --color-primary: oklch(14.5% 0.025 264);
  --color-primary-foreground: oklch(98% 0.01 264);
  /* ... other colors ... */
  
  /* Radius tokens */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;

  /* Animations */
  --animate-fade-in: fade-in 0.2s ease-out;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}

/* Dark mode variant */
@custom-variant dark (&:where(.dark, .dark *));

/* Dark mode overrides */
.dark {
  --color-background: oklch(14.5% 0.025 264);
  --color-foreground: oklch(98% 0.01 264);
  /* ... */
}
```

## Core Patterns

### 1. CVA (Class Variance Authority)
Use `cva` for managing component variants. v4 uses native CSS variables for base styles.

### 2. Compound Components (React 19)
- `ref` is now a regular prop, no need for `forwardRef`
- Encapsulate styles with `cn()` utility

### 3. Native CSS Animations
Use `@starting-style` for entry animations in native elements (dialogs, popovers).

## Best Practices
### Do's
- **Use @theme blocks**: CSS-first configuration is v4's core pattern
- **Use OKLCH colors**: For better perceptual uniformity
- **Compose with CVA**: For type-safe variants
- **Use semantic tokens**: e.g. `bg-primary` over `bg-blue-500`

### Don'ts
- **Don't use tailwind.config.ts** (mostly): Use CSS `@theme`
- **Don't use @tailwind directives**: Use `@import "tailwindcss"`
- **Don't use forwardRef**: React 19 passes ref as prop

## Resources
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [CVA Documentation](https://cva.style/docs)
