import * as React from "react";

export const MessageLoading = () => {
  return (
    <div className="flex space-x-1 items-center h-4">
      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"></div>
    </div>
  );
};
