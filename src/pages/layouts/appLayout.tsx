import { Header } from "@/components/surfaces/header";
import { Outlet } from "react-router";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col g-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
