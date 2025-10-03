import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
} from "@chakra-ui/react";

const textStyles = defineTextStyles({
  body: {
    description: "Texto do corpo",
    value: {
      fontFamily: `Roboto`,
      fontWeight: "400",
      fontSize: "16px",
    },
  },
  bodyBold: {
    description: "Texto do corpo em negrito",
    value: {
      fontFamily: `Roboto`,
      fontWeight: "700",
      fontSize: "16px",
    },
  },
  heading: {
    description: "Texto de titulos",
    value: {
      fontFamily: `Roboto`,
      fontWeight: "700",
      fontSize: "24px",
    },
  },
});

const config = defineConfig({
  theme: {
    textStyles,
  },
});

export const system = createSystem(defaultConfig, config);
