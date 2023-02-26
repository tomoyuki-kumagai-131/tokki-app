import { useToast } from '@chakra-ui/react'
import {
	addDoc,
	arrayRemove,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	DocumentData,
	DocumentSnapshot,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	setDoc,
	startAfter,
	updateDoc,
	where,
} from 'firebase/firestore'
import Router from 'next/router'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { set } from 'zod'
import { auth, db } from '~/firebase/client'
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

	const [favorite, setFavorite] = useState(false)

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
				isFavorite: doc.data().isFavorite,
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
				isFavorite: doc.data().isFavorite,
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
				isFavorite: doc.data().isFavorite,
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

	// console.log(me.user?.uid)
	// console.log(user?.uid)

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
				// inputRef.current!.value = ''
			} catch (e) {
				console.log(e)
			} finally {
				setIsLoading(false)
				location.reload()
			}
		},
		[toast, user?.uid],
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

	// const handleFavorite = useCallback(
	// 	async (id: string) => {
	// 		if (!user) return alert('ログインしてください')
	// 		const userCollectionRef = collection(db, 'haerin')
	// 		const q = query(userCollectionRef, where('id', '==', id))

	// 		const querySnapshot = await getDocs(q)

	// 		querySnapshot.forEach(async (document) => {
	// 			const documentRef = doc(db, 'haerin', document.id)
	// 			await addDoc(documentRef, {
	// 				isFavorite: true,
	// 			})
	// 			getTweets()
	// 		})
	// 	},
	// 	[favorite, user],
	// )

	// お気に入りボタンをクリックした時に呼ばれる関数
	const handleFavorite = async (id: string) => {
		if (!user) return alert('ログインしてください')

		const userDocRef = doc(db, 'users', user.uid)
		const userDoc = await getDoc(userDocRef)
		const favorites = userDoc.data()?.favorites || []

		if (favorites.includes(id)) {
			// 既にお気に入り登録されている場合は、favoritesフィールドからツイートのidを削除する
			await updateDoc(userDocRef, {
				favorites: favorites.filter((favoriteId: string) => favoriteId !== id),
			})
			alert('お気に入りから削除しました')
			// tweetsコレクションの該当ツイートのisFavoriteフィールドをfalseに更新する
			// const tweetDocRef = doc(db, 'haerin', id)
			// await updateDoc(tweetDocRef, {
			// 	isFavorite: false,
			// })
		} else {
			// お気に入り登録されていない場合は、favoritesフィールドにツイートのidを追加する
			await setDoc(
				userDocRef,
				{
					favorites: [...favorites, id],
				},
				{ merge: true },
			)
			alert('お気に入りに追加しました')
			// tweetsコレクションの該当ツイートのisFavoriteフィールドをtrueに更新する
			// const tweetDocRef = doc(db, 'haerin', id)
			// await updateDoc(tweetDocRef, {
			// 	isFavorite: true,
			// })
		}
	}

	const [isFavorite, setIsFavorite] = useState<TweetData[]>([])

	const fetchFavorites = async () => {
		if (!user) return
		try {
			const userRef = doc(db, 'users', user?.uid)
			const userDoc = await getDoc(userRef)
			if (userDoc.exists()) {
				const favoritesData = userDoc.data().favorites || []
				setIsFavorite(favoritesData)
			}
		} catch (error) {
			console.error('Error fetching favorites:', error)
		}
	}

	// const handleFavorite = useCallback(
	// 	async (id: string) => {
	// 		const userCollectionRef = collection(db, 'haerin')
	// 		const q = query(userCollectionRef, where('id', '==', id))
	// 		const querySnapshot = await getDocs(q)
	// 		querySnapshot.forEach(async (document) => {
	// 			const documentRef = doc(db, 'haerin', document.id)
	// 			const documentData = document.data()
	// 			if (documentData.isFavorite === true) {
	// 				await updateDoc(documentRef, {
	// 					isFavorite: false,
	// 				})
	// 				alert('お気に入りから削除しました')
	// 				getTweets()
	// 			} else {
	// 				await updateDoc(documentRef, {
	// 					isFavorite: true,
	// 				})
	// 				alert('お気に入りに追加しました')
	// 				getTweets()
	// 			}
	// 		})
	// 	},
	// 	[getTweets],
	// )

	console.log(isFavorite)

	useEffect(() => {
		getTweets()
		fetchFavorites()
	}, [getTweets, user])

	return {
		user,
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
		handleFavorite,
	}
}
