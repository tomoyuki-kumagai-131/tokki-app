import { Box, Image } from '@chakra-ui/react'
import { Header } from '~/components/layouts/Layout/Header'

export const Haerin = () => {
	return (
		<Box>
			<Header
				logout={function (): void {
					throw new Error('Function not implemented.')
				}}
			/>
			<Box
				textAlign="center"
				display="flex"
				justifyItems="center"
				// alignItems="center"
				justifyContent="center"
			>
				<Image src="/images/haerin1.webp" />
			</Box>
		</Box>
	)
}
