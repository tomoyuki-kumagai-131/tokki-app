import { Box, Button, HStack, Image, Stack } from '@chakra-ui/react'
import { Header } from '~/components/layouts/Layout/Header'
import { Contents } from '~/components/parts/Contents'
import { HeadingTitle } from '~/components/parts/Heading/Heading'
import { Hero } from '~/components/parts/Hero/Hero'
import { MemberCard } from '~/components/parts/MemberCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, {
	Navigation,
	Pagination as Paginations,
	Autoplay,
} from 'swiper'
import { Discography } from '~/components/parts/Discography/Discography'

SwiperCore.use([Paginations, Autoplay, Navigation])

export const Top = () => (
	<>
		<Hero />
		<Box id="about">
			<HeadingTitle
				title={'What is Tokki ?'}
				tooltip={'Tokki is a web application for NewJeans Lovers.'}
			/>
		</Box>
		<Contents>
			Tokkiは、NewJeansのファンが集まるコミュニティです。絶賛開発中でコンテンツを随時増やしていきます。
		</Contents>
		<Box id="members">
			<HeadingTitle title={'Members'} tooltip={'Introduce NewJeans members.'} />
		</Box>
		<Contents>NewJeansのメンバーを紹介します。</Contents>
		<MemberCard />
		<HeadingTitle
			title={'Discography'}
			tooltip={'Introduce NewJeans members.'}
		/>
		<Box id="discography">
			<Contents>作品紹介</Contents>
			<Discography />
		</Box>
	</>
)
