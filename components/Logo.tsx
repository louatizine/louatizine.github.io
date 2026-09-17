type LogoProps = {
  className?: string;
  /** Compact for tight mobile nav */
  size?: "sm" | "md";
};

/**
 * Signature-in-tags logo: < Zine eddine Louati />
 * Developer identity meets personal signature — code brackets frame a handwritten name.
 */
export function Logo({ className = "", size = "md" }: LogoProps) {
  const isSm = size === "sm";

  return (
    <span
      className={`inline-flex items-center gap-1 select-none ${className}`}
      aria-label="Zine eddine Louati"
    >
      <span
        className={`font-mono font-medium leading-none text-slate-400 ${
          isSm ? "text-base sm:text-lg" : "text-lg sm:text-xl"
        }`}
        aria-hidden
      >
        {"<"}
      </span>
      <span
        className={`font-signature font-bold leading-none tracking-tight text-[var(--accent)] ${
          isSm ? "text-[1.35rem] sm:text-[1.55rem]" : "text-2xl sm:text-[1.75rem]"
        }`}
      >
        Zine eddine Louati
      </span>
      <span
        className={`font-mono font-medium leading-none text-slate-400 ${
          isSm ? "text-base sm:text-lg" : "text-lg sm:text-xl"
        }`}
        aria-hidden
      >
        {"/>"}
      </span>
    </span>
  );
}
