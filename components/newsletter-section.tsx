import { NewsletterForm } from "@/components/newsletter-form";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="px-5 py-24">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-ivory px-6 py-14 text-center dark:bg-card sm:px-12">
        <p className="text-[13px] font-medium tracking-[0.12em] text-fog uppercase">
          Newsletter
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-[36px] font-[550] leading-[36px] tracking-[-0.8px] text-jet sm:text-[48px] sm:leading-[48px] dark:text-paper">
          Drops, meetups, and Bot news
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-7 text-fog">
          Short notes when something ships. No drip sequence.
        </p>
        <div className="mx-auto mt-8 max-w-md text-left">
          <NewsletterForm id="newsletter-email" />
        </div>
      </div>
    </section>
  );
}
