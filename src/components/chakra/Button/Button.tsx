import {
	defineStyle,
	defineStyleConfig,
	StyleFunctionProps,
} from '@chakra-ui/react'

const solid = defineStyle((props: StyleFunctionProps) => ({
	bg: `${props.colorScheme}.400`,
}))

const outline = defineStyle((props: StyleFunctionProps) => {
	if (props.colorScheme.match(/^[a-zA-Z]+\.[0-9]+$/g)) {
		return {
			bg: 'white',
			color: props.colorScheme,
			borderColor: props.colorScheme,
			_hover: {
				opacity: 0.6,
			},
		}
	}
	return {
		bg: 'white',
		color: `${props.colorScheme}.400`,
		borderColor: `${props.colorScheme}.300`,
	}
})

const sm = defineStyle(() => ({
	rounded: 'xl',
	fontSize: 'sm',
	height: 'auto',
	px: '4',
	py: '3',
}))

const md = defineStyle(() => ({
	rounded: 'xl',
	fontSize: 'sm',
}))

const lg = defineStyle(() => ({
	rounded: 'lg',
	fontSize: 'md',
	height: 'auto',
	px: '4',
	py: '18px',
}))

const xl = defineStyle(() => ({
	rounded: 'xl',
	fontSize: 'md',
	height: 'auto',
	px: '4',
	py: '5',
}))

export const Button = defineStyleConfig({
	variants: {
		solid,
		outline,
	},
	sizes: {
		sm,
		md,
		lg,
		xl,
	},
	defaultProps: {
		colorScheme: 'primary',
	},
})
