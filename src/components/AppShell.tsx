import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export const AppShell = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-md min-h-screen relative pb-28">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};
