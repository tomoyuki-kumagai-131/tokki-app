import { BellIcon, ChatIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	IconButton,
	Image,
	MenuButton,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react'
import { Key } from 'react'
import { HeadingTitle } from '~/components/parts/Heading/Heading'
import { ListItem } from '~/components/parts/ListItem'

const ARTICLES = [
	{
		id: 1,
		user: {
			id: '1',
			name: 'yamada',
			src: 'https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg',
		},
		article: {
			title: '【SwitchBot】雨が降りそうなときに廊下ライトの色を変えてお知らせ',
			createdAt: '1日前',
		},
	},
	{
		id: 2,
		user: {
			id: '2',
			name: 'suzuki',
			src: 'https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg',
		},
		article: {
			title: '意外と手軽、家庭用 10 Gbps+ イーサネットまとめ',
			createdAt: '2日前',
		},
	},
	{
		id: 3,
		user: {
			id: '3',
			name: 'yama',
			src: 'https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg',
		},
		article: {
			title: '「競プロ典型 90問」Smallest Subsequence (最小部分列問題)',
			createdAt: '3日前',
		},
	},
	{
		id: 4,
		user: {
			id: '4',
			name: 'suzu',
			src: 'https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg',
		},
		article: {
			title: 'HTML/CSSっぽい記述でPDFを作れるライブラリをRustで作る',
			createdAt: '4日前',
		},
	},
	{
		id: 5,
		user: {
			id: '2',
			name: 'suzuki',
			src: 'https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg',
		},
		article: {
			title: 'ReactでProseMirrorを使ったWYSIWYGエディタの実装',
			createdAt: '4日前',
		},
	},
	{
		id: 6,
		user: {
			id: '3',
			name: 'yama',
			src: 'https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg',
		},
		article: {
			title: '[Vue3/TypeScript対応] emitで理解するVue.jsの本質',
			createdAt: '5日前',
		},
	},
	{
		id: 7,
		user: {
			id: '4',
			name: 'suzu',
			src: 'https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg',
		},
		article: {
			title: 'HTML/CSSっぽい記述でPDFを作れるライブラリをRustで作る',
			createdAt: '6日前',
		},
	},
]

export const Trending = () => {
	return (
		<>
			<Box pt={8} pl={{ base: 3, md: 14 }}>
				<HeadingTitle title="Tech" />
			</Box>

			{/* スマホ */}
			<Grid mt={6} ml={1} display={{ base: 'block', md: 'none' }}>
				{ARTICLES.map(
					(item: {
						user: { id: string; name: string; src: string }
						article: { title: string; createdAt: string }
					}) => (
						<GridItem key={item.user.id}>
							<ListItem
								article={item.article}
								user={{
									id: item.user.id,
									name: item.user.name,
									src: item.user.src,
								}}
							/>
						</GridItem>
					),
				)}
			</Grid>
			{/* PC */}
			<SimpleGrid
				columns={2}
				mt={6}
				ml={1}
				spacing={4}
				display={{ base: 'none', md: 'block' }}
			>
				{ARTICLES.map(
					(item: {
						user: { id: string; name: string; src: string }
						article: { title: string; createdAt: string }
					}) => (
						<ListItem
							key={item.user.id}
							article={item.article}
							user={{
								id: item.user.id,
								name: item.user.name,
								src: item.user.src,
							}}
						/>
					),
				)}
			</SimpleGrid>
		</>
	)
}
