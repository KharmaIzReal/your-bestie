import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Sparkles, Check } from "lucide-react";
import { quizQuestions } from "@/data/mockData";
import { SEO } from "@/components/SEO";

const interests = ["Matcha","Thrifting","Yoga","Hiking","Anime","Concerts","Reading","Baking","Photography","Gaming","Pilates","Coffee","Travel","Karaoke","Art","Plants","Skating","Cooking","Movies","F1"];
const goals = ["Brunch buddy","Workout partner","Travel buddy","Deep convos","Concert plus-one","Game nights","Cafe hopping","Just vibes"];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("23");
  const [pronouns, setPronouns] = useState("she/her");
  const [bio, setBio] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [pickedGoals, setPickedGoals] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const toggle = (arr: string[], setArr: (v: string[]) => void, v: string) =>
    setArr(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);

  const next = () => step < totalSteps - 1 ? setStep(step + 1) : navigate("/app");
  const back = () => step > 0 ? setStep(step - 1) : navigate("/");

  return (
    <div className="min-h-screen w-full">
      <SEO
        title="Create your BestieFinder profile — vibe-based onboarding"
        description="Set up your BestieFinder profile in minutes. Share your vibe, interests, and goals so we can match you with friends who actually get you."
        path="/onboarding"
      />
      <main className="mx-auto max-w-md min-h-screen px-5 py-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon" onClick={back} aria-label="Go back" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm font-bold text-muted-foreground">{step + 1} / {totalSteps}</span>
          <div className="w-10" />
        </div>

        {/* Progress */}
        <div className="h-2 rounded-full bg-muted overflow-hidden mb-8">
          <div className="h-full gradient-primary transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
        </div>

        <div className="flex-1 animate-fade-in" key={step}>
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <div className="w-16 h-16 rounded-3xl gradient-warm shadow-glow flex items-center justify-center mb-4 animate-float">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold mb-2">Hey! Let's start with the basics 👋</h1>
                <p className="text-muted-foreground">Tell us who you are.</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="onboarding-name" className="text-sm font-bold mb-1.5 block">Name</label>
                  <Input id="onboarding-name" value={name} onChange={e => setName(e.target.value)} placeholder="What should friends call you?" className="h-14 rounded-2xl bg-card border-2" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="onboarding-age" className="text-sm font-bold mb-1.5 block">Age</label>
                    <Input id="onboarding-age" value={age} onChange={e => setAge(e.target.value)} className="h-14 rounded-2xl bg-card border-2" />
                  </div>
                  <div>
                    <label htmlFor="onboarding-pronouns" className="text-sm font-bold mb-1.5 block">Pronouns</label>
                    <Input id="onboarding-pronouns" value={pronouns} onChange={e => setPronouns(e.target.value)} className="h-14 rounded-2xl bg-card border-2" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-extrabold mb-2">Your bio era ✍️</h1>
                <p className="text-muted-foreground">Give people a feel for who you are.</p>
              </div>
              <Textarea value={bio} onChange={e => setBio(e.target.value)} rows={6} placeholder="Plant mom 🌿 always down for matcha walks & deep convos at 2am..." className="rounded-3xl bg-card border-2 text-base" />
              <div className="bg-card/60 rounded-2xl p-4 text-sm text-muted-foreground">
                💡 Tip: 1-2 sentences + an emoji or two = perfect.
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-extrabold mb-2">Pick your interests 💫</h1>
                <p className="text-muted-foreground">Choose at least 3. We'll match you with kindred spirits.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map(i => {
                  const on = picked.includes(i);
                  return (
                    <button key={i} onClick={() => toggle(picked, setPicked, i)}
                      className={`px-4 py-2.5 rounded-full text-sm font-bold border-2 transition-all ${on ? "gradient-primary text-primary-foreground border-transparent shadow-glow scale-105" : "bg-card border-border hover:border-primary/40"}`}>
                      {i}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-extrabold mb-2">Quick vibe check 🎯</h1>
                <p className="text-muted-foreground">Answer a few playful Qs so we can find your people.</p>
              </div>
              <div className="space-y-5">
                {quizQuestions.map((q, idx) => (
                  <div key={idx} className="bg-card rounded-3xl p-5 shadow-soft">
                    <p className="font-bold mb-3">{q.q}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map(o => {
                        const on = quizAnswers[idx] === o;
                        return (
                          <button key={o} onClick={() => setQuizAnswers({ ...quizAnswers, [idx]: o })}
                            className={`text-left text-sm p-3 rounded-2xl border-2 transition-all ${on ? "gradient-secondary text-secondary-foreground border-transparent shadow-soft" : "bg-muted/40 border-transparent hover:border-secondary/40"}`}>
                            {o}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-extrabold mb-2">What are you looking for? 💕</h1>
                <p className="text-muted-foreground">Pick the kinds of friendship you want.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {goals.map(i => {
                  const on = pickedGoals.includes(i);
                  return (
                    <button key={i} onClick={() => toggle(pickedGoals, setPickedGoals, i)}
                      className={`px-4 py-2.5 rounded-full text-sm font-bold border-2 transition-all ${on ? "gradient-accent text-accent-foreground border-transparent shadow-soft scale-105" : "bg-card border-border hover:border-accent/40"}`}>
                      {on && <Check className="w-3.5 h-3.5 inline mr-1" />}{i}
                    </button>
                  );
                })}
              </div>
              <div className="bg-card rounded-3xl p-5 shadow-soft mt-8">
                <p className="text-sm font-bold mb-1">You're all set ✨</p>
                <p className="text-sm text-muted-foreground">We've already lined up 12 high-compatibility besties for you.</p>
              </div>
            </div>
          )}
        </div>

        <Button onClick={next} size="lg" className="w-full h-14 rounded-2xl gradient-primary text-primary-foreground border-0 text-base font-extrabold shadow-glow mt-6">
          {step === totalSteps - 1 ? "Find my besties 🎉" : "Continue"} <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </main>
    </div>
  );
};

export default Onboarding;
