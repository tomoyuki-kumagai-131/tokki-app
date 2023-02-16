/* eslint-disable react/no-children-prop */
import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHaerin } from '~/components/pages/Haerin/Haerin.hooks.'
import { schema, TweetInputSchema } from '~/varidations/schema'
import { Star } from '../Icon/icons/bold/Star'

type Props = {
	onSubmit: SubmitHandler<TweetInputSchema>
	isLoading?: boolean
}

export const Component = ({ onSubmit, isLoading }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TweetInputSchema>({
		resolver: zodResolver(schema),
	})

	return (
		<Box display="flex" justifyContent="center">
			<Box w={{ base: 40, md: 500 }} display="flex" justifyContent="center">
				<Box
					border="1px solid"
					borderColor="gray.200"
					borderRadius="xl"
					mt={1}
					pt={4}
				>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box w={{ base: 350, md: 450 }}>
							<InputGroup ml={{ base: 4, md: 4 }} mr={{ base: 4, md: 4 }}>
								<InputLeftElement
									pointerEvents="none"
									color="gray.300"
									children={<Box>🐰</Box>}
								/>
								<Input
									border="none"
									w={{ base: 320, md: 420 }}
									placeholder="What's happening?"
									id="text"
									{...register('tweet', {
										required: true,
									})}
									bg="white"
								/>
							</InputGroup>
						</Box>

						<Box fontWeight={800} color="blue.500" ml={4} cursor="pointer">
							<Star pb={0.5} />
							Everyone can reply
						</Box>
						{errors.tweet?.message && (
							<Box color="red.600" fontWeight="bold">
								{errors?.tweet.message}
							</Box>
						)}
						<Box mb={4} mt={2} mr={8} textAlign="right" m>
							<Button
								type="submit"
								isLoading={isLoading}
								_hover={{ bg: 'pink.300' }}
								bg="pink.200"
								color="white"
								borderRadius={20}
							>
								Tweet
							</Button>
						</Box>
					</form>
				</Box>
			</Box>
		</Box>
	)
}

export const TweetInput = () => {
	const { onSubmit, isLoading } = useHaerin()

	return <Component onSubmit={onSubmit} isLoading={isLoading} />
}
