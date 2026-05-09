import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "whatsapp"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {

    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark",
      secondary: "bg-secondary text-white hover:bg-secondary-dark",
      accent: "bg-accent text-white hover:bg-accent-dark",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "hover:bg-gray-100 text-gray-700",
      whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E]",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5",
      lg: "px-8 py-3 text-lg font-semibold",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
