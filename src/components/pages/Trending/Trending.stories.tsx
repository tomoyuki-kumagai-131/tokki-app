import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Trending } from './Trending'

export default { component: Trending } as ComponentMeta<typeof Trending>
export const Default: ComponentStoryObj<typeof Trending> = {
	args: {},
}
