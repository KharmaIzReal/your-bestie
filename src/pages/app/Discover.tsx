import { useState } from "react";
import { besties, type Bestie } from "@/data/mockData";
import { Heart, X, Sparkles, MapPin, Music, Moon, Sun, Zap, Shield } from "lucide-react";
import { CompatRing } from "@/components/CompatRing";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const [stack, setStack] = useState<Bestie[]>(besties);
  const [matched, setMatched] = useState<Bestie | null>(null);
  const navigate = useNavigate();

  const top = stack[0];
  const swipe = (dir: "like" | "pass") => {
    if (!top) return;
    if (dir === "like" && Math.random() > 0.3) setMatched(top);
    setStack(s => s.slice(1));
  };

  if (!top) {
    return (
      <div className="px-5 pt-6 text-center space-y-4">
        <div className="w-20 h-20 rounded-3xl gradient-warm mx-auto flex items-center justify-center shadow-glow">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-extrabold">You've seen everyone for now ✨</h2>
        <p className="text-muted-foreground">Check back soon — fresh besties drop daily.</p>
        <button onClick={() => setStack(besties)} className="px-6 py-3 rounded-full gradient-primary text-primary-foreground font-extrabold shadow-glow">Reset stack</button>
      </div>
    );
  }

  return (
    <div className="px-5 pt-6 pb-4 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-extrabold">Discover</h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground glass border border-white/60 rounded-full px-3 py-1.5">
          <MapPin className="w-3.5 h-3.5" /> Within 10 mi
        </div>
      </div>

      <div className="relative h-[540px]">
        {stack.slice(0, 3).reverse().map((b, idx, arr) => {
          const isTop = idx === arr.length - 1;
          const offset = (arr.length - 1 - idx) * 8;
          return (
            <div key={b.id}
              className={`absolute inset-0 transition-all duration-500 ${isTop ? "animate-scale-in" : ""}`}
              style={{ transform: `translateY(${offset}px) scale(${1 - offset * 0.015})`, zIndex: idx }}>
              <BestieCard bestie={b} interactive={isTop} />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={() => swipe("pass")} className="w-16 h-16 rounded-full bg-card shadow-float flex items-center justify-center hover:scale-110 transition-transform border-2 border-muted">
          <X className="w-7 h-7 text-muted-foreground" strokeWidth={3} />
        </button>
        <button className="w-12 h-12 rounded-full gradient-secondary shadow-soft flex items-center justify-center hover:scale-110 transition-transform">
          <Sparkles className="w-5 h-5 text-white" />
        </button>
        <button onClick={() => swipe("like")} className="w-16 h-16 rounded-full gradient-primary shadow-glow flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow">
          <Heart className="w-7 h-7 text-white fill-white" strokeWidth={2.5} />
        </button>
      </div>

      {matched && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in" onClick={() => setMatched(null)}>
          <div className="bg-card rounded-[2rem] p-8 max-w-sm w-full text-center space-y-4 shadow-float animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="text-5xl animate-wiggle">💕</div>
            <h2 className="text-3xl font-extrabold text-gradient-warm">It's a match!</h2>
            <p className="text-muted-foreground">You and <b className="text-foreground">{matched.name}</b> liked each other. Say hi!</p>
            <div className="flex justify-center gap-3 py-2">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=you&backgroundColor=ffd5dc" className="w-20 h-20 rounded-3xl shadow-glow" />
              <img src={matched.avatar} className="w-20 h-20 rounded-3xl shadow-glow" />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setMatched(null)} className="flex-1 py-3 rounded-2xl bg-muted font-bold">Keep swiping</button>
              <button onClick={() => navigate("/app/chats")} className="flex-1 py-3 rounded-2xl gradient-primary text-primary-foreground font-extrabold shadow-soft">Send a message</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const BestieCard = ({ bestie, interactive }: { bestie: Bestie; interactive: boolean }) => {
  return (
    <div className={`relative w-full h-full rounded-[2rem] overflow-hidden shadow-float bg-card ${interactive ? "" : "pointer-events-none"}`}>
      <div className="absolute inset-0 gradient-warm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_30%,rgba(0,0,0,0.5))]" />
      <img src={bestie.avatar} alt={bestie.name} className="absolute top-10 left-1/2 -translate-x-1/2 w-44 h-44 rounded-[2rem] bg-white/30 shadow-glow" />

      <div className="absolute top-4 right-4">
        <CompatRing value={bestie.compatibility} size={56} />
      </div>
      {bestie.verified && (
        <div className="absolute top-4 left-4 flex items-center gap-1 glass rounded-full px-2.5 py-1 text-[11px] font-extrabold border border-white/60">
          <Shield className="w-3 h-3 text-accent" /> Verified
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-3">
        <div>
          <h3 className="text-3xl font-extrabold leading-tight">{bestie.name}, {bestie.age}</h3>
          <p className="text-sm opacity-90">{bestie.pronouns} · {bestie.location} · {bestie.distance} mi</p>
        </div>
        <p className="text-sm leading-snug opacity-95">{bestie.bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {bestie.interests.slice(0, 4).map(i => (
            <span key={i} className="text-[11px] font-bold glass border border-white/40 px-2.5 py-1 rounded-full text-foreground">{i}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs font-bold pt-1">
          <span className="flex items-center gap-1"><Music className="w-3.5 h-3.5" />{bestie.music[0]}</span>
          <span className="flex items-center gap-1">{bestie.sleepSchedule === "Night owl" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}{bestie.sleepSchedule}</span>
          <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" />Energy {bestie.socialEnergy}/5</span>
        </div>
      </div>
    </div>
  );
};

export default Discover;
