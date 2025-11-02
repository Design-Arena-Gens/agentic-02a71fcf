import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-120px)] max-w-6xl flex-col items-center justify-center gap-10 px-4 py-16">
      <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Build real friendships, not follower counts
        </h1>
        <p className="text-pretty text-lg text-zinc-600 dark:text-zinc-400">
          SoulMatch v2 helps people in Denmark meet compatible friends for
          real-world activities. Non-profit, safety-first, and designed to get
          you off your phone and into meaningful connection.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/onboarding"
            className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Get started ? 2 minutes
          </Link>
          <Link
            href="/safety"
            className="rounded-full border border-black/10 px-6 py-3 text-black transition hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            Safety & Principles
          </Link>
        </div>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-black/10 p-6 dark:border-white/15">
          <div className="mb-2 text-sm font-medium text-zinc-500">1</div>
          <h3 className="mb-2 text-lg font-semibold">Share who you are</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Interests, vibe, schedule, and what you want more of in life.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 p-6 dark:border-white/15">
          <div className="mb-2 text-sm font-medium text-zinc-500">2</div>
          <h3 className="mb-2 text-lg font-semibold">Get meaningful matches</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            We suggest small circles based on compatibility ? never endless
            swiping.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 p-6 dark:border-white/15">
          <div className="mb-2 text-sm font-medium text-zinc-500">3</div>
          <h3 className="mb-2 text-lg font-semibold">Meet IRL, safely</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Clear safety guidelines, consent, and simple tools to set up a
            first meetup.
          </p>
        </div>
      </div>

      <p className="text-xs text-zinc-500">
        "Gem mobilen v?k, og v?r sammen som mennesker"
      </p>
    </section>
  );
}
