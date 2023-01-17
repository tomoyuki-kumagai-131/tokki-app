import {
	Heading,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Tooltip,
} from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import { useState } from 'react'

type Props = {
	title: string
	tooltip?: string
}

export const Component: React.FC<Props> = ({ title, tooltip }) => (
	<Heading mt={{ base: 4, md: 12 }} ml={{ base: 4, md: 12 }}>
		{title}
		<Popover>
			<PopoverTrigger>
				<QuestionOutlineIcon
					ml={1}
					h={5}
					w={5}
					bg="gray.400"
					borderRadius="full"
					color="white"
					border="none"
				/>
			</PopoverTrigger>
			<PopoverContent ml={1} mr={2}>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverHeader fontSize="sm">{title}</PopoverHeader>
				<PopoverBody fontSize="sm">{tooltip}</PopoverBody>
			</PopoverContent>
		</Popover>
		{/* <Tooltip mr={4} label={tooltip} fontSize="sm">
			<QuestionOutlineIcon
				ml={1}
				h={5}
				w={5}
				bg="gray.400"
				borderRadius="full"
				color="white"
				border="none"
			/>
		</Tooltip> */}
	</Heading>
)

export const HeadingTitle: React.FC<Props> = ({ title, tooltip }) => {
	return <Component title={title} tooltip={tooltip} />
}
