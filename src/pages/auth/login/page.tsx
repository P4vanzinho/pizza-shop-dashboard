import { Helmet } from "react-helmet-async";
import { SignInForm } from "../../../components/forms/signInForm";
import { DescriptionAuthForm } from "@/components/surfaces/descriptionAuthForm";
import { AuthNavLink } from "../../../components/navigation/authNavLink";

export function Login() {
  return (
    <>
      <Helmet title="Login | Pizza Shop" />
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <AuthNavLink href="/register" text="Novo estabelecimento" />
          <DescriptionAuthForm
            title="Acessar painel"
            description="Acompanhe suas vendas pelo painel do parceiro!"
          />
          <SignInForm />
        </div>
      </div>
    </>
  );
}
