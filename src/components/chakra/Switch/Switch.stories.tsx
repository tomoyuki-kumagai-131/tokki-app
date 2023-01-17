import { Switch, ThemingProps } from "@chakra-ui/react"
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
import { Meta, StoryFn } from "@storybook/react"

import { theme } from "~/components/chakra/theme"

export default {
  title: "Chakra / Components / Forms / Switch",
  argTypes: getThemingArgTypes(theme, "Switch"),
} as Meta

type StoryProps = ThemingProps<"Switch">

export const Basic: StoryFn<StoryProps> = (props) => <Switch {...props} />
