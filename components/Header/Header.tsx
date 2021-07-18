import React from "react";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  StatusBar,
  IconButton,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export default function Header(props) {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#6200ee" />
      <HStack
        bg="#6200ee"
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space={4} alignItems="center">
          <IconButton
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="menu" />}
                color="white"
              />
            }
            onPress={() => props.navigation.toggleDrawer()}
          />
          <Text color="white" fontSize={20} fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack space={2}>
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="more-vert" />}
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}
