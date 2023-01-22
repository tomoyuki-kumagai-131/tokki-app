import { useRouter } from 'next/router'
import { auth } from '~/firebase/client'
import { UseAuthContext } from '~/services/AuthContext'

export const useHeader = () => {
	const { user } = UseAuthContext()
	const router = useRouter()
	const handleLogout = () => {
		auth.signOut()
		router.push('/signin')
	}

	return {
		user,
		handleLogout,
	}
}
