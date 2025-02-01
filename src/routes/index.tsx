import { Route } from "react-router";
import { DashboardLayout } from "../pages/layouts/appLayout";
import { AuthLayout } from "@/pages/layouts/authLayout";
import { Dashboard } from "@/pages/app/dashboard/dashboard";
import { Login } from "@/pages/auth/login/page";
import { Register } from "@/pages/auth/register/page";
import { Orders } from "@/pages/app/orders/orders";
import { NotFound } from "@/pages/app/404";

export const routes = (
  <Route>
    <Route element={<DashboardLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
    </Route>

    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    {/* Rota 404 - deve estar fora dos layouts e pegar qualquer caminho não definido */}
    <Route path="*" element={<NotFound />} />
  </Route>
);
