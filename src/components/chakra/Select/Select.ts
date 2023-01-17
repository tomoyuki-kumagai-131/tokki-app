import { selectAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const outline = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "black.300",
    bg: "white",
    borderRadius: "md",
  },
})

export const Select = defineMultiStyleConfig({
  defaultProps: {
    variant: "outline",
  },
  variants: { outline },
})
