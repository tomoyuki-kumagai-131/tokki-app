import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Component, Signin } from './Login'

export default { component: Component } as ComponentMeta<typeof Component>
export const Default: ComponentStoryObj<typeof Component> = {
	args: {
		onSubmit: () => {},
		// handleSubmit: () => {},
		// register: () => {},
		errors: {},
		isDirty: false,
		isLoading: false,
	},
}
