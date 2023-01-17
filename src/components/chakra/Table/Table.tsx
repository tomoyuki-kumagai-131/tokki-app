import { tableAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

const stripe = definePartsStyle(() => ({
  tr: {
    "&:nth-of-type(odd)": {
      "th, td": {
        bg: "white",
      },
    },
    "&:nth-of-type(even)": {
      "th, td": {
        bg: "black.50",
      },
    },
  },
}))

const md = definePartsStyle({
  tr: {
    th: {
      py: 4,
      fontSize: "sm",
      textTransform: "inherit",
      "&:first-of-type": {
        pl: 12,
      },
    },
    td: {
      py: 2,
      fontSize: "sm",
    },
    "& > td:first-of-type": {
      pl: 12,
    },
  },
})

export const Table = defineMultiStyleConfig({
  baseStyle: {},
  defaultProps: {
    variant: "stripe",
  },
  variants: { stripe },
  sizes: {
    md,
  },
})
