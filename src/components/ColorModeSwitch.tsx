import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap" textTransform="capitalize">
        <Show above="lg">{colorMode} Mode</Show>
        <Show below="lg">
          {(colorMode === "dark" && <FiMoon fontSize={23} />) || (
            <FiSun fontSize={23} />
          )}
        </Show>
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
