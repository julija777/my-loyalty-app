import React, { useState } from "react";
import { OnboardingHeader } from "@/components/OnboardingHeader";
import FirstOnboardingScreen from "../../screens/OnboardingScreens/FirstOnboardingScreen";
import SecondOnboardingScreen from "../../screens/OnboardingScreens/SecondOnboardingScreen";
import ThirdOnboardingScreen from "../../screens/OnboardingScreens/ThirdOnboardingScreen";
import { View, Button } from "react-native";

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FirstOnboardingScreen />;
      case 2:
        return <SecondOnboardingScreen />;
      case 3:
        return <ThirdOnboardingScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <OnboardingHeader currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <View style={{ flex: 1 }}>{renderStep()}</View>
        <Button
          title={currentStep === 3 ? "Finish" : "Next"}
          onPress={() => setCurrentStep((step) => Math.min(3, step + 1))}
        />
    </View>
  );
}
