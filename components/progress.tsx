"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function ProgressTracker() {
  // const [progress, setProgress] = React.useState(13);

  const step = useSelector((state: RootState) => state.form.step);
  const totalSteps = 4; // Total number of steps in the form

  const progress = (step / totalSteps) * 100; // Calculate progress percentage

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(10), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return <Progress value={progress} className='w-[20%]' />;
}
