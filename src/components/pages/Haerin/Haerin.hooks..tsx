import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	where,
} from 'firebase/firestore'

import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { db } from '~/firebase/client'
import { UseAuthContext } from '~/services/AuthContext'
import { TweetData } from '~/types/type'
import { TweetInputSchema } from '~/varidations/schema'

export const useHaerin = () => {
	const { user } = UseAuthContext()

	const [isLoading, setIsLoading] = useState(false)

	const [isShowPassword, setIsShowPassword] = useState(false)

	const [tweets, setTweets] = useState<TweetData[]>([])

	const getTweets = async () => {
		const querySnapshot = await getDocs(
			query(collection(db, 'haerin'), orderBy('createdAt', 'desc')),
		)

		const tweets = querySnapshot.docs.map((doc) => ({
			id: doc.data().id,
			uid: doc.data().uid,
			tweet: doc.data().tweet,
			createdAt: doc.data().createdAt.toDate().toLocaleString(),
		}))
		console.log(tweets)
		setTweets(tweets)
	}

	// つぶやき投稿（add)
	const onSubmit: SubmitHandler<TweetInputSchema> = async (data) => {
		setIsLoading(true)
		try {
			await addDoc(collection(db, 'haerin'), {
				id: Math.random().toString(12).substring(2),
				uid: user?.uid,
				tweet: data.tweet,
				createdAt: new Date(),
			})
			getTweets()
		} catch (e) {
			alert('投稿に失敗しました。')
		} finally {
			setIsLoading(false)
		}
	}
	// つぶやき削除 (delete)
	const deleteTweet = async (id: string) => {
		const userCollectionRef = collection(db, 'haerin')
		const q = query(userCollectionRef, where('id', '==', id))
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach(async (document) => {
			const documentRef = doc(db, 'haerin', document.id)
			await deleteDoc(documentRef)
			getTweets()
		})
		alert('削除しました')
	}

	const handleShow = () => {
		setIsShowPassword(!isShowPassword)
	}

	useEffect(() => {
		getTweets()
	}, [])

	return {
		onSubmit,
		handleShow,
		deleteTweet,
		getTweets,
		tweets,
		isLoading,
		isShowPassword,
		user,
	}
}
