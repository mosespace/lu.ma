"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { Monitor, MoonStar, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  // Function to get the background color based on the current theme
  const getBackgroundColor = (buttonTheme: any) => {
    return theme === buttonTheme ? "bg-primary text-white" : ""; // Adjust the background color as needed
  };

  return (
    <div className='flex space-x-1'>
      <Button
        onClick={() => setTheme("dark")}
        variant='outline'
        className={`rounded-full ${getBackgroundColor("dark")} `}
        size='icon'
      >
        <MoonStar className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant='outline'
        className={`rounded-full ${getBackgroundColor("light")} `}
        size='icon'
      >
        <Sun className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => setTheme("system")}
        variant='outline'
        className={`rounded-full ${getBackgroundColor("system")} `}
        size='icon'
      >
        <Monitor className='h-4 w-4' />
      </Button>
    </div>
  );
}
