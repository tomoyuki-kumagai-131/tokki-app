import {
	Box,
	Container,
	Stack,
	Text,
	chakra,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { Logo } from '~/components/parts/Logo'

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode
	label: string
	href: string
}) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	)
}
export const Footer: React.FC = () => {
	return (
		<Box
			bg={useColorModeValue('gray.100', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			// mt={8}
		>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Logo />
				<Text>© 2023 Tokki. All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} href={'#'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={'Instagram'} href={'#'}>
						<FaInstagram />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	)
}
