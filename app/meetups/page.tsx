import type { Metadata } from "next";
import { MeetupsSection } from "@/components/meetups-section";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Meetups",
  description: "Upcoming Grok Bot community meetups.",
  alternates: { canonical: "/meetups" },
  openGraph: { url: `${site.url}/meetups` },
};

export default function MeetupsPage() {
  return <MeetupsSection heading="Meetups" />;
}
