import { Outlet, useLocation } from "react-router-dom";
import { BottomNav } from "./BottomNav";
import { SEO } from "./SEO";

const META: Record<string, { title: string; description: string }> = {
  "/app": {
    title: "Your BestieFinder home — today's matches & vibes",
    description: "See your top friend matches of the day, daily picks, and fresh icebreakers tailored to your vibe.",
  },
  "/app/discover": {
    title: "Discover new besties — swipe by vibe, not looks",
    description: "Swipe through friend matches based on personality, interests, and communication style. Real connection, no dating energy.",
  },
  "/app/chats": {
    title: "Chats — keep the convo going with your new friends",
    description: "Message your matches with built-in icebreakers that spark real conversations.",
  },
  "/app/groups": {
    title: "Friend groups & hangouts — plan IRL meetups",
    description: "Join friend groups and plan brunches, hikes, and movie nights with your new crew.",
  },
  "/app/profile": {
    title: "Your profile & vibe stats on BestieFinder",
    description: "Manage your BestieFinder profile, interests, privacy settings, and see your vibe stats.",
  },
};

export const AppShell = () => {
  const { pathname } = useLocation();
  const meta = META[pathname] ?? META["/app"];
  return (
    <div className="min-h-screen w-full">
      <SEO title={meta.title} description={meta.description} path={pathname} />
      <main className="mx-auto max-w-md min-h-screen relative pb-28">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
