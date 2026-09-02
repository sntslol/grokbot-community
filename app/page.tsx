import { AgencyCta } from "@/components/agency-cta";
import { GuidesSection } from "@/components/guides-section";
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
      <GuidesSection limit={8} />
      <MeetupsSection limit={4} />
      <NewsletterSection />
      <AgencyCta />
    </>
  );
}
