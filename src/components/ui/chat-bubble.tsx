import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const chatBubbleVariant = cva(
  "flex gap-2.5 max-w-[80%] items-end relative group",
  {
    variants: {
      variant: {
        received: "self-start",
        sent: "self-end flex-row-reverse",
      },
      layout: {
        default: "",
        ai: "max-w-full w-full items-center",
      },
    },
    defaultVariants: {
      variant: "received",
      layout: "default",
    },
  }
);

interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariant> {}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant, layout, children, ...props }, ref) => (
    <div
      className={cn(chatBubbleVariant({ variant, layout, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);
ChatBubble.displayName = "ChatBubble";

const ChatBubbleAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  React.ComponentPropsWithoutRef<typeof Avatar> & {
    src?: string;
    fallback?: string;
  }
>(({ className, src, fallback, ...props }, ref) => (
  <Avatar className={cn("h-8 w-8", className)} ref={ref} {...props}>
    {src && <AvatarImage src={src} />}
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
));
ChatBubbleAvatar.displayName = "ChatBubbleAvatar";

const chatBubbleMessageVariants = cva("p-3 rounded-2xl text-sm", {
  variants: {
    variant: {
      received: "bg-muted text-foreground rounded-bl-none",
      sent: "bg-primary text-primary-foreground rounded-br-none",
    },
    isLoading: {
      true: "py-4 px-5",
    },
  },
  defaultVariants: {
    variant: "received",
  },
});

interface ChatBubbleMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleMessageVariants> {
  isLoading?: boolean;
}

const ChatBubbleMessage = React.forwardRef<
  HTMLDivElement,
  ChatBubbleMessageProps
>(({ className, variant, isLoading, children, ...props }, ref) => (
  <div
    className={cn(chatBubbleMessageVariants({ variant, isLoading, className }))}
    ref={ref}
    {...props}
  >
    {isLoading ? (
      <div className="flex items-center space-x-1">
        <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
        <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
        <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
      </div>
    ) : (
      children
    )}
  </div>
));
ChatBubbleMessage.displayName = "ChatBubbleMessage";

const ChatBubbleTimestamp = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { timestamp: string }
>(({ className, timestamp, ...props }, ref) => (
  <span
    className={cn("text-xs text-muted-foreground select-none", className)}
    ref={ref}
    {...props}
  >
    {timestamp}
  </span>
));
ChatBubbleTimestamp.displayName = "ChatBubbleTimestamp";

export {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
  chatBubbleVariant,
  chatBubbleMessageVariants,
};
