import { Button } from "@chakra-ui/react"
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
import { StoryFn } from "@storybook/react"

import { theme } from "~/components/chakra/theme"

import type { ThemingProps } from "@chakra-ui/react"
import type { Meta } from "@storybook/react"

export default {
  title: "Chakra / Components / Forms / Button",
  argTypes: getThemingArgTypes(theme, "Button"),
} as Meta

type StoryProps = ThemingProps<"Button">

export const Basic: StoryFn<StoryProps> = (props) => (
  <Button {...props}>Test</Button>
)
