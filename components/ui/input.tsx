import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-lg border border-ink-700 bg-ink-900/60 px-4 py-2 text-sm text-ink-50 placeholder:text-ink-400 transition-colors',
          'focus-visible:outline-none focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
