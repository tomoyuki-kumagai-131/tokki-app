import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Members } from './Members'

export const MemberCard: React.FC = () => {
	return (
		<>
			<Box display={{ base: 'flex', md: 'none' }} pb={2}>
				<Swiper
					centeredSlides={true}
					slidesPerView={1} //一度に表示するスライドの数
					spaceBetween={16}
					pagination={{ clickable: true }}
					navigation
					loop={true}
					autoplay={{ delay: 1500 }}
					fadeEffect={{ crossFade: true }}
					speed={2500}
				>
					{Members.map((image: any) => (
						<SwiperSlide key="image.src">
							<Card mt={4} h="480px" w="382px">
								<CardBody>
									<Image
										src={image.src}
										alt="Green double couch with wooden legs"
										borderRadius="lg"
										w={{ base: '380px' }}
										h="300px"
										objectFit="cover"
									/>
									<Stack mt="6" spacing="3">
										<Heading size="md">{image.name}</Heading>
										<Text fontSize="xs">{image.description}</Text>
									</Stack>
								</CardBody>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
			<Box display={{ base: 'none', md: 'flex' }}>
				<Swiper
					centeredSlides={true}
					slidesPerView={3.5} //一度に表示するスライドの数
					pagination={{ clickable: true }}
					navigation
					loop={true}
					fadeEffect={{ crossFade: true }}
					speed={500}
				>
					{Members.map((image: any) => (
						<SwiperSlide key="image.src">
							<Card mt={4} h="480px" w="382px">
								<CardBody>
									<Image
										src={image.src}
										alt="Green double couch with wooden legs"
										borderRadius="lg"
										w={{ base: '380px' }}
										h="300px"
										objectFit="cover"
									/>
									<Stack mt="6" spacing="3">
										<Heading size="md">{image.name}</Heading>
										<Text fontSize="xs">{image.description}</Text>
									</Stack>
								</CardBody>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</>
	)
}
