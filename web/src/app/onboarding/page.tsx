"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveProfile, loadProfile, type UserProfile } from "@/lib/storage";
import { AVAILABILITY, INTERESTS, LANGUAGES } from "@/lib/matching";

export default function OnboardingPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: null,
    city: "Copenhagen",
    languages: ["Dansk"],
    interests: [],
    availability: ["weekday evenings"],
    intro: "",
  });

  useEffect(() => {
    const existing = loadProfile();
    if (existing) setProfile(existing);
  }, []);

  const canContinue =
    profile.name.trim().length >= 2 &&
    profile.city.trim().length > 0 &&
    profile.interests.length > 0 &&
    profile.languages.length > 0 &&
    profile.availability.length > 0;

  function toggleArrayValue<T extends string>(arr: T[], value: T): T[] {
    return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
  }

  function submit() {
    if (!canContinue) return;
    saveProfile(profile);
    router.push("/match");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Tell us about you</h1>
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        We use this only on your device to suggest meaningful, safe matches. You
        can change it anytime.
      </p>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 dark:border-white/15 dark:bg-black"
            placeholder="Your first name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium">Age</label>
            <input
              type="number"
              min={16}
              max={120}
              className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 dark:border-white/15 dark:bg-black"
              placeholder="e.g. 26"
              value={profile.age ?? ""}
              onChange={(e) =>
                setProfile({ ...profile, age: e.target.value ? Number(e.target.value) : null })
              }
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">City</label>
            <input
              className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 dark:border-white/15 dark:bg-black"
              placeholder="e.g. Copenhagen"
              value={profile.city}
              onChange={(e) => setProfile({ ...profile, city: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Languages</label>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setProfile({ ...profile, languages: toggleArrayValue(profile.languages, lang) })}
                  className={`rounded-full border px-3 py-1 text-sm transition ${
                    profile.languages.includes(lang)
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                      : "border-black/10 bg-white text-black hover:bg-black/5 dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white/10"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Interests</label>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setProfile({ ...profile, interests: toggleArrayValue(profile.interests, i) })}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  profile.interests.includes(i)
                    ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                    : "border-black/10 bg-white text-black hover:bg-black/5 dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white/10"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Availability</label>
          <div className="flex flex-wrap gap-2">
            {AVAILABILITY.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setProfile({ ...profile, availability: toggleArrayValue(profile.availability, a) })}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  profile.availability.includes(a)
                    ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                    : "border-black/10 bg-white text-black hover:bg-black/5 dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white/10"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Short intro</label>
          <textarea
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/20 dark:border-white/15 dark:bg-black"
            placeholder="A sentence about what you're looking for or enjoy"
            rows={3}
            value={profile.intro}
            onChange={(e) => setProfile({ ...profile, intro: e.target.value })}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-zinc-500">Data stays on your device only.</p>
          <button
            disabled={!canContinue}
            onClick={submit}
            className="rounded-full bg-black px-6 py-3 text-white transition enabled:hover:bg-black/85 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:enabled:hover:bg-white/90"
          >
            See my matches
          </button>
        </div>
      </div>
    </div>
  );
}
