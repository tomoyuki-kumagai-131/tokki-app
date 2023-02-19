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
	Select,
	Skeleton,
	SkeletonText,
} from '@chakra-ui/react'
import { Header } from '~/components/layouts/Layout/Header'
import { useHaerin } from './Haerin.hooks.'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TweetData } from '~/types/type'
import { UserType } from '~/services/AuthContext'
import { FaTrashAlt } from 'react-icons/fa'
import { schema, TweetInputSchema } from '~/varidations/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useHeader } from '~/components/layouts/Layout/Header/Header.hooks'
import { TweetInput } from '~/components/parts/TweetInput'
import React, {
	ChangeEvent,
	ChangeEventHandler,
	useCallback,
	useEffect,
	useState,
} from 'react'
import SideMenu from '~/components/layouts/Layout/SideMenu/SideMenu'
import { ButtonLoadMore } from '~/components/parts/ButtonLoadMore/ButtonLoadMore'

type Props = {
	deleteTweet: (id: string) => void
	tweets: TweetData[]
	user: UserType | undefined
	isLoading?: boolean
	loadMore: () => void
	getTweets: () => void
	getOldTweets: () => void
	reset: () => void
}

export const Component: React.FC<Props> = ({
	deleteTweet,
	getTweets,
	tweets,
	user,
	loadMore,
	reset,
	isLoading,
	getOldTweets,
}) => {
	const options = [
		{ label: '新しい順', value: 'newest' },
		{ label: '古い順', value: 'oldest' },
	]

	const [sort, setSort] = useState('')

	const handleSortChange = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			setSort(e.target.value)
			if (e.target.value === 'newest') {
				getTweets()
			} else {
				getOldTweets()
			}
		},
		[getOldTweets, getTweets],
	)

	return (
		<Box>
			<Box
				textAlign="center"
				display="flex"
				justifyItems="center"
				justifyContent="center"
				mt={2}
				borderRadius="xl"
			>
				<Box opacity={20} p={{ base: 4 }}>
					<Image
						h={{ base: 210, md: 300 }}
						src="/images/haerin1.webp"
						borderRadius="xl"
					/>
				</Box>
			</Box>

			<TweetInput />

			<Box display="flex" justifyContent="center" mt={4} textAlign="center">
				<Select w="300px" onChange={handleSortChange} value={sort}>
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</Select>
			</Box>

			<Box display="flex" justifyContent="center">
				<Card
					maxW="md"
					// bg="pink.50"
					mt={4}
					mx={4}
					mb={4}
					py={3}
					width={{ base: '100%', sm: '100%', md: '735px' }}
					borderRadius={10}
					boxShadow="md"
				>
					<Box>
						<SkeletonText
							mx={2}
							noOfLines={4}
							spacing="2"
							skeletonHeight="2"
							isLoaded={!isLoading}
						/>
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
			<Box mb={4} textAlign="center">
				<ButtonLoadMore loadMore={loadMore} isLoading={isLoading} />
			</Box>
		</Box>
	)
}

export const Haerin = () => {
	const {
		deleteTweet,
		tweets,
		isLoading,
		setIsLoading,
		user,
		getTweets,
		loadMore,
		getOldTweets,
	} = useHaerin()
	// const [isBottom, setIsBottom] = useState(false)
	// const [loadingMore, setLoadingMore] = useState(false)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollTop = document.documentElement.scrollTop
	// 		const clientHeight = document.documentElement.clientHeight
	// 		const scrollHeight = document.documentElement.scrollHeight
	// 		if (scrollTop + clientHeight >= scrollHeight - 100 && !loadingMore) {
	// 			setLoadingMore(true)
	// 		}
	// 		if (scrollTop + clientHeight === scrollHeight) {
	// 			setIsBottom(true)
	// 		} else {
	// 			setIsBottom(false)
	// 		}
	// 	}

	// 	window.addEventListener('scroll', handleScroll)

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll)
	// 	}
	// }, [loadingMore])

	const { reset } = useForm()

	return (
		<Component
			deleteTweet={deleteTweet}
			isLoading={isLoading}
			user={user}
			tweets={tweets}
			getTweets={getTweets}
			getOldTweets={getOldTweets}
			loadMore={loadMore}
			reset={reset}
		/>
	)
}
