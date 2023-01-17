import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const baseStyle = defineStyle({
  textStyle: "label",
  fontWeight: "bold",
  fontSize: { base: "sm", md: "md" },
})

export const FormLabel = defineStyleConfig({
  baseStyle,
})
