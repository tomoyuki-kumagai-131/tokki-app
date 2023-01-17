import {
	Box,
	Button,
	CloseButton,
	Flex,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import { TITLES } from './TITLES'

export const Discography: React.FC = () => {
	const modal1 = useDisclosure()
	const modal2 = useDisclosure()

	return (
		<>
			<Box display="flex" justifyContent="center" mt={4} gap={4}>
				<Flex gap={6}>
					{TITLES.map((item) => (
						<>
							<Image
								key={item.title}
								src={`${item.src}`}
								onClick={
									item.modal === 'modal1' ? modal1.onOpen : modal2.onOpen
								}
								borderRadius="lg"
								w={{ base: '150px' }}
								h="170px"
								objectFit="cover"
								alt=""
							/>
							<Modal
								isCentered
								isOpen={item.modal === 'modal1' ? modal1.isOpen : modal2.isOpen}
								onClose={
									item.modal === 'modal1' ? modal1.onClose : modal2.onClose
								}
							>
								<ModalOverlay />
								<ModalContent mx={4}>
									<ModalHeader>{item.title}</ModalHeader>
									<ModalCloseButton />
									<ModalBody>
										<Flex>
											<Image
												src={`${item.src}`}
												borderRadius="lg"
												w={{ base: '150px' }}
												h="170px"
												objectFit="cover"
												alt=""
											/>
											<Flex ml={4}>{item.title}</Flex>
										</Flex>
									</ModalBody>

									<ModalFooter>
										<Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
											<CloseButton />
										</Button>
									</ModalFooter>
								</ModalContent>
							</Modal>
						</>
					))}
				</Flex>
			</Box>
		</>
	)
}
