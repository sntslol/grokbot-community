import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-[family-name:var(--font-text)] text-[15px] font-medium leading-none transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary:
          "bg-ivory text-jet hover:bg-cream/70 dark:bg-card dark:text-paper dark:hover:bg-white/10",
        outline:
          "border border-dove bg-paper text-jet hover:bg-ivory dark:border-white/15 dark:bg-transparent dark:text-paper dark:hover:bg-white/5",
        ghost: "text-jet hover:bg-ivory dark:text-paper dark:hover:bg-white/5",
        gold: "bg-gold text-jet hover:bg-[#e6b501]",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6",
        sm: "h-9 px-4 text-sm",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
