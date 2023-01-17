import { Box, Image } from '@chakra-ui/react'
// import { Carousel } from 'react-responsive-carousel'
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
// import { Header } from '~/components/layouts/Layout/Header'

// SwiperCore.use([Navigation, Pagination, Autoplay])

export const Hero: React.FC = () => {
	return (
		<Box>
			<Box
				mt={4}
				mx={4}
				display="flex"
				justifyContent="center"
				borderRadius={10}
			>
				<Image
					src="/images/1.jpg"
					fill="Background"
					alt={''}
					borderRadius={4}
				/>
			</Box>
		</Box>
	)
}
