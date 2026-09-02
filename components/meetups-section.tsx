import { Calendar, MapPin } from "lucide-react";
import { listMeetups } from "@/lib/data";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export async function MeetupsSection({
  heading = "Upcoming meetups",
  limit,
}: {
  heading?: string;
  limit?: number;
}) {
  const meetups = (await listMeetups()).slice(0, limit ?? 99);

  return (
    <section id="meetups" className="px-5 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-[550] leading-[36px] tracking-[-0.8px] text-jet sm:text-[48px] sm:leading-[48px] dark:text-paper">
              {heading}
            </h2>
            <p className="mt-3 max-w-xl text-[17px] leading-7 text-fog">
              Phoenix-area first. RSVP in Discord so we can size the room.
            </p>
          </div>
          <a
            href={site.discord}
            className="text-sm font-medium text-primary hover:underline"
          >
            Host a city →
          </a>
        </div>

        {meetups.length === 0 ? (
          <p className="mt-10 rounded-3xl bg-ivory px-6 py-10 text-fog dark:bg-card">
            No meetups on the calendar yet. Ping Discord if you want to host one.
          </p>
        ) : (
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {meetups.map((meetup) => (
              <li key={meetup.id}>
                <a
                  href={meetup.href}
                  className="flex h-full flex-col rounded-3xl bg-ivory p-6 transition-colors hover:bg-cream/40 dark:bg-card dark:hover:bg-white/5"
                >
                  <p className="text-sm font-medium text-primary">{meetup.city}</p>
                  <h3 className="mt-2 text-xl font-medium text-jet dark:text-paper">
                    {meetup.title}
                  </h3>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-fog">
                    <Calendar className="size-4" strokeWidth={1.75} />
                    {formatDate(meetup.date)} · {meetup.time}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-fog">
                    <MapPin className="size-4" strokeWidth={1.75} />
                    {meetup.venue}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
