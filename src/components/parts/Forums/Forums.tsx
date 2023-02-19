import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Grid,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'
import Link from 'next/link'
// import { Carousel } from 'react-responsive-carousel'
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
// import { Header } from '~/components/layouts/Layout/Header'

// SwiperCore.use([Navigation, Pagination, Autoplay])

export const Forums: React.FC = () => {
	return (
		<Grid templateColumns="repeat(2, 1fr)" gap={1} mx={4} mt={4}>
			<Card maxW={200}>
				<CardHeader>
					<Heading size="md">Haerin</Heading>
				</CardHeader>
				<CardBody display="flex" justifyContent={'center'}>
					<Image
						src="/images/haerin.jpeg"
						h={200}
						fill="Background"
						alt={''}
						borderRadius={4}
					/>
				</CardBody>
				<CardFooter textAlign={'right'}>
					<Box
						textAlign={'center'}
						display="flex"
						justifyContent={'center'}
						mx={'auto'}
					>
						<Button
							fontWeight={600}
							color={'white'}
							bg="pink.100"
							_hover={{
								bg: 'pink.400',
								color: 'white',
							}}
						>
							<Link href="/members/haerin">Haerin</Link>
						</Button>
					</Box>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<Heading size="md">Hannni</Heading>
				</CardHeader>
				<CardBody display="flex" justifyContent={'center'}>
					<Image
						src="/images/hanni.jpeg"
						h={200}
						fill="Background"
						alt={''}
						borderRadius={4}
					/>
				</CardBody>
				<CardFooter>
					<Box
						textAlign={'center'}
						display="flex"
						justifyContent={'center'}
						mx={'auto'}
					>
						<Button
							fontWeight={600}
							color={'white'}
							bg="pink.100"
							_hover={{
								bg: 'pink.400',
								color: 'white',
							}}
						>
							<Link href="/members/haerin">Haerin</Link>
						</Button>
					</Box>
				</CardFooter>
			</Card>
		</Grid>
	)
}
