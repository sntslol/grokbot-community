import { DownloadSection } from "@/components/download-section";
import { FeatureCards } from "@/components/feature-cards";
import { Hero } from "@/components/hero";
import { MeetupsSection } from "@/components/meetups-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { OffersSection } from "@/components/offers-section";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <NewsletterSection />
      <MeetupsSection limit={4} />
      <OffersSection />
      <DownloadSection />
    </>
  );
}
