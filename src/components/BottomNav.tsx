import { NavLink } from "react-router-dom";
import { Home, Sparkles, MessageCircle, Users, User } from "lucide-react";

const items = [
  { to: "/app", label: "Home", icon: Home, end: true },
  { to: "/app/discover", label: "Discover", icon: Sparkles },
  { to: "/app/chats", label: "Chats", icon: MessageCircle },
  { to: "/app/groups", label: "Groups", icon: Users },
  { to: "/app/profile", label: "Profile", icon: User },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-4 pb-3">
        <div className="glass shadow-float rounded-full border border-white/60 px-2 py-2 flex items-center justify-between">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex-1 flex flex-col items-center gap-0.5 py-2 rounded-full transition-all duration-300 ${
                  isActive ? "gradient-primary text-primary-foreground shadow-glow scale-105" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <Icon className="w-5 h-5" strokeWidth={2.4} />
              <span className="text-[10px] font-bold tracking-wide">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
