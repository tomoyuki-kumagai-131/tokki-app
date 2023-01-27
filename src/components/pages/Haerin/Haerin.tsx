/* eslint-disable react/no-children-prop */
import {
	Box,
	Button,
	Card,
	Flex,
	FormLabel,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react'
import { Header } from '~/components/layouts/Layout/Header'
import { useHaerin } from './Haerin.hooks.'
import {
	Field,
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { FormValues, TweetData, TweetValues } from '~/types/type'
import { UserType } from '~/services/AuthContext'

type Props = {
	onSubmit: SubmitHandler<TweetData>
	handleSubmit: any
	handleShow: () => void
	register: any
	// tweets: TweetData[]
	user: UserType | undefined
	// errors: Partial<FieldErrorsImpl<TweetValues>>
	isDirty?: boolean
	isLoading?: boolean
}

export const Component: React.FC<Props> = ({
	onSubmit,
	register,
	handleSubmit,
	handleShow,
	// tweets,
	isLoading,
	user,
}) => {
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
				justifyContent="center"
				mt={4}
				borderRadius="xl"
			>
				<Box opacity={20} p={{ base: 4 }}>
					<Image src="/images/haerin1.webp" borderRadius="xl" />
				</Box>
				<Box position="absolute" pt={{ base: 20, sm: 32, md: 48 }}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								color="gray.300"
								children={<Box>🐰</Box>}
							/>
							<Input
								id="text"
								{...register('tweet', {
									required: true,
								})}
								bg="white"
							/>
						</InputGroup>
						<Box mb={8} mt={8} textAlign="center">
							<Button
								isLoading={isLoading}
								type="submit"
								bg="pink.200"
								color="white"
							>
								Tweet
							</Button>
						</Box>
					</form>
				</Box>
			</Box>
			<Box display="flex" justifyContent="center">
				<Card
					maxW="7xl"
					bg="pink.50"
					mt={4}
					mx={4}
					mb={4}
					py={3}
					width={{ base: '100%', sm: '100%', md: '735px' }}
					// height="1000px"
					borderRadius={10}
				>
					{/* TweetList */}
					<Box>
						{/* {tweets.map((tweet) => {
							return (
								<> */}
						<Box
							bg="white"
							border="none"
							p={4}
							mt={4}
							mx={4}
							borderRadius={12}
							// key={tweet.tweet}
						>
							{/* <Box>{tweet.tweet}</Box> */}
							<Box>お試しツイート</Box>
							<Box display="flex" justifyContent="space-between">
								<Flex pt={2} fontSize="xs">
									{/* ID: {user?.uid.slice(0, 8)}... */}
									ID: AAABBBCCCDDD
								</Flex>
								<Flex pt={2} fontSize="xs">
									2023/01/01 00:00
								</Flex>
							</Box>
						</Box>
						<Box
							bg="white"
							border="none"
							p={4}
							mt={4}
							mx={4}
							borderRadius={12}
							// key={tweet.tweet}
						>
							{/* <Box>{tweet.tweet}</Box> */}
							<Box>ツイート</Box>
							<Box display="flex" justifyContent="space-between">
								<Flex pt={2} fontSize="xs">
									{/* ID: {user?.uid.slice(0, 8)}... */}
									ID: AAABBBCCCDDD
								</Flex>
								<Flex pt={2} fontSize="xs">
									2023/01/01 00:00
								</Flex>
							</Box>
						</Box>
						<Box
							bg="white"
							border="none"
							p={4}
							mt={4}
							mx={4}
							borderRadius={12}
							// key={tweet.tweet}
						>
							{/* <Box>{tweet.tweet}</Box> */}
							<Box>Herin</Box>
							<Box display="flex" justifyContent="space-between">
								<Flex pt={2} fontSize="xs">
									{/* ID: {user?.uid.slice(0, 8)}... */}
									ID: AAABBBCCCDDD
								</Flex>
								<Flex pt={2} fontSize="xs">
									2023/01/01 00:00
								</Flex>
							</Box>
						</Box>
						<Box
							bg="white"
							border="none"
							p={4}
							mt={4}
							mx={4}
							borderRadius={12}
							// key={tweet.tweet}
						>
							{/* <Box>{tweet.tweet}</Box> */}
							<Box>お試しツイート</Box>
							<Box display="flex" justifyContent="space-between">
								<Flex pt={2} fontSize="xs">
									{/* ID: {user?.uid.slice(0, 8)}... */}
									ID: AAABBBCCCDDD
								</Flex>
								<Flex pt={2} fontSize="xs">
									2023/01/01 00:00
								</Flex>
							</Box>
						</Box>
						<Box
							bg="white"
							border="none"
							p={4}
							mt={4}
							mx={4}
							borderRadius={12}
							// key={tweet.tweet}
						>
							{/* <Box>{tweet.tweet}</Box> */}
							<Box>NewJeans</Box>
							<Box display="flex" justifyContent="space-between">
								<Flex pt={2} fontSize="xs">
									{/* ID: {user?.uid.slice(0, 8)}... */}
									ID: AAABBBCCCDDD
								</Flex>
								<Flex pt={2} fontSize="xs">
									2023/01/01 00:00
								</Flex>
							</Box>
						</Box>
						{/* </>
							)
						})} */}
					</Box>
				</Card>
			</Box>
		</Box>
	)
}

export const Haerin = () => {
	const {
		onSubmit,
		register,
		handleSubmit,
		handleShow,
		// tweets,
		isLoading,
		user,
		// errors,
	} = useHaerin()
	return (
		<Component
			onSubmit={onSubmit}
			register={register}
			handleSubmit={handleSubmit}
			isLoading={isLoading}
			handleShow={handleShow}
			user={user}
			// tweets={tweets}
			// errors={errors}
		/>
	)
}
