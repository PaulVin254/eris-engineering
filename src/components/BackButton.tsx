"use client";

import { Button } from "@/components/ui/button";

export function BackButton() {
  return (
    <Button onClick={() => window.history.back()} variant="outline">
      Return to Previous Page
    </Button>
  );
}
