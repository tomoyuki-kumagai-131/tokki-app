import { useToast } from '@chakra-ui/react'
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
import Router from 'next/router'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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

	const toast = useToast()

	const { reset } = useForm()

	// 新しい順にツイートを5件取得する
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

	// 古い順にツイートを5件取得する
	const getOldTweets = useCallback(async () => {
		setIsLoading(true)
		const myCollectionRef = collection(db, 'haerin')
		try {
			const querySnapshot = await getDocs(
				query(myCollectionRef, orderBy('createdAt', 'asc'), limit(5)),
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
			setTimeout(() => {
				setTweets([...tweets, ...tweets])
			}, 1200)

			setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])

			if (tweets.length == 0) {
				alert('これ以上つぶやきがありません。')
				getTweets()
			}
		} catch (e) {
			alert('つぶやきの取得に失敗しました。')
		} finally {
			setIsLoading(false)
		}
	}, [getTweets, lastDoc])

	const me = UseAuthContext()

	console.log(me.user?.uid)
	console.log(user?.uid)

	// つぶやき投稿（add)
	const onSubmit: SubmitHandler<TweetInputSchema> = useCallback(
		async (data) => {
			setIsLoading(true)
			try {
				await addDoc(collection(db, 'haerin'), {
					id: Math.random().toString(12).substring(2),
					uid: user?.uid,
					tweet: data.tweet,
					createdAt: new Date(),
				})
				toast({
					title: ' 投稿しました',
					description: "We've created your tweet.",
					status: 'success',
					duration: 1500,
					position: 'top',
					isClosable: true,
				})
				getTweets()
				// inputRef.current!.value = ''
			} catch (e) {
				console.log(e)
			} finally {
				setIsLoading(false)
			}
		},
		[getTweets, toast, user?.uid],
	)

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
	}, [getTweets, user])

	return {
		onSubmit,
		handleShow,
		deleteTweet,
		getTweets,
		getOldTweets,
		loadMore,
		tweets,
		isLoading,
		setIsLoading,
		isShowPassword,
		user,
	}
}
