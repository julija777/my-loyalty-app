import { OnboardingHeader } from "@/components/OnboardingHeader";
import React from "react";


type OnboardingScreenProps = {
  children: React.ReactNode;
  currentStep: number;
  withLemon?: boolean;
  stickyFooter?: boolean;
  buttonTitle: string;
  onButtonPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
};
const Onboarding = ({
  children,
  currentStep,
  withLemon = true,
  stickyFooter = false,
  buttonTitle,
  onButtonPress,
  isLoading = false,
  isDisabled = false,
}: OnboardingScreenProps) => {
  return (
    <>
      <OnboardingHeader currentStep={currentStep} />
      {children}
    </>
  );
};

export default Onboarding;
