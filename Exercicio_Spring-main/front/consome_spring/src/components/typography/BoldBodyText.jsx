import { Text } from "@chakra-ui/react";

const BoldBodyText = ({ children, hover = false, ...rest }) => {
  return (
    <Text
      textStyle={"bodyBold"}
      _hover={hover ? { opacity: 0.7, transition: "opacity 0.3s" } : {}}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default BoldBodyText;
