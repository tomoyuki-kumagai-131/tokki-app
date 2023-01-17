import { BellIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'

type Props = {
	article: {
		title: string
		createdAt: string
	}
	user: {
		id: string
		name: string
		src: string
	}
}

export const ListItem: React.FC<Props> = ({ article, user }) => (
	<Box mb={3}>
		<Flex
			bg="white"
			border="none"
			h="78px"
			w="78px"
			borderRadius={14}
			pl={6}
			mb={2}
		>
			<BellIcon mt={6} h="30px" w="30px" />
			<Flex fontWeight="bold" pl={10} pr={10} maxW="400px" fontSize="14px">
				<Flex w="400px" pr={14} h="20px">
					{article.title}
				</Flex>
			</Flex>
		</Flex>
		<Flex ml="90px" mt="-36px" mb={6}>
			<Image src={user.src} h={8} w={8} rounded="full" />
			<Flex mt={1} ml={2}>
				<Flex fontSize="sm" color="black.600">
					{user.name}
				</Flex>
				<Flex as="span" w="100vw" ml={3} color="gray.500" fontSize="sm">
					{article.createdAt}
				</Flex>
			</Flex>
		</Flex>
	</Box>
)
