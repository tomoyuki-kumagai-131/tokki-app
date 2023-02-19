import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Footer } from '~/components/layouts/Layout/Footer'
import { Header } from '~/components/layouts/Layout/Header'
import { AuthProvider } from '~/services/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<AuthProvider>
				<Header />
				<Component {...pageProps} />
				<Box pt={12}>
					<Footer />
				</Box>
			</AuthProvider>
		</ChakraProvider>
	)
}
