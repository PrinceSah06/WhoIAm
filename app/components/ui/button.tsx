import { cn } from "@/lib/utils";

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
  };

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary" && "bg-black text-white hover:-translate-y-0.5 hover:bg-neutral-800",
        variant === "secondary" &&
          "border border-neutral-300 bg-transparent hover:-translate-y-0.5 hover:bg-white",
        variant === "ghost" && "hover:bg-neutral-100",
        className,
      )}
      {...props}
    />
  );
}