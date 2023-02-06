import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { auth } from '~/firebase/client'
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

	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)

	const [isShowPassword, setIsShowPassword] = useState(false)

	// 新規登録
	const onSubmit: SubmitHandler<UserData> = async (data) => {
		setIsLoading(true)
		try {
			await createUserWithEmailAndPassword(auth, data.email, data.password)
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
