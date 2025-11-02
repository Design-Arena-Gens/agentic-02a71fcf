"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { loadProfile, type UserProfile } from "@/lib/storage";
import { buildInviteText, getTopMatches, type ScoredCandidate } from "@/lib/matching";

export default function MatchPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setProfile(loadProfile());
  }, []);

  const matches = useMemo<ScoredCandidate[]>(() => {
    if (!profile) return [];
    return getTopMatches(profile, 8);
  }, [profile]);

  if (!profile) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold">No profile found</h1>
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          Please complete onboarding so we can suggest meaningful matches.
        </p>
        <Link
          className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/90"
          href="/onboarding"
        >
          Go to onboarding
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-semibold">Your matches</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Based on your interests, city, availability and language.
          </p>
        </div>
        <Link className="text-sm underline" href="/onboarding">
          Edit profile
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {matches.map((m) => (
          <article key={m.id} className="rounded-xl border border-black/10 p-5 dark:border-white/15">
            <div className="mb-1 text-sm text-zinc-500">Score {m.score}</div>
            <h3 className="text-lg font-semibold">
              {m.name}, {m.age} ? {m.city}
            </h3>
            <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">{m.intro}</p>
            <div className="mb-3 flex flex-wrap gap-2 text-xs">
              {m.reasons.map((r, idx) => (
                <span key={idx} className="rounded-full border border-black/10 px-2 py-0.5 dark:border-white/15">
                  {r}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={async () => {
                  const text = buildInviteText(profile, m);
                  await navigator.clipboard.writeText(text);
                  setCopiedId(m.id);
                  setTimeout(() => setCopiedId((id) => (id === m.id ? null : id)), 2000);
                }}
                className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                {copiedId === m.id ? "Copied!" : "Copy intro message"}
              </button>
              <button
                onClick={() => alert("For privacy, messaging happens off-platform. Paste your intro where you prefer.")}
                className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              >
                How to reach out
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-emerald-500/30 bg-emerald-50 p-5 text-emerald-900 dark:border-emerald-400/30 dark:bg-emerald-950/30 dark:text-emerald-200">
        <h4 className="mb-1 font-medium">Safety first</h4>
        <ul className="list-inside list-disc text-sm opacity-90">
          <li>Meet in public places for the first time.</li>
          <li>Share your plan with a friend or family member.</li>
          <li>Trust your intuition; you can always say no.</li>
        </ul>
        <Link href="/safety" className="mt-2 inline-block text-sm underline">
          Read full safety checklist
        </Link>
      </div>
    </div>
  );
}
