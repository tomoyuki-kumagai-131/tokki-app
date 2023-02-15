/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-children-prop */
import {
	Box,
	Button,
	Card,
	Flex,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react'
import { Header } from '~/components/layouts/Layout/Header'
import { useHaerin } from './Haerin.hooks.'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TweetData } from '~/types/type'
import { UserType } from '~/services/AuthContext'
import { FaTrashAlt } from 'react-icons/fa'
import { schema, TweetInputSchema } from '~/varidations/schema'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
	onSubmit: SubmitHandler<TweetInputSchema>
	deleteTweet: (id: string) => void
	tweets: TweetData[]
	user: UserType | undefined
	isLoading?: boolean
}

export const Component: React.FC<Props> = ({
	onSubmit,
	deleteTweet,
	tweets,
	isLoading,
	user,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TweetInputSchema>({
		resolver: zodResolver(schema),
	})

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
			</Box>
			<Box
				textAlign="center"
				display="flex"
				justifyItems="center"
				justifyContent="center"
				mt={6}
			>
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
					{errors.tweet?.message && (
						<Box color="red.600" fontWeight="bold">
							{errors?.tweet.message}
						</Box>
					)}
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
			<Box display="flex" justifyContent="center">
				<Card
					maxW="md"
					bg="pink.50"
					mt={4}
					mx={4}
					mb={4}
					py={3}
					width={{ base: '100%', sm: '100%', md: '735px' }}
					borderRadius={10}
				>
					{/* TweetList */}
					<Box>
						{tweets.map((tweet) => {
							return (
								<>
									<Box
										bg="white"
										border="none"
										p={4}
										mt={4}
										mx={4}
										borderRadius={12}
										key={tweet.tweet}
									>
										<Box>{tweet.tweet}</Box>
										<Box>
											{user?.uid === tweet?.uid && (
												<Box onClick={() => deleteTweet(tweet.id)}>
													<FaTrashAlt />
												</Box>
											)}
										</Box>
										<Box display="flex" justifyContent="space-between">
											<Flex pt={2} fontSize="xs">
												ID: {user?.uid.slice(0, 8)}...
											</Flex>
											<Flex pt={2} fontSize="xs">
												{tweet.createdAt}
											</Flex>
										</Box>
									</Box>
								</>
							)
						})}
					</Box>
				</Card>
			</Box>
		</Box>
	)
}

export const Haerin = () => {
	const { onSubmit, deleteTweet, tweets, isLoading, user } = useHaerin()

	return (
		<Component
			onSubmit={onSubmit}
			deleteTweet={deleteTweet}
			isLoading={isLoading}
			user={user}
			tweets={tweets}
		/>
	)
}
