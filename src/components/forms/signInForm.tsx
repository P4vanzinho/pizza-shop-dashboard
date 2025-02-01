import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/auth";
import { SignInForm as SignInFormType } from "@/types/auth";

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  });

  async function handleSignIn(data: SignInFormType) {
    //simulacao de request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Enviamos um link de autenticação para seu e-mail!", {
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data),
      },
    });
  }

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input id="email" type="email" {...register("email")} />
      </div>
      <Button className="w-full" type="submit" disabled={isSubmitting}>
        Acessar painel
      </Button>
    </form>
  );
}
