import { useState } from "react";
import { chats, icebreakers, matches, type ChatMsg } from "@/data/mockData";
import { ArrowLeft, Send, Sparkles, Search } from "lucide-react";

const Chats = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [allChats, setAllChats] = useState(chats);
  const [draft, setDraft] = useState("");
  const open = allChats.find(c => c.bestie.id === openId);

  const send = (text?: string) => {
    const t = (text ?? draft).trim();
    if (!t || !open) return;
    const msg: ChatMsg = { id: Math.random().toString(), from: "me", text: t, time: "now" };
    setAllChats(cs => cs.map(c => c.bestie.id === open.bestie.id ? { ...c, messages: [...c.messages, msg], lastMessage: t, time: "now" } : c));
    setDraft("");
  };

  if (open) {
    return (
      <div className="flex flex-col h-screen pb-28">
        <header className="px-4 py-4 flex items-center gap-3 glass border-b border-white/60 sticky top-0 z-10">
          <button onClick={() => setOpenId(null)} aria-label="Back to chats list" className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-soft"><ArrowLeft className="w-5 h-5" /></button>
          <img src={open.bestie.avatar} alt={`${open.bestie.name}'s profile picture`} className="w-11 h-11 rounded-2xl bg-muted" />
          <div className="flex-1">
            <p className="font-extrabold flex items-center gap-1">{open.bestie.name} {open.bestie.verified && <span className="text-[10px] font-bold gradient-accent text-white px-1.5 py-0.5 rounded-md">✓</span>}</p>
            <p className="text-xs text-accent font-bold">● Active now</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          <div className="text-center text-xs text-muted-foreground font-bold pb-2">You matched 2 days ago 💕</div>
          {open.messages.map(m => (
            <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"} animate-fade-in`}>
              <div className={`max-w-[75%] px-4 py-2.5 rounded-3xl text-sm ${m.from === "me" ? "gradient-primary text-primary-foreground rounded-br-md shadow-soft" : "bg-card rounded-bl-md shadow-soft"}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {icebreakers.slice(0, 4).map(i => (
            <button key={i} onClick={() => send(i)} className="shrink-0 text-xs font-bold bg-card border border-border rounded-full px-3 py-1.5 hover:border-primary/40">{i}</button>
          ))}
        </div>

        <div className="px-4 pb-4 flex gap-2 items-center">
          <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Send a message..." aria-label="Message" className="flex-1 h-12 rounded-full bg-card border-2 border-border px-5 text-sm focus:border-primary focus:outline-none" />
          <button onClick={() => send()} aria-label="Send message" className="w-12 h-12 rounded-full gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-105 transition-transform">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 pt-6 space-y-5 animate-fade-in">
      <h1 className="text-3xl font-extrabold">Chats</h1>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input placeholder="Search besties" aria-label="Search besties" className="w-full h-12 pl-11 pr-4 rounded-full bg-card border-2 border-border text-sm focus:border-primary focus:outline-none" />
      </div>

      {/* New matches row */}
      <section>
        <p className="text-sm font-extrabold mb-3 flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> New matches</p>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {matches.map(m => (
            <button key={m.id} onClick={() => setOpenId(m.id)} className="shrink-0 text-center">
              <div className="relative">
                <div className="p-0.5 rounded-2xl gradient-warm">
                  <img src={m.avatar} alt={`${m.name}'s profile picture`} className="w-16 h-16 rounded-2xl bg-card" />
                </div>
              </div>
              <p className="text-xs font-bold mt-1.5 max-w-[64px] truncate">{m.name}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-sm font-extrabold">Messages</p>
        {allChats.map(c => (
          <button key={c.bestie.id} onClick={() => setOpenId(c.bestie.id)} className="w-full bg-card rounded-3xl p-3.5 shadow-soft flex items-center gap-3 hover:shadow-card transition-all">
            <img src={c.bestie.avatar} alt={`${c.bestie.name}'s profile picture`} className="w-14 h-14 rounded-2xl bg-muted" />
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between">
                <p className="font-extrabold truncate">{c.bestie.name}</p>
                <span className="text-[11px] text-muted-foreground font-bold">{c.time}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-muted-foreground truncate">{c.lastMessage}</p>
                {c.unread > 0 && <span className="text-[10px] font-extrabold gradient-primary text-primary-foreground rounded-full px-2 py-0.5">{c.unread}</span>}
              </div>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
};

export default Chats;
