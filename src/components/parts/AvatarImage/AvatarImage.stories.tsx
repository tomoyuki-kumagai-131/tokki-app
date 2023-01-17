import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { AvatarImage } from './AvatarImage'

export default { component: AvatarImage } as ComponentMeta<typeof AvatarImage>
export const Default: ComponentStoryObj<typeof AvatarImage> = {
	args: {
		src: 'http://placehold.jp/148x148.png',
	},
}

export const DummyImage: ComponentStoryObj<typeof AvatarImage> = {
	args: {},
}
