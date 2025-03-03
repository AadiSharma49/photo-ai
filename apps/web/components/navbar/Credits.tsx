"use client";

import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useCredits } from "@/hooks/use-credits";

export function Credits() {
  const { credits, loading } = useCredits();
  const router = useRouter();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 h-9 px-4 py-2"
          disabled={loading} // Disable button during loading
          aria-label={loading ? "Loading credits" : "Credits menu"} // Accessibility improvement
        >
          {loading ? (
            <Loader2 
              className="h-4 w-4 animate-spin" 
              aria-hidden="true" // Add aria-hidden for screen readers
            />
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true" // Add aria-hidden for decorative icon
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span className="font-medium">
                {credits?.toLocaleString() ?? 0} Credits
              </span>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[12rem]" // Use min-width instead of fixed width
        sideOffset={8} // Add spacing from trigger
      >
        <DropdownMenuItem
          className="flex items-center justify-between cursor-pointer hover:bg-accent focus:bg-accent" // Better hover/focus states
          onSelect={() => router.push("/pricing")} // Use onSelect instead of onClick
          role="button" // Explicit role declaration
          aria-label="Add credits" // Accessibility label
        >
          <span>Add Credits</span>
          <Plus 
            className="h-4 w-4" 
            aria-hidden="true" // Add aria-hidden for decorative icon
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}