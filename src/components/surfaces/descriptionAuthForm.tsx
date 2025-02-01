interface DescriptionAuthFormProps {
  title: string;
  description: string;
}

export function DescriptionAuthForm({
  title,
  description,
}: DescriptionAuthFormProps) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tighter">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
