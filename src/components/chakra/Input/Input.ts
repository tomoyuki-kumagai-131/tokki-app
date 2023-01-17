import { inputAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const outline = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "black.300",
    bg: "white",
    borderRadius: "xl",
    _readOnly: {
      border: "none",
      boxShadow: "none",
      backgroundColor: "white",
    },
  },
})

export const Input = defineMultiStyleConfig({
  defaultProps: {
    variant: "outline",
  },
  variants: { outline },
})
