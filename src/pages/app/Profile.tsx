import { Settings, Shield, Bell, MapPin, Eye, Palette, LogOut, Edit3, Sparkles } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [showSettings, setShowSettings] = useState(false);
  const interests = ["Streetwear", "Vinyl", "Graffiti", "Cyphers", "Thrift flips"];
  const goals = ["Cypher crew", "Late-night convos", "Show buddy"];

  return (
    <div className="animate-fade-in">
      {/* Banner */}
      <div className="relative h-44 gradient-warm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)] opacity-30" />
        <button onClick={() => setShowSettings(true)} aria-label="Open settings" className="absolute top-4 right-4 w-11 h-11 rounded-2xl glass border border-white/60 shadow-soft flex items-center justify-center">
          <Settings className="w-5 h-5" />
        </button>
        <button aria-label="Edit profile" className="absolute top-4 right-20 w-11 h-11 rounded-2xl glass border border-white/60 shadow-soft flex items-center justify-center">
          <Edit3 className="w-5 h-5" />
        </button>
      </div>

      <div className="px-5 -mt-12 space-y-5">
        <div className="flex items-end gap-4">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=you&backgroundColor=ffd5dc" alt="Your profile picture" className="w-24 h-24 rounded-3xl bg-card border-4 border-card shadow-float" />
          <div className="pb-2">
            <div className="flex items-center gap-1.5">
              <h1 className="text-2xl font-extrabold">Riley</h1>
              <span className="text-[10px] font-extrabold gradient-accent text-white px-1.5 py-0.5 rounded-md">✓ Verified</span>
            </div>
            <p className="text-sm text-muted-foreground">she/her · 24 · Brooklyn</p>
          </div>
        </div>

        <p className="text-sm">Cozy creative ✨ matcha, mixtapes & meandering walks. Looking for friends who love a good 2am convo.</p>

        {/* Vibe stats */}
        <div className="bg-card rounded-3xl p-4 shadow-card grid grid-cols-3 divide-x divide-border">
          <Stat label="Vibe score" value="94" />
          <Stat label="Matches" value="38" />
          <Stat label="Hangouts" value="12" />
        </div>

        <Section title="Interests">
          <div className="flex flex-wrap gap-2">
            {interests.map(i => <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold gradient-secondary text-secondary-foreground shadow-soft">{i}</span>)}
          </div>
        </Section>

        <Section title="Looking for">
          <div className="flex flex-wrap gap-2">
            {goals.map(i => <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold gradient-accent text-accent-foreground shadow-soft">{i}</span>)}
          </div>
        </Section>

        <Section title="My vibe">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Mini label="Sleep" value="🌙 Night owl" />
            <Mini label="Energy" value="⚡ 3/5" />
            <Mini label="Music" value="🎶 Indie / Folk" />
            <Mini label="Pets" value="🐱 Two cats" />
          </div>
        </Section>

        <Section title="Theme">
          <div className="flex gap-3">
            {["gradient-warm","gradient-secondary","gradient-accent","gradient-sunset","gradient-sky"].map(g => (
              <button key={g} aria-label={`Select ${g.replace("gradient-", "")} theme`} className={`w-12 h-12 rounded-2xl ${g} shadow-soft hover:scale-110 transition-transform`} />
            ))}
          </div>
        </Section>
      </div>

      {showSettings && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-end" onClick={() => setShowSettings(false)}>
          <div className="w-full max-w-md mx-auto bg-background rounded-t-[2rem] p-6 space-y-2 animate-slide-up shadow-float" onClick={e => e.stopPropagation()}>
            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold mb-3">Settings</h2>
            {[
              { icon: Bell, label: "Notifications", desc: "Matches, messages, hangouts" },
              { icon: MapPin, label: "Location & discovery", desc: "Show me to people within 10 mi" },
              { icon: Eye, label: "Privacy", desc: "Who can see my profile" },
              { icon: Shield, label: "Safety center", desc: "Block, report, and verify" },
              { icon: Palette, label: "Appearance", desc: "Theme & accent" },
              { icon: Sparkles, label: "Retake vibe quiz" },
            ].map((s, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-muted/60 text-left transition-colors">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"><s.icon className="w-5 h-5 text-primary" /></div>
                <div className="flex-1">
                  <p className="font-bold">{s.label}</p>
                  {s.desc && <p className="text-xs text-muted-foreground">{s.desc}</p>}
                </div>
              </button>
            ))}
            <button className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-destructive/10 text-destructive text-left">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center"><LogOut className="w-5 h-5" /></div>
              <p className="font-bold">Log out</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center px-2">
    <p className="text-2xl font-extrabold text-gradient-warm">{value}</p>
    <p className="text-[11px] text-muted-foreground font-bold">{label}</p>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-sm font-extrabold mb-2">{title}</h2>
    {children}
  </section>
);

const Mini = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-card rounded-2xl p-3 shadow-soft">
    <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">{label}</p>
    <p className="font-extrabold text-sm mt-0.5">{value}</p>
  </div>
);

export default Profile;
