/* eslint-disable react/no-children-prop */
import { Box, Button, Card } from '@chakra-ui/react'
import { UserType } from '~/services/AuthContext'
import { UserData } from '~/types/type'
import { useMyPage } from './MyPage.hooks'

type Props = {
	user: UserType | undefined
	handleLogout: () => void
	me: UserData | null
}

export const Component: React.FC<Props> = ({ user, me, handleLogout }) => (
	<>
		<Box textAlign={'left'}>
			<Card py={4} w={400} display="flex" justifyContent={'center'} mx="auto">
				<Box ml={4}>ID: {user?.uid}</Box>
				<Box ml={4}>Email: {user?.email}</Box>
				<Box ml={4}>Name: {me?.name}</Box>
			</Card>
			<Box textAlign={'center'} mt={10}>
				<Button onClick={handleLogout} w={100}>
					ログアウト
				</Button>
			</Box>
		</Box>
	</>
)

export const MyPage = () => {
	const { handleLogout, user, me } = useMyPage()

	console.log(me)

	return <Component user={user} handleLogout={handleLogout} me={me} />
}
