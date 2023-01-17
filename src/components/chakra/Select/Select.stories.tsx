import { Select, ThemingProps } from "@chakra-ui/react"
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
import { Meta, StoryFn } from "@storybook/react"

import { theme } from "~/components/chakra/theme"

export default {
  title: "Chakra / Components / Forms / Select",
  // get controls for `variant`, `size` and `colorScheme`
  argTypes: getThemingArgTypes(theme, "Select"),
} as Meta

type StoryProps = ThemingProps<"Button">

export const Basic: StoryFn<StoryProps> = (props) => <Select {...props} />
