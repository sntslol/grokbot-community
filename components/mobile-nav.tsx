"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "size-9 border-jet/30 text-jet dark:border-paper/50 dark:bg-transparent dark:text-paper",
        )}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" strokeWidth={2} /> : <Menu className="size-5" strokeWidth={2} />}
      </button>
      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-16 z-50 px-5 pb-4"
        >
          <nav
            aria-label="Site"
            className="rounded-3xl bg-ivory p-2 shadow-[0_16px_40px_rgba(10,10,10,0.08)] dark:bg-card dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center rounded-full px-4 text-[15px] font-medium text-jet hover:bg-cream/50 dark:text-paper dark:hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
