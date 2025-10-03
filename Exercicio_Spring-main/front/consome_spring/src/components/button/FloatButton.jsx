import { IconButton } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";

const FloatButton = ({ onClick }) => {
  return (
    <IconButton
      size="lg"
      colorPalette={"blue"}
      aria-label="Adicionar"
      onClick={onClick}
      position="fixed"
      bottom={6}
      right={6}
      zIndex={1000}
      boxShadow="lg"
      borderRadius="full"
    >
      <LuPlus size={24} />
    </IconButton>
  );
};

export default FloatButton;
