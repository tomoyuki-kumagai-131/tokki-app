import { onAuthStateChanged, User } from 'firebase/auth'
import { useRouter } from 'next/router'
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { auth } from '~/firebase/client'

export type UserType = User | null

export type AuthContextProps = {
	user: UserType
}

export type AuthProps = {
	children: ReactNode
}

const AuthContext = createContext<Partial<AuthContextProps>>({})

export const UseAuthContext = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProps) => {
	const router = useRouter()

	const [user, setUser] = useState<UserType>(null)
	const value = { user }

	const isAvailableForViewing =
		router.pathname === '/about' ||
		router.pathname === '/' ||
		router.pathname === '/signin'

	useEffect(() => {
		const authStateChanged = onAuthStateChanged(auth, async (user) => {
			setUser(user)
			!user && !isAvailableForViewing && (await router.push('/login'))
		})
		return () => authStateChanged()
	}, [isAvailableForViewing, router])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
