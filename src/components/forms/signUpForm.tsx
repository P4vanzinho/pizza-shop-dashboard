import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import { signUpSchema } from "@/schemas/auth";
import { SignUpForm as SignUpFormType } from "@/types/auth";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigate();

  async function handleSignUp(data: SignUpFormType) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Seu restaurante foi cadastrado com sucesso!", {
      action: {
        label: "Login",
        onClick: () => navigate("/login"),
      },
    });
  }

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <div className="space-y-2">
        <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
        <Input id="restaurantName" {...register("restaurantName")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="managerName">Seu nome</Label>
        <Input id="managerName" {...register("managerName")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input id="email" type="email" {...register("email")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Seu celular</Label>
        <Input id="phone" {...register("phone")} />
      </div>
      <Button className="w-full" type="submit" disabled={isSubmitting}>
        Finalizar cadastro
      </Button>
    </form>
  );
}
