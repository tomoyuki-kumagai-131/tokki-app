import * as React from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "../src/components/chakra/theme";

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

const withChakra = (StoryFn, context) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" p="4" m="-4" bg="primary.50">
        <StoryFn />
      </Box>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
