import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { db } from '~/firebase/client'
import { UseAuthContext } from '~/services/AuthContext'
import { FormValues, SigninData, TweetData } from '~/types/type'

export const useHaerin = () => {
	const { user } = UseAuthContext()

	const [isLoading, setIsLoading] = useState(false)

	const [isShowPassword, setIsShowPassword] = useState(false)

	const [tweets, setTweets] = useState<TweetData[]>([])

	// つぶやき投稿（add)
	const onSubmit: SubmitHandler<TweetData> = async (data) => {
		setIsLoading(true)
		try {
			await addDoc(collection(db, 'haerin'), {
				uid: user?.uid,
				tweet: data.tweet,
				createdAt: new Date(),
			})
			setIsLoading(false)
		} catch (e) {
			alert('投稿に失敗しました。')
		}
	}

	const handleShow = () => {
		setIsShowPassword(!isShowPassword)
	}

	useEffect(() => {
		const getTweets = async () => {
			const querySnapshot = await getDocs(
				query(collection(db, 'haerin'), orderBy('createdAt', 'asc')),
			)
			console.log(querySnapshot)

			const tweets = querySnapshot.docs.map((doc) => ({
				uid: doc.data().uid,
				tweet: doc.data().tweet,
				createdAt: doc.data().createdAt,
			}))
			setTweets(tweets)
		}
		getTweets()
	}, [])

	return {
		onSubmit,
		handleShow,
		tweets,
		isLoading,
		isShowPassword,
		user,
	}
}
