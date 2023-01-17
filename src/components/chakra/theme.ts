import { extendTheme } from '@chakra-ui/react'

import { Button } from '~/components/chakra/Button'
import { colors } from '~/components/chakra/colors'
import { FormLabel } from '~/components/chakra/FormLabel'
import { Input } from '~/components/chakra/Input'
import { Select } from '~/components/chakra/Select'
import { shadow } from '~/components/chakra/shadow'
import { Switch } from '~/components/chakra/Switch'
import { Table } from '~/components/chakra/Table'
import { Tabs } from '~/components/chakra/Tabs'
import { textStyles } from '~/components/chakra/textStyles'

const chakraTheme = {
	colors,
	shadow,
	textStyles,
	components: {
		Input,
		Select,
		Button,
		FormLabel,
		Table,
		Tabs,
		Switch,
	},
} as const

type Theme = typeof chakraTheme

export const theme = extendTheme(chakraTheme) as Theme
