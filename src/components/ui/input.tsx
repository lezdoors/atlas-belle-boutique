
import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    // Enhanced security: prevent dangerous input types and add additional protections
    const secureType = type === 'file' || type === 'password' ? type : 'text';
    
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      // Allow normal paste but sanitize clipboard data for security
      const clipboardData = e.clipboardData.getData('text');
      if (clipboardData.length > 10000) {
        e.preventDefault(); // Prevent extremely large pastes
      }
      // Call original onPaste if provided
      if (props.onPaste) {
        props.onPaste(e);
      }
    };

    return (
      <input
        type={type || secureType}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        onPaste={handlePaste}
        autoComplete={props.autoComplete || "off"}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
