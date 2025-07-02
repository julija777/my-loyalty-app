import { router } from 'expo-router';
import { Button, Progress, ProgressIndicator } from 'tamagui';
import { YStack, XStack, Stack } from 'tamagui';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


type OnboardingHeaderProps = {
  currentStep: number;
};

export const OnboardingHeader = ({ currentStep }: OnboardingHeaderProps) => {
  const getProgress = (step: number) => {
    if (step <= 0) {
      return 33;
    }
    if (step <= 2) {
      return 66;
    }
    return 100;
  };

//   const navigationActions = {
//     2: () => router.push('onboarding/WelcomeScreen'),
//     3: () => router.push('onboarding/BirthdayScreen')
//   };

//   const handleNavigation = () => {
//     const action = navigationActions[currentStep];
//     if (action) {
//       action();
//     }
//   };

  return (
    <YStack
      backgroundColor="$primary500"
  paddingLeft="$8"
  paddingRight="$8"
  paddingTop="$4"
  paddingBottom="$4"
    >
      <XStack
        alignItems="center"
    justifyContent="space-between"
    marginTop="$2"
      >
        <YStack width={64} height={64} justifyContent="center">
          {currentStep > 1 ? (
           <Button
  chromeless // Removes default button background/styles
  onPress={() => router.back()}
  width={40}
  height={40}
  alignItems="center"
  justifyContent="center"
>
  <Ionicons name="chevron-back" size={40} color="#034337" />
</Button>

          ) : (
            <YStack width={40} height={40} />
          )}
        </YStack>
        <YStack flex={1} alignItems="center"
>
<MaterialCommunityIcons name="fruit-citrus" size={40} color="#f9da61" />
        </YStack>
        <YStack width={64} height={64} />
      </XStack>

<YStack 
  alignItems="center" 
  marginTop={0} 
  marginRight={16} 
  marginLeft={24} 
  marginBottom={0}
>
  <XStack gap="$4" alignItems="center">
    <YStack flex={1} justifyContent="center">
      {/* ... */}
    </YStack>
  </XStack>
</YStack>

      <YStack>
<Progress
  value={getProgress(currentStep)}
  max={100}
  width="100%"
  height={6}
  borderRadius={8}
  backgroundColor="$primary200"
  borderWidth={2}
  borderColor="$primary500"
>
  <ProgressIndicator
    backgroundColor="$secondary500"
    borderRadius={999}
    height="100%"
  />
</Progress>

          </YStack>
          <YStack>
            <MaterialCommunityIcons name="gift-outline" size={26} color="#034337" />
          </YStack>
      </YStack>
        
  );
};
