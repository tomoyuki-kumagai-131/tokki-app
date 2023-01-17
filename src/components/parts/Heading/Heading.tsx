import { Heading, Tooltip } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'

type Props = {
	title: string
	tooltip?: string
}

export const HeadingTitle: React.FC<Props> = ({ title, tooltip }) => (
	<Heading mt={{ base: 4, md: 12 }} ml={{ base: 4, md: 12 }}>
		{title}
		<Tooltip label={tooltip} fontSize="sm">
			<QuestionOutlineIcon
				ml={1}
				h={5}
				w={5}
				bg="gray.400"
				borderRadius="full"
				color="white"
				border="none"
			/>
		</Tooltip>
	</Heading>
)
