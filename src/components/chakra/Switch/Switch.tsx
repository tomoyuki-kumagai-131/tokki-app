import { switchAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  track: {
    bg: "black.300",
    _checked: {
      bg: "primary.400",
    },
  },
})

export const Switch = defineMultiStyleConfig({ baseStyle })
