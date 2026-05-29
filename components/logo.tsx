import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* Upward "U + arrow" brand mark */}
      <img
        src="/logo-mark.svg"
        alt="Upward Physio & Performance logo"
        className="h-9 w-auto"
        width={70}
        height={36}
      />
      {showWordmark && (
        <span className="font-display text-xl font-bold tracking-tight text-ink-50">
          Upward<span className="text-teal-400">Physio</span>
        </span>
      )}
    </div>
  );
}
