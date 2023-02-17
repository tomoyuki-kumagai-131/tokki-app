import React, { ReactNode } from 'react'
import {
	Box,
	Flex,
	Icon,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	useDisclosure,
	BoxProps,
	FlexProps,
} from '@chakra-ui/react'
import { FiHome, FiTrendingUp, FiSettings } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import NextLink from 'next/link'

interface LinkItemProps {
	name: string
	icon: IconType
	href: string
}
const LinkItems: Array<LinkItemProps> = [
	{ name: 'Home', icon: FiHome, href: '/' },
	{ name: 'About', icon: FiTrendingUp, href: '/#about' },
	{ name: 'Discography', icon: FiSettings, href: '/#discography' },
]

export default function SideMenu({ children }: { children: ReactNode }) {
	const { isOpen, onClose } = useDisclosure()
	return (
		<Box ml={{ base: 0, md: 200 }}>
			<SidebarContent
				position={{ md: 'fixed' }}
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			{/* <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} /> */}
			<Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box>
		</Box>
	)
}

interface SidebarProps extends BoxProps {
	onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			// display={{ base: 'none' }}
			mt={3}
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
			textDecoration="none"
		>
			{LinkItems.map((link) => (
				<Link as={NextLink} href={link.href} key={link.name} border="none">
					<NavItem icon={link.icon} key={link.name} textDecoration="none">
						{link.name}
					</NavItem>
				</Link>
			))}
		</Box>
	)
}

interface NavItemProps extends FlexProps {
	icon: IconType
	children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
	return (
		<Link
			// display={{ base: 'none' }}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: 'cyan.400',
					color: 'white',
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: 'white',
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	)
}

// interface MobileProps extends FlexProps {
// 	onOpen: () => void
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
// 	return (
// 		<Flex
// 			ml={{ base: 0, md: 60 }}
// 			px={{ base: 4, md: 24 }}
// 			height="20"
// 			alignItems="center"
// 			bg={useColorModeValue('white', 'gray.900')}
// 			borderBottomWidth="1px"
// 			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
// 			justifyContent="flex-start"
// 			{...rest}
// 		>
// 			<IconButton
// 				variant="outline"
// 				onClick={onOpen}
// 				aria-label="open menu"
// 				icon={<FiMenu />}
// 			/>

// 			<Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
// 				Logo
// 			</Text>
// 		</Flex>
// 	)
// }
