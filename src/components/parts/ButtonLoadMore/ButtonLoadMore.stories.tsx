import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ButtonLoadMore } from './ButtonLoadMore'

export default { component: ButtonLoadMore } as ComponentMeta<
	typeof ButtonLoadMore
>
export const Default: ComponentStoryObj<typeof ButtonLoadMore> = {
	args: {},
}
