import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import routes from "../../../routes";
import Redirect from "../typography/Redirect";
import Heading from "../typography/Heading";
import { ColorModeButton } from "../ui/color-mode";

const Header = () => {
  return (
    <Box
      as="header"
      bg="blue.600"
      color="white"
      px={4}
      py={4}
      shadow="md"
      width="100%"
    >
      <Flex align={"center"} justify={"space-between"}>
        <Heading>Consumir Spring</Heading>

        <Flex gap={6}>
          <HStack as="nav" spacing={6} display={{ base: "none", sm: "flex" }}>
            {routes
              .filter((x) => x.listed)
              .map((link) => (
                <Redirect path={link.path}>{link.name}</Redirect>
              ))}
          </HStack>

          <ColorModeButton />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
