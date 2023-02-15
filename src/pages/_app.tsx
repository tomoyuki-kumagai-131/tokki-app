import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header } from '~/components/layouts/Layout/Header'
import { AuthProvider } from '~/services/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<AuthProvider>
				<Header />
				<Component {...pageProps} />
			</AuthProvider>
		</ChakraProvider>
	)
}
