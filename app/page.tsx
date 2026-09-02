import { AgencyCta } from "@/components/agency-cta";
import { CatalogCtas } from "@/components/catalog-ctas";
import { FeatureCards } from "@/components/feature-cards";
import { Hero } from "@/components/hero";
import { MeetupsSection } from "@/components/meetups-section";
import { NewsletterSection } from "@/components/newsletter-section";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <CatalogCtas />
      <MeetupsSection limit={4} />
      <NewsletterSection />
      <AgencyCta />
    </>
  );
}
