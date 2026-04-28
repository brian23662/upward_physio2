import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        aria-hidden="true"
      >
        {/* The "U" curve, pointing up like an arrow */}
        <path
          d="M8 8 V22 C8 28.6274 13.3726 34 20 34 C26.6274 34 32 28.6274 32 22 V8"
          stroke="url(#logo-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Upward arrow piercing through */}
        <path
          d="M20 28 V6 M14 12 L20 6 L26 12"
          stroke="#2dd4bf"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="logo-gradient" x1="8" y1="8" x2="32" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>
      {showWordmark && (
        <span className="font-display text-xl font-bold tracking-tight text-ink-50">
          Upward<span className="text-teal-400">Physio</span>
        </span>
      )}
    </div>
  );
}
