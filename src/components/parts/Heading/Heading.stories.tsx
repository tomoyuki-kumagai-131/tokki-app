import { ComponentMeta } from '@storybook/react'

import { HeadingTitle } from './Heading'

export default { component: HeadingTitle } as ComponentMeta<typeof HeadingTitle>
export const Default = {
	args: {
		title: 'About',
		tooltip: 'This is About',
	},
}
