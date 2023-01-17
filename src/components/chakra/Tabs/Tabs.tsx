import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(tabsAnatomy.keys)

const enclosed = definePartsStyle({
	tablist: {
		mt: -2,
		ml: 4,
		gap: '1',
		alignItems: 'flex-end',
		borderBottomWidth: '2px',
		borderBottomColor: 'black.200',
	},
	tab: {
		px: 4,
		fontSize: 'sm',
		color: 'black.400',
		fontWeight: 'semibold',
		borderWidth: '0 0 1px 0',
		_selected: {
			borderBottom: '2px',
			color: 'black.900',
		},
	},
})

export const Tabs = defineMultiStyleConfig({
	baseStyle: {},
	defaultProps: {
		variant: 'enclosed',
	},
	variants: {
		enclosed,
	},
})
