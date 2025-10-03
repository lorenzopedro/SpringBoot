import { Flex } from "@chakra-ui/react";
import BodyText from "../../components/typography/BodyText";

const Home = () => {
  return (
    <Flex minH="100vh" justify={"center"} align={"center"}>
      <BodyText>Bem vindo!</BodyText>
    </Flex>
  );
};

export default Home;
