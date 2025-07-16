import { XStack, YStack, Text } from "tamagui";

export default function FirstOnboardingScreen() {
  return (
    <YStack flex={1} backgroundColor="#034337">
      <XStack width="100%" flex={1}>
        <YStack flex={1} position="relative" overflow="hidden">
          <YStack
            position="absolute"
            left={30}
            right={30}
            backgroundColor="#e4f0dd"
            height="100%"
            borderTopLeftRadius={1000}
            borderTopRightRadius={1000}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={24} textAlign="center">
              🎉 Screen 1 🎉
            </Text>
          </YStack>
        </YStack>
      </XStack>
    </YStack>
  );
}
