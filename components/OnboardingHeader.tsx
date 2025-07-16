import { Button, Progress, ProgressIndicator, YStack, XStack } from "tamagui";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type OnboardingHeaderProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const OnboardingHeader = ({
  currentStep,
  setCurrentStep,
}: OnboardingHeaderProps) => {
  const getProgress = (step: number) => {
    if (step <= 1) return 33;
    if (step === 2) return 66;
    return 100;
  };

  return (
    <YStack
      backgroundColor="#034337"
      paddingHorizontal={24}
      paddingVertical={24}
    >
      {/* Header row: Back button, logo, spacer */}
      <XStack alignItems="center" justifyContent="space-between" marginTop={8}>
        <YStack width={32} height={46} justifyContent="center">
          {currentStep > 1 ? (
            <Button
              unstyled
              onPress={() => setCurrentStep((step) => Math.max(1, step - 1))}
              width={40}
              height={40}
              alignItems="center"
              justifyContent="center"
            >
              <Ionicons name="chevron-back" size={32} color="#dbf1eb" />
            </Button>
          ) : (
            <YStack width={40} height={40} />
          )}
        </YStack>

        <YStack flex={1} alignItems="center" marginTop={32}>
          <MaterialCommunityIcons
            name="fruit-citrus"
            size={40}
            color="#f9da61"
          />
        </YStack>

        <YStack width={64} height={64} />
      </XStack>

      {/* Progress bar with gift icon */}
      <XStack
        alignItems="center"
        marginTop={16}
        gap={16}
        paddingHorizontal={16}
      >
        <Progress
          value={getProgress(currentStep)}
          max={100}
          flex={1}
          height={4}
          backgroundColor="#6f9a91"
        >
          <ProgressIndicator
            backgroundColor="#dbf1eb"
            borderRadius={999}
            height="100%"
          />
        </Progress>
        <MaterialCommunityIcons name="gift-outline" size={24} color="#dbf1eb" />
      </XStack>
    </YStack>
  );
};
