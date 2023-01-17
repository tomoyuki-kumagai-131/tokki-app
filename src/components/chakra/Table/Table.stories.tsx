import { Input, ThemingProps } from "@chakra-ui/react"
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
import { Meta, StoryFn } from "@storybook/react"

import { theme } from "~/components/chakra/theme"

export default {
  title: "Chakra / Components / Table",
  // get controls for `variant`, `size` and `colorScheme`
  argTypes: getThemingArgTypes(theme, "Input"),
} as Meta

type StoryProps = ThemingProps<"Button">

export const Default: StoryFn<StoryProps> = (props) => <Input {...props} />
