import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-teal-500 text-ink-950 hover:bg-teal-400 shadow-[0_0_30px_-8px_rgba(20,184,166,0.6)] hover:shadow-[0_0_40px_-4px_rgba(20,184,166,0.8)]',
        ember:
          'bg-ember-500 text-ink-950 hover:bg-ember-400 shadow-[0_0_30px_-8px_rgba(249,115,22,0.6)]',
        outline:
          'border border-ink-700 bg-transparent text-ink-50 hover:border-teal-400 hover:text-teal-400',
        ghost: 'text-ink-100 hover:text-teal-400',
      },
      size: {
        default: 'h-12 px-7 py-3',
        sm: 'h-10 px-5',
        lg: 'h-14 px-9 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
