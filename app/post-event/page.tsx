"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { PostEventFormOne } from "@/components/post-event-forms/post-event-form-one";
import { PostEventFormTwo } from "@/components/post-event-forms/post-event-form-two";
import { PostEventFormThree } from "@/components/post-event-forms/post-event-form-three";
import { PostEventFormFour } from "@/components/post-event-forms/post-event-form-four";
import { FormConfirmation } from "@/components/post-event-forms/form-confirmation";

const Page: React.FC = () => {
  const step = useSelector((state: any) => state.creatingEvent.step);
  const router = useRouter();

  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or step changes
    }
  }, [step, router]);

  function renderFormByStep(step: number) {
    if (step === 1) {
      return <PostEventFormOne />;
    } else if (step === 2) {
      return <PostEventFormTwo />;
    } else if (step === 3) {
      return <PostEventFormThree />;
    } else if (step === 4) {
      return <PostEventFormFour />;
    } else if (step === 5) {
      return <FormConfirmation />;
    }
  }

  return <>{renderFormByStep(step)}</>;
};

export default Page;
