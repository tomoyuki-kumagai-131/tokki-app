import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Top } from './Top'

export default { component: Top } as ComponentMeta<typeof Top>
export const Default: ComponentStoryObj<typeof Top> = {
	args: {},
}
