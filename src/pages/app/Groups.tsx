import { groups, besties } from "@/data/mockData";
import { Plus, Calendar, MapPin, Users } from "lucide-react";

const Groups = () => {
  return (
    <div className="px-5 pt-6 space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">Groups</h1>
        <button className="w-11 h-11 rounded-2xl gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-105 transition-transform">
          <Plus className="w-5 h-5" strokeWidth={3} />
        </button>
      </div>

      {/* Upcoming hangout */}
      <div className="rounded-[2rem] gradient-sunset p-6 shadow-float text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,white,transparent_60%)] opacity-20" />
        <div className="relative space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider opacity-90">Next hangout</p>
          <h2 className="text-2xl font-extrabold leading-tight">Brunch + bookshop crawl 🥐📚</h2>
          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Sat, 11am</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Williamsburg</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <div className="flex -space-x-2">
              {besties.slice(0, 4).map(b => (
                <img key={b.id} src={b.avatar} className="w-8 h-8 rounded-full border-2 border-white bg-white/30" />
              ))}
            </div>
            <span className="text-xs font-extrabold">+4 going</span>
          </div>
          <button className="w-full mt-2 py-3 rounded-2xl bg-white text-foreground font-extrabold shadow-soft">I'm in 🙌</button>
        </div>
      </div>

      <section>
        <p className="text-sm font-extrabold mb-3">Your groups</p>
        <div className="space-y-3">
          {groups.map(g => (
            <div key={g.id} className="bg-card rounded-3xl p-4 shadow-card hover:shadow-float transition-all hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl ${g.color} flex items-center justify-center text-2xl shadow-soft`}>{g.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold truncate">{g.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5"><Users className="w-3 h-3" /> {g.members} members</p>
                </div>
              </div>
              <div className="mt-3 bg-muted/40 rounded-2xl p-3 text-xs font-bold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" /> {g.nextHangout}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm font-extrabold mb-3">Discover groups near you</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { n: "Sunset Picnic Crew", e: "🧺", g: "gradient-warm" },
            { n: "Vinyl Diggers", e: "🎶", g: "gradient-secondary" },
          ].map((g, i) => (
            <button key={i} className="bg-card rounded-3xl p-4 shadow-soft text-left hover:shadow-card transition-all">
              <div className={`w-12 h-12 rounded-2xl ${g.g} flex items-center justify-center text-xl mb-2`}>{g.e}</div>
              <p className="font-extrabold text-sm">{g.n}</p>
              <p className="text-xs text-muted-foreground">Join →</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Groups;
