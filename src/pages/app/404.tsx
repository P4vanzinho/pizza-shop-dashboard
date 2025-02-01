import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Pagina nao encontrada</h1>
      <p className="text-accent-foreground">
        Voltar Para{" "}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          DashBoard
        </Link>
      </p>
    </div>
  );
}
