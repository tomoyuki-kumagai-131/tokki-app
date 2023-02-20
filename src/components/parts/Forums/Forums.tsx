import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Grid,
	GridItem,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const MEMBERS = [
	{
		name: 'Haerin',
		image: '/images/haerin.jpeg',
		href: '/members/haerin',
	},
	{
		name: 'Hannni',
		image: '/images/hanni.jpeg',
		href: '/members/hanni',
	},
	{
		name: 'Danielle',
		image: '/images/danielle.jpeg',
		href: '/members/danielle',
	},
	{
		name: 'Minji',
		image: '/images/minji.jpeg',
		href: '/members/minji',
	},
	{
		name: 'Hyein',
		image: '/images/hyein.jpeg',
		href: '/members/hyein',
	},
	{
		name: 'NewJeans',
		image: '/images/1.jpg',
		href: '/members/newjeans',
	},
]

export const Forums: React.FC = () => {
	return (
		<>
			<Grid
				// display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={4}
				mx={{ base: 6, md: 16 }}
				mt={4}
				textAlign="center"
				templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
			>
				{MEMBERS.map((member, index) => (
					<GridItem key={index}>
						<Card maxW={{ base: 200, md: 800 }} w={{ base: 165, md: 240 }}>
							<CardHeader>
								<Link href={member.href}>
									<Heading size="md">{member.name}</Heading>
								</Link>
							</CardHeader>
							<CardBody display="flex" justifyContent={'center'}>
								<Link href={member.href}>
									<Image src={member.image} height={100} width={150} alt={''} />
								</Link>
							</CardBody>
							<CardFooter textAlign={'right'}>
								<Box
									textAlign={'center'}
									display="flex"
									justifyContent={'center'}
									mx={'auto'}
								>
									<Button
										fontWeight="bold"
										color={'white'}
										bg="gray.300"
										_hover={{
											bg: 'pink.400',
											color: 'white',
										}}
									>
										<Link href={member.href}>{member.name}</Link>
									</Button>
								</Box>
							</CardFooter>
						</Card>
					</GridItem>
				))}
			</Grid>
		</>
	)
}
