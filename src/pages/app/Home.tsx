import { Link } from "react-router-dom";
import { Bell, Sparkles, Flame, TrendingUp } from "lucide-react";
import { besties, icebreakers } from "@/data/mockData";
import { CompatRing } from "@/components/CompatRing";

const Home = () => {
  const top = besties.slice(0, 3);
  const featured = besties[0];
  return (
    <div className="px-5 pt-6 space-y-6 animate-fade-in">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Hey friend 👋</p>
          <h1 className="text-3xl font-extrabold">Today's vibes</h1>
        </div>
        <button className="relative w-11 h-11 rounded-2xl glass border border-white/60 shadow-soft flex items-center justify-center">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
        </button>
      </header>

      {/* Hero card: featured match */}
      <Link to="/app/discover" className="block">
        <div className="relative rounded-[2rem] gradient-warm p-6 shadow-float overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)] opacity-30" />
          <div className="relative flex items-center gap-4">
            <div className="relative">
              <img src={featured.avatar} alt={featured.name} className="w-20 h-20 rounded-3xl bg-white/40 shadow-glow" />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-soft">
                <Flame className="w-4 h-4 text-primary fill-primary" />
              </div>
            </div>
            <div className="flex-1 text-white">
              <p className="text-xs font-bold opacity-90 uppercase tracking-wider">Top match today</p>
              <p className="text-2xl font-extrabold">{featured.name}, {featured.age}</p>
              <p className="text-sm opacity-90 line-clamp-1">{featured.vibe} · {featured.distance} mi</p>
            </div>
            <CompatRing value={featured.compatibility} size={64} />
          </div>
        </div>
      </Link>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { l: "New matches", v: "12", icon: Sparkles, g: "gradient-secondary" },
          { l: "Chats", v: "3", icon: TrendingUp, g: "gradient-accent" },
          { l: "Vibe score", v: "94", icon: Flame, g: "gradient-sunset" },
        ].map((s, i) => (
          <div key={i} className="bg-card rounded-2xl p-3 shadow-soft">
            <div className={`w-8 h-8 rounded-xl ${s.g} flex items-center justify-center mb-2`}>
              <s.icon className="w-4 h-4 text-white" />
            </div>
            <p className="text-xl font-extrabold">{s.v}</p>
            <p className="text-[11px] text-muted-foreground font-bold">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Daily picks */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-extrabold">Daily picks for you</h2>
          <Link to="/app/discover" className="text-sm font-bold text-primary">See all</Link>
        </div>
        <div className="space-y-3">
          {top.map(b => (
            <Link key={b.id} to="/app/discover" className="block">
              <div className="bg-card rounded-3xl p-4 shadow-card flex items-center gap-3 hover:shadow-float transition-all hover:-translate-y-0.5">
                <img src={b.avatar} alt={b.name} className="w-14 h-14 rounded-2xl bg-muted" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-extrabold truncate">{b.name}, {b.age}</p>
                    {b.verified && <span className="text-[10px] font-bold gradient-accent text-white px-1.5 py-0.5 rounded-md">✓</span>}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{b.vibe} · {b.location}</p>
                </div>
                <CompatRing value={b.compatibility} size={48} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Icebreaker of the day */}
      <section className="rounded-3xl gradient-secondary p-5 shadow-card text-secondary-foreground">
        <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">Icebreaker of the day 🧊</p>
        <p className="text-lg font-extrabold leading-snug">{icebreakers[0]}</p>
      </section>
    </div>
  );
};

export default Home;
