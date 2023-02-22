import { collection, getDocs, query, where } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { auth, db } from '~/firebase/client'
import { UseAuthContext } from '~/services/AuthContext'

export const useMyPage = () => {
	const { user } = UseAuthContext()

	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)

	const [me, setMe] = useState('')

	// 新しい順にツイートを5件取得する
	const getUser = useCallback(async () => {
		setIsLoading(true)
		const myCollectionRef = collection(db, 'users')
		const currentUser = user?.email

		try {
			const querySnapshot = await getDocs(
				query(myCollectionRef, where('email', '==', currentUser)),
			)
			console.log(querySnapshot)
			if (!querySnapshot.empty) {
				// クエリでドキュメントが取得できたかを確認
				const userData = querySnapshot.docs[0].data()
				console.log(userData)

				setMe(userData)
			} else {
				alert('ユーザー情報が見つかりませんでした。')
			}
		} catch (e) {
			alert('ユーザー情報取得に失敗しました。')
		} finally {
			setIsLoading(false)
		}
	}, [])

	const handleLogout = () => {
		auth.signOut()
		router.push('/signin')
	}

	useEffect(() => {
		getUser()
	}, [getUser])

	console.log(me)
	console.log(user)

	return {
		user,
		me,
		handleLogout,
	}
}
