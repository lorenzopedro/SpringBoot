import { Text } from "@chakra-ui/react";
import BodyText from "./BodyText";
import BoldBodyText from "./BoldBodyText";

const TextDescribed = ({ description, value }) => {
  return (
    <BoldBodyText direction="row" align="center" gap={2}>
      <Text>{description}:</Text>
      <BodyText>{value}</BodyText>
    </BoldBodyText>
  );
};

export default TextDescribed;
