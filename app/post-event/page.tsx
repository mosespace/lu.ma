"use client";

import { FormConfirmation } from "@/components/post-event-forms/form-confirmation";
import { PostEventFormFour } from "@/components/post-event-forms/post-event-form-four";
import { PostEventFormOne } from "@/components/post-event-forms/post-event-form-one";
import { PostEventFormThree } from "@/components/post-event-forms/post-event-form-three";
import { PostEventFormTwo } from "@/components/post-event-forms/post-event-form-two";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PostEvent() {
  const step = useSelector((state: any) => state.creatingEvent.step);
  const router = useRouter();

  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or step changes
    }
  }, [step, router]);

  function renderFormByStep(step: number) {
    switch (step) {
      case 1:
        return <PostEventFormOne />;
      case 2:
        return <PostEventFormTwo />;
      case 3:
        return <PostEventFormThree />;
      case 4:
        return <PostEventFormFour />;
      case 5:
        return <FormConfirmation />;
      default:
        return null;
    }
  }

  return <>{renderFormByStep(step)}</>;
}
