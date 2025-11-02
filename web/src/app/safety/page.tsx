export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-semibold">Safety & Principles</h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        SoulMatch v2 is a non-profit movement focused on meaningful, safe, and
        lasting friendships. Our philosophy: <em>Gem mobilen v?k, og v?r sammen
        som mennesker</em> ? put the phone away and be together as humans.
      </p>

      <h2 className="mb-2 text-xl font-semibold">Safety checklist</h2>
      <ul className="mb-6 list-inside list-disc text-zinc-700 dark:text-zinc-300">
        <li>Meet in public places for the first few meetups.</li>
        <li>Share your plan and live location with someone you trust.</li>
        <li>Set clear expectations and boundaries up front.</li>
        <li>Trust your intuition; you can always leave or say no.</li>
        <li>No pressure ? friendship takes time and consent.</li>
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Community guidelines</h2>
      <ul className="mb-6 list-inside list-disc text-zinc-700 dark:text-zinc-300">
        <li>Kindness and respect above everything.</li>
        <li>No harassment, discrimination, or romantic pressure.</li>
        <li>Be reliable: communicate clearly if plans change.</li>
        <li>Honor privacy: don't share others' info without consent.</li>
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Need help?</h2>
      <p className="text-zinc-700 dark:text-zinc-300">
        If something feels off or unsafe, stop and seek support. In emergencies
        call <strong>112</strong> in Denmark. For feedback or concerns about
        SoulMatch v2, contact the volunteers at
        <span className="whitespace-nowrap"> support@soulmatch.community</span>.
      </p>
    </div>
  );
}
