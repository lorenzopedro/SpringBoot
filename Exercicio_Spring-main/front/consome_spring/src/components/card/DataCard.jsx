import { Card, Flex, IconButton, Menu, Portal } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import { useColorModeValue } from "../ui/color-mode";

const DataCard = ({ title, children, edit, deletion }) => {
  const bgCardColor = useColorModeValue("gray.200", "gray.900");
  const hoverColor = useColorModeValue("gray.300", "gray.800");
  const lineColor = useColorModeValue("gray.300", "gray.800");

  return (
    <Card.Root
      borderRadius={12}
      boxShadow={"md"}
      padding={2}
      transition={"box-shadow 0.2s"}
      border={"1px solid"}
      borderColor={lineColor}
      bgColor={bgCardColor}
    >
      <Card.Header>
        <Card.Title
          style={{ fontWeight: 600, fontSize: "1.1em" }}
        >
          {title}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Flex direction="row" align="center" justify="space-between" w="100%">
          <Flex flex="7" align="center">
            {children}
          </Flex>
          <Flex flex="3" justify="flex-end">
            <Menu.Root>
              <Menu.Trigger asChild>
                <IconButton
                  aria-label="Menu de opções"
                  variant="ghost"
                  size="sm"
                  _hover={{ bg: "gray.100" }}
                >
                  <LuMenu size={22} color={lineColor} />
                </IconButton>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content
                    border={"1px solid"}
                    borderColor={lineColor}
                    boxShadow={"md"}
                    borderRadius={8}
                  >
                    <Menu.Item
                      onClick={edit}
                      value="edit"
                      style={{
                        padding: "8px 16px",
                        fontWeight: 500,
                        cursor: "pointer",
                      }}
                      _hover={{ background: hoverColor }}
                    >
                      Editar
                    </Menu.Item>
                    <Menu.Item
                      onClick={deletion}
                      value="delete"
                      style={{
                        padding: "8px 16px",
                        fontWeight: 500,
                        color: "#e53e3e",
                        cursor: "pointer",
                      }}
                      _hover={{ background: hoverColor }}
                    >
                      Excluir
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Flex>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default DataCard;
