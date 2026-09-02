"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { emailPattern } from "@/lib/site";
import { cn } from "@/lib/utils";

export function NewsletterForm({
  id = "newsletter-email",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    if (!emailPattern.test(value)) {
      setStatus("error");
      setMessage("Enter a valid email.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !data?.ok) {
        setStatus("error");
        setMessage("Could not subscribe. Try again.");
        return;
      }
      setStatus("ok");
      setMessage("You are in. Watch your inbox.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Could not subscribe. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", compact ? "text-left" : "")}>
      <div
        className={cn(
          "flex w-full gap-2",
          compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row",
        )}
      >
        <label htmlFor={id} className="sr-only">
          Email
        </label>
        <input
          id={id}
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle" && status !== "loading") setStatus("idle");
          }}
          placeholder="you@company.com"
          className="h-11 min-w-0 flex-1 rounded-full border border-dove bg-paper px-4 text-[15px] text-jet outline-none placeholder:text-fog focus:border-primary dark:border-white/15 dark:bg-card dark:text-paper"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(buttonVariants({ size: compact ? "default" : "default" }), "shrink-0")}
        >
          {status === "loading" ? "Joining…" : "Get updates"}
        </button>
      </div>
      {status === "ok" ? (
        <p className="mt-2 text-sm text-primary" role="status">
          {message}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-2 text-sm text-sunset" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
