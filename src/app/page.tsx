import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

function RoomComingSoonCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}) {
  return (
    <article className="grid overflow-hidden border border-light-border bg-light-card dark:border-dark-border dark:bg-dark-surface md:grid-cols-2">
      <div className="relative min-h-[14rem] md:min-h-[20rem]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="flex flex-col justify-center border-light-border p-8 dark:border-dark-border md:border-l md:border-light-border md:px-10 md:py-12 dark:md:border-dark-border">
        <p className="mb-2 font-heading text-xs font-semibold tracking-[0.25em] text-light-gold dark:text-dark-gold">
          ROOM
        </p>
        <h3 className="mb-4 font-heading text-2xl font-bold uppercase tracking-wide text-light-text md:text-3xl dark:text-dark-text">
          {title}
        </h3>
        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-b border-light-border pb-6 font-body text-sm text-light-muted dark:border-dark-border dark:text-dark-muted">
          <span>Medium difficulty</span>
          <span>3–5 players</span>
          <span>60 minutes</span>
        </div>
        <p className="mb-8 font-body leading-relaxed text-light-muted dark:text-dark-muted">{description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <span className="font-heading text-xl font-semibold uppercase text-light-text dark:text-dark-text">Free</span>
          <span className="border border-light-border px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider text-light-muted dark:border-dark-border dark:text-dark-muted">
            Coming soon
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      {/* Hero — full-bleed photo, single-tone overlay, left-anchored copy (not centered card stack) */}
      <section className="relative min-h-screen">
        <Image
          src="/images/MungChang1.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80 dark:bg-black/75" aria-hidden />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-6 font-heading text-xs font-semibold tracking-[0.35em] text-white/55">
              PURDUE · STUDENT-BUILT ESCAPE
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white">
              Beat the clock.
              <span className="mt-2 block text-light-gold dark:text-[#D4AF37]">Engineer your way out.</span>
            </h1>
          </div>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-0">
            <Link
              href="/book"
              className="inline-flex w-fit items-center justify-center border-2 border-white bg-white px-10 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] transition-colors hover:bg-transparent hover:text-white"
            >
              Book Now
            </Link>
            <Link
              href="/about"
              className="inline-flex w-fit items-center justify-center border-2 border-white/40 px-10 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white"
            >
              About the build
            </Link>
          </div>
        </div>
      </section>

      {/* Audience — editorial rail + staggered text blocks */}
      <FadeIn>
        <section className="border-t border-light-border px-5 py-20 dark:border-dark-border md:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:gap-10 lg:gap-16">
            <div className="md:col-span-4 md:border-r md:border-light-border md:pr-8 dark:md:border-dark-border">
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-light-text md:text-4xl dark:text-dark-text">
                Who it&apos;s for
              </h2>
            </div>
            <div className="mt-12 space-y-14 md:col-span-8 md:mt-0">
              <div className="border-l-2 border-light-gold pl-6 dark:border-dark-gold md:pl-8">
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-light-text dark:text-dark-text">
                  College students &amp; campus groups
                </h3>
                <p className="mt-3 max-w-prose font-body leading-relaxed text-light-muted dark:text-dark-muted">
                Pull your roommates, campus club, or Friday night crew together and take on an escape challenge.
                </p>
              </div>
              <div className="border-l-2 border-light-gold pl-6 dark:border-dark-gold md:ml-8 md:pl-8">
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-light-text dark:text-dark-text">
                  Engineers, makers &amp; puzzle people
                </h3>
                <p className="mt-3 max-w-prose font-body leading-relaxed text-light-muted dark:text-dark-muted">
                Built for minds that love systems, logic, and a little stress. Layered puzzles tied to mechanics, electronics, and logic. 
                </p>
              </div>
              <div className="border-l-2 border-light-gold pl-6 dark:border-dark-gold md:pl-8">
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-light-text dark:text-dark-text">
                  Families, educators &amp; first-timers
                </h3>
                <p className="mt-3 max-w-prose font-body leading-relaxed text-light-muted dark:text-dark-muted">
                  Accessible briefing, real engineering ideas, clear roles. Schools and families get a
                  structured adventure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="border-t border-light-border bg-light-hover px-5 py-16 dark:border-dark-border dark:bg-dark-surface md:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 font-heading text-3xl font-bold uppercase tracking-tight text-light-text md:text-4xl dark:text-dark-text">
              Our escape rooms
            </h2>
            <div className="space-y-8">
              <RoomComingSoonCard
                title="Mung Chang&apos;s Office"
                description="Step into Professor Mung Chang's mysterious office and solve engineering puzzles to escape before time runs out."
                imageSrc="/images/MungChang2.png"
                imageAlt="Mung Chang's Office escape room"
              />
              <RoomComingSoonCard
                title="Coming soon"
                description="Next room is in production."
                imageSrc="/images/NewRoom2.png"
                imageAlt="Escape room coming soon"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="border-t border-light-border px-5 py-20 dark:border-dark-border md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-light-text md:text-4xl dark:text-dark-text">
              Fastest teams
            </h2>
            <p className="mt-4 font-body text-xl leading-relaxed text-light-muted dark:text-dark-muted">
              Think you can beat the best? Check out today&apos;s top escape teams!
            </p>
            <Link
              href="/leaderboard"
              className="mt-8 inline-flex border-2 border-light-text px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-light-text transition-colors hover:bg-light-text hover:text-light-bg dark:border-dark-text dark:text-dark-text dark:hover:bg-dark-text dark:hover:text-dark-bg"
            >
              Open leaderboard
            </Link>
          </div>
        </section>
      </FadeIn>

      <section className="border-t border-light-border bg-light-gold px-5 py-16 dark:border-dark-border dark:bg-dark-gold">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
              Ready when we open
            </h2>
            <p className="mt-2 max-w-xl font-body text-white/90">
              Booking goes live with the room. Until then, get on the list and follow build updates.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex shrink-0 items-center justify-center border-2 border-white bg-white px-10 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] transition-colors hover:bg-transparent hover:text-white"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}
