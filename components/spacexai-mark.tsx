import { cn } from "@/lib/utils";

export function SpaceXaiMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("text-jet dark:text-paper", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2.4 3h6.1L12 8.2 15.5 3h6.1l-7.4 9.3L22 21h-6.2L12 15.6 8.2 21H2l7.5-8.7L2.4 3Z" />
    </svg>
  );
}

export function SpaceXaiWordmark({ className }: { className?: string }) {
  return (
    <a
      href="https://x.ai"
      className={cn(
        "inline-flex items-center gap-2 text-jet transition-opacity hover:opacity-80 dark:text-paper",
        className,
      )}
      aria-label="SpaceXAI"
    >
      <SpaceXaiMark className="size-6" />
      <span className="font-[family-name:var(--font-display)] text-[13px] font-[550] tracking-[0.18em]">
        SPACEXAI
      </span>
    </a>
  );
}
