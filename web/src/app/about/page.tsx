export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-semibold">About SoulMatch v2</h1>
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">
        SoulMatch v2 is a technology-assisted, community-powered movement to
        reduce loneliness among young adults (16?35) in Denmark by facilitating
        safe, meaningful friendships in the real world.
      </p>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        We avoid the engagement traps of social media. No endless feeds, no
        swiping ? just thoughtful matches and gentle prompts to meet offline.
      </p>

      <h2 className="mb-2 text-xl font-semibold">How it works</h2>
      <ol className="mb-6 list-inside list-decimal text-zinc-700 dark:text-zinc-300">
        <li>Share a short profile that stays on your device.</li>
        <li>See small, compatible circles near you.</li>
        <li>Use our safety-first checklist to meet in person.</li>
      </ol>

      <h2 className="mb-2 text-xl font-semibold">Non-profit promise</h2>
      <p className="mb-6 text-zinc-700 dark:text-zinc-300">
        SoulMatch v2 is volunteer-driven. We do not sell data or run ads. Any
        funding supports outreach, venues, and moderation.
      </p>

      <h2 className="mb-2 text-xl font-semibold">Get involved</h2>
      <p className="text-zinc-700 dark:text-zinc-300">
        Want to help? We're seeking local hosts, moderators, and partner
        organizations. Reach us at
        <span className="whitespace-nowrap"> hello@soulmatch.community</span>.
      </p>
    </div>
  );
}
