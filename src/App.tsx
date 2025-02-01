import { Routes } from "react-router";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/themeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet title="%s" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <Routes>{routes}</Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
