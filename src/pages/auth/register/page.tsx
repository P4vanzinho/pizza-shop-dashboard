import { Helmet } from "react-helmet-async";
import { SignUpForm } from "../../../components/forms/signUpForm";
import { DescriptionAuthForm } from "@/components/surfaces/descriptionAuthForm";
import { AuthNavLink } from "../../../components/navigation/authNavLink";

export function Register() {
  return (
    <>
      <Helmet title="Cadastro | Pizza Shop" />
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <AuthNavLink href="/login" text="Fazer login" />
          <DescriptionAuthForm
            title="Criar conta grátis"
            description="Seja um parceiro e comece suas vendas!"
          />
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
