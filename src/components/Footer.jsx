import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
const AvatarSrc =
  "https://avatars.githubusercontent.com/u/118654283?s=400&u=5ee0b79e1a75085dd35f53ccea4a1a8a7ecbe2b0&v=4";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
        justifyContent={["center", "space-between"]}
      >
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"wides"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={AvatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};
export default Footer;
