import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { auth, db } from '~/firebase/client'
import { UseAuthContext } from '~/services/AuthContext'
import { FormValues, UserData } from '~/types/type'

export const useSignin = () => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<FormValues>({
		criteriaMode: 'all',
		mode: 'onSubmit',
	})
	const { user } = UseAuthContext()

	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)

	const [isShowPassword, setIsShowPassword] = useState(false)

	// 新規登録
	const onSubmit: SubmitHandler<UserData> = async (data) => {
		setIsLoading(true)
		try {
			await createUserWithEmailAndPassword(auth, data.email, data.password)
			const user = auth.currentUser
			console.log(user)
			await addDoc(collection(db, 'users'), {
				uid: user?.uid,
				id: Math.random().toString(12).substring(2),
				email: data.email,
				password: data.password,
				name: data.name,
				createdAt: new Date(),
				favorites: [],
			})
			setIsLoading(false)
			router.push('/')
		} catch (e) {
			alert('新規登録に失敗しました。')
		} finally {
			setIsLoading(false)
		}
	}

	const handleShow = () => {
		setIsShowPassword(!isShowPassword)
	}

	return {
		onSubmit,
		register,
		watch,
		handleSubmit,
		handleShow,
		isDirty,
		isLoading,
		isShowPassword,
		errors,
	}
}
