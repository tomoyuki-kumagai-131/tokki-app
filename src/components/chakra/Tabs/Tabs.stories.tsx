import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  ThemingProps,
} from "@chakra-ui/react"
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
import { Meta } from "@storybook/react"

import { theme } from "~/components/chakra/theme"

type StoryProps = ThemingProps<"Tabs">

export default {
  title: "Chakra / Components / Tabs",
  // get controls for `variant`, `size` and `colorScheme`
  argTypes: getThemingArgTypes(theme, "Tabs"),
  component: (props: StoryProps) => (
    <Tabs {...props}>
      <TabList>
        <Tab>運営</Tab>
        <Tab>事務所</Tab>
        <Tab>配信者</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>運営</TabPanel>
        <TabPanel>事務所</TabPanel>
        <TabPanel>配信者</TabPanel>
      </TabPanels>
    </Tabs>
  ),
} as Meta

export const Default = {
  args: {},
}

export const Roundness = {
  args: {
    variant: "roundness",
  },
}
