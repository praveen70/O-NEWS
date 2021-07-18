import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
} from "native-base";

export default function CardComponent(props) {
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="90%">
      <Image
        source={{
          uri: props.featured_image_urls,
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
        NEWS
      </Text>
      <Stack space={4} p={[4, 4, 8]}>
        <Text color="gray.400">June 22, 2021</Text>
        <Heading size={["md", "lg", "md"]} noOfLines={2}>
           {props.content}
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
          {props.title}
        </Text>
      </Stack>
    </Box>
  );
}
