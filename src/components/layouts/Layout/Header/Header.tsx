import {
	Box,
	Button,
	Divider,
	Flex,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuGroup,
	MenuItem,
	MenuList,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react'
import Link from 'next/link'

import { AvatarImage } from '~/components/parts/AvatarImage'
import { CollapsedMenuIcon } from '~/components/parts/CollapsedMenuIcon'
import { Bell } from '~/components/parts/Icon/icons/linear/Bell'
import { Document } from '~/components/parts/Icon/icons/linear/Document'
import { Edit2 } from '~/components/parts/Icon/icons/linear/Edit2'
import { Export } from '~/components/parts/Icon/icons/linear/Export'
import { Key } from '~/components/parts/Icon/icons/linear/Key'
import { Message } from '~/components/parts/Icon/icons/linear/Message'
import { SearchNew } from '~/components/parts/Icon/icons/linear/SearchNew'
import { SearchNormal } from '~/components/parts/Icon/icons/linear/SearchNormal'
import { Sms } from '~/components/parts/Icon/icons/linear/Sms'
import { Logo } from '~/components/parts/Logo'

export type HeaderProps = {
	logout: () => void
}

export const Header: React.FC<HeaderProps> = ({ logout }) => (
	<Flex
		as="nav"
		align="center"
		justify="space-between"
		wrap="wrap"
		bg="white"
		p={4}
		mb="1px"
		w="100%"
		h="100%"
		boxShadow="xl"
	>
		<Flex align="center" ml={4}>
			<Logo />
		</Flex>
		<Box>
			<Flex color="gray.500">
				<Flex mt={2} mr={4} gap={4}>
					{/* <SearchNew /> */}
					{/* <Bell /> */}
				</Flex>
				<Menu>
					<MenuButton
						as={IconButton}
						icon={
							<CollapsedMenuIcon />
							// <Image
							// 	src="https://storage.googleapis.com/zenn-user-upload/avatar/82b349f493.jpeg"
							// 	h={8}
							// 	w={8}
							// 	rounded="full"
							// />
						}
						variant="ghost"
					/>
					<MenuList
						borderRadius={12}
						ml={8}
						mb={8}
						w={{ base: '260px', md: '300px' }}
						boxShadow="0px 2px 10px rgba(0, 0, 0, 0.05), 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.1)"
					>
						<MenuItem mt={-2}>
							<Box mt={2} mb={3} ml={4}>
								<Box color="black.900" mt={2} fontWeight={600}>
									Tokki
								</Box>
								<Box fontSize="2xs" color="black.400">
									{/* ID: 123456789 */}
								</Box>
							</Box>
						</MenuItem>
						<Divider mb={3} />
						<MenuGroup title="Menu" color="black.600">
							<Link href="#about">
								<MenuItem pl="4" fontSize="sm">
									About
								</MenuItem>
							</Link>
							<Link href="#members">
								<MenuItem pl="4" fontSize="sm">
									Members
								</MenuItem>
							</Link>
							<Link href="#discography">
								<MenuItem pl="4" fontSize="sm">
									Discography
								</MenuItem>
							</Link>
						</MenuGroup>
						{/* <MenuGroup title="サポート" paddingTop={2}>
							<MenuItem pl="4" fontSize="sm" icon={<Document fontSize="lg" />}>
								管理ページマニュアル
							</MenuItem>
						</MenuGroup> */}
						<MenuGroup title="ヘルプ" paddingTop={2}>
							<MenuItem pl="4" fontSize="sm">
								お問い合わせ
							</MenuItem>
						</MenuGroup>
						<Divider />
						<Box
							onClick={logout}
							fontSize="sm"
							ml={{ base: '148px', md: '188px' }}
							cursor="pointer"
							mb={3}
							mt={3}
						>
							<Box pr={1} as="span">
								<Export transform="rotate(90deg)" fontSize="lg" />
							</Box>
							ログアウト
						</Box>
					</MenuList>
				</Menu>{' '}
				<Button display={{ base: 'none', md: 'flex' }} ml={4}>
					Add new
				</Button>
			</Flex>
		</Box>
	</Flex>
)