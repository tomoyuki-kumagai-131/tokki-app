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
import {
	FieldValues,
	SubmitHandler,
	useForm,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { FormValues, TweetData, TweetValues } from '~/types/type'
import { UserType } from '~/services/AuthContext'
import { FaTrashAlt } from 'react-icons/fa'

type Props = {
	onSubmit: SubmitHandler<TweetData>
	handleSubmit: UseFormHandleSubmit<TweetValues>
	register: UseFormRegister<FieldValues>
	deleteTweet: any
	tweets: TweetData[]
	user: UserType | undefined
	isLoading?: boolean
}

export const Component: React.FC<Props> = ({
	onSubmit,
	register,
	handleSubmit,
	deleteTweet,
	tweets,
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
										<Box ml={64} mr={4}>
											{user?.uid === tweet?.uid && (
												<Box>
													<FaTrashAlt />
												</Box>
											)}
										</Box>
										<Box display="flex" justifyContent="space-between">
											<Flex pt={2} fontSize="xs">
												ID: {user?.uid.slice(0, 8)}...
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

	const { register, handleSubmit } = useForm({
		criteriaMode: 'all',
		mode: 'onSubmit',
	})

	return (
		<Component
			onSubmit={onSubmit}
			deleteTweet={deleteTweet}
			register={register}
			handleSubmit={handleSubmit}
			isLoading={isLoading}
			user={user}
			tweets={tweets}
		/>
	)
}
