import { Box } from '@chakra-ui/react'

type Props = {
	children: React.ReactNode
}

export const Contents: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Box mt={{ base: 2 }} ml={{ base: 4, md: 12 }} mr={{ base: 4, md: 12 }}>
				{children}
			</Box>
		</>
	)
}
