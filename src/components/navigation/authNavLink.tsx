import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface AuthNavLinkProps {
  text: string;
  href: string;
}

export function AuthNavLink({ text, href }: AuthNavLinkProps) {
  return (
    <Button asChild className="absolute right-8 top-8" variant="ghost">
      <Link to={href} className="no-underline">
        {text}
      </Link>
    </Button>
  );
}
