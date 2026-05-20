import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Users, Shield, MessageCircle, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";

const features = [
  { icon: Sparkles, title: "Vibe-based matching", desc: "A playful quiz pairs you with people who actually get you.", grad: "gradient-warm" },
  { icon: Heart, title: "Mutual likes only", desc: "No awkward DMs. You both have to be down to connect.", grad: "gradient-secondary" },
  { icon: MessageCircle, title: "Icebreakers built in", desc: "Skip the “heyy 😅” with prompts that spark real convos.", grad: "gradient-accent" },
  { icon: Users, title: "Friend groups & hangouts", desc: "Plan brunches, hikes and movie nights with your new crew.", grad: "gradient-sunset" },
  { icon: Shield, title: "Safety first", desc: "Verified badges, easy reporting, and full privacy controls.", grad: "gradient-sky" },
  { icon: MapPin, title: "Discover nearby", desc: "Optional location matching with the privacy you control.", grad: "gradient-primary" },
];

const Landing = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <SEO
        title="BestieFinder — Find your person, not just a profile"
        description="BestieFinder matches you with new friends based on personality, interests, and vibe. Real friendships, no dating app energy."
        path="/"
      />
      {/* Nav */}
      <header className="px-5 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl gradient-warm shadow-glow flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-lg tracking-tight">BestieFinder</span>
        </div>
        <Link to="/app">
          <Button size="sm" className="rounded-full gradient-primary text-primary-foreground border-0 shadow-soft hover:shadow-glow">Open app</Button>
        </Link>
      </header>

      {/* Hero */}
      <section className="relative px-5 pt-8 pb-16 max-w-6xl mx-auto">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full gradient-warm opacity-30 blur-3xl" />
        <div className="absolute -top-10 right-0 w-72 h-72 rounded-full gradient-sky opacity-30 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full glass border border-white/60 px-4 py-1.5 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Friendship, finally fun
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Find your <span className="text-gradient-warm">person</span>,<br/> not just a profile.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              BestieFinder matches you with new friends based on personality, interests, and vibe — no dating app energy, just real connection.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/onboarding">
                <Button size="lg" className="rounded-full h-14 px-8 gradient-primary text-primary-foreground border-0 text-base shadow-glow hover:scale-105 transition-transform">
                  Make me a profile ✨
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-2 text-base bg-white/60">
                  Peek the app
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div><b className="text-foreground text-xl">2M+</b> friendships sparked</div>
              <div><b className="text-foreground text-xl">4.9★</b> avg rating</div>
              <div><b className="text-foreground text-xl">120+</b> cities</div>
            </div>
          </div>

          {/* Hero phone mock */}
          <div className="relative flex justify-center animate-slide-up">
            <div className="relative w-[300px] h-[600px] rounded-[3rem] gradient-warm p-3 shadow-float animate-float">
              <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden relative">
                <div className="absolute inset-0 gradient-sunset opacity-20" />
                <div className="relative p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Hey friend 👋</p>
                      <p className="font-extrabold text-xl">Today's matches</p>
                    </div>
                    <div className="w-10 h-10 rounded-full gradient-secondary" />
                  </div>
                  {[
                    { n: "Maya", v: "Cozy bookworm", c: 96, g: "gradient-warm" },
                    { n: "Lena", v: "Soft + creative", c: 94, g: "gradient-secondary" },
                    { n: "Jordan", v: "Chill creative", c: 92, g: "gradient-accent" },
                  ].map((m, i) => (
                    <div key={i} className="bg-card rounded-3xl p-4 shadow-card flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${m.g}`} />
                      <div className="flex-1">
                        <p className="font-bold text-sm">{m.n}</p>
                        <p className="text-xs text-muted-foreground">{m.v}</p>
                      </div>
                      <div className="text-xs font-extrabold text-primary">{m.c}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-20 bg-card rounded-2xl shadow-float p-3 flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
              <Heart className="w-4 h-4 fill-primary text-primary" />
              <span className="text-xs font-bold">It's a match!</span>
            </div>
            <div className="absolute -left-4 bottom-32 bg-card rounded-2xl shadow-float p-3 animate-float" style={{ animationDelay: "2s" }}>
              <span className="text-xs font-bold">"matcha date sat?? ☕"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold">Built for <span className="text-gradient-sunset">real</span> friendships</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">All the good parts of meeting someone new — minus the cringe.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="bg-card rounded-3xl p-6 shadow-card hover:shadow-float transition-all hover:-translate-y-1 duration-300">
              <div className={`w-12 h-12 rounded-2xl ${f.grad} flex items-center justify-center mb-4 shadow-soft`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-extrabold text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 max-w-6xl mx-auto">
        <div className="relative rounded-[2.5rem] gradient-warm p-10 md:p-16 text-center overflow-hidden shadow-float">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_50%)] opacity-30" />
          <div className="relative space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white">Your bestie is one swipe away.</h2>
            <p className="text-white/90 max-w-md mx-auto">Join the community redefining what friendship feels like in 2026.</p>
            <Link to="/onboarding">
              <Button size="lg" className="rounded-full h-14 px-10 bg-white text-foreground hover:bg-white/90 text-base font-extrabold shadow-glow">
                Get started — it's free
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">© 2026 BestieFinder · Made with 💕</p>
      </section>
    </div>
  );
};

export default Landing;
