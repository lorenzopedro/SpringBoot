import { Text } from "@chakra-ui/react";

const BodyText = ({ children, hover = false, ...rest }) => {
  return (
    <Text
      textStyle={"body"}
      _hover={hover ? { opacity: 0.7, transition: "opacity 0.3s" } : {}}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default BodyText;
