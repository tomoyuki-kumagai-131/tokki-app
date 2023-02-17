import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	DocumentData,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
	where,
} from 'firebase/firestore'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { set } from 'zod'
import { db } from '~/firebase/client'
import { UseAuthContext } from '~/services/AuthContext'
import { TweetData } from '~/types/type'
import { TweetInputSchema } from '~/varidations/schema'

export const useHaerin = () => {
	const { user } = UseAuthContext()

	const [isLoading, setIsLoading] = useState(false)

	const [isShowPassword, setIsShowPassword] = useState(false)

	const [tweets, setTweets] = useState<TweetData[]>([])

	const [lastDoc, setLastDoc] = useState<DocumentData | null>(null)

	const getTweets = useCallback(async () => {
		setIsLoading(true)
		const myCollectionRef = collection(db, 'haerin')
		try {
			const querySnapshot = await getDocs(
				query(myCollectionRef, orderBy('createdAt', 'desc'), limit(5)),
			)

			const tweets = querySnapshot.docs.map((doc) => ({
				id: doc.data().id,
				uid: doc.data().uid,
				tweet: doc.data().tweet,
				createdAt: doc.data().createdAt.toDate().toLocaleString(),
			}))
			setTweets(tweets)
			setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])
		} catch (e) {
			alert('つぶやきの取得に失敗しました。')
		} finally {
			setIsLoading(false)
		}
	}, [])

	// もっと見るボタンを押した時の処理
	const loadMore = useCallback(async () => {
		setIsLoading(true)
		const myCollectionRef = collection(db, 'haerin')

		try {
			const querySnapshot = await getDocs(
				query(
					myCollectionRef,
					orderBy('createdAt', 'desc'),
					startAfter(lastDoc),
					limit(5),
				),
			)
			const tweets = querySnapshot.docs.map((doc) => ({
				id: doc.data().id,
				uid: doc.data().uid,
				tweet: doc.data().tweet,
				createdAt: doc.data().createdAt.toDate().toLocaleString(),
			}))
			setTweets([...tweets, ...tweets])
			console.log(tweets)

			setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])
		} catch (e) {
			alert('つぶやきの取得に失敗しました。')
		} finally {
			setIsLoading(false)
		}
	}, [lastDoc])

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
	}, [getTweets])

	return {
		onSubmit,
		handleShow,
		deleteTweet,
		getTweets,
		loadMore,
		tweets,
		isLoading,
		isShowPassword,
		user,
	}
}
