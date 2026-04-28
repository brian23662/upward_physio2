import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 mb-5',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="h-px w-8 bg-teal-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
