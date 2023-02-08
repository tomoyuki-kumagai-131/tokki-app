/* eslint-disable react/no-children-prop */
import {
	Box,
	Button,
	Card,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react'
import {
	Field,
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { FormValues, SigninData } from '~/types/type'
import { useSignin } from './Signin.hooks'
import { IconAt, IconLock, IconMan } from '@tabler/icons'
import { Header } from '~/components/layouts/Layout/Header'
import Link from 'next/link'
import { EyeSlash } from '~/components/parts/Icon/icons/linear/EyeSlash'
import { Eye } from '~/components/parts/Icon/icons/linear/Eye'
import { AvatarImage } from '~/components/parts/AvatarImage'

type Props = {
	onSubmit: SubmitHandler<SigninData>
	handleSubmit: UseFormHandleSubmit<FormValues>
	handleShow: () => void
	register: UseFormRegister<FormValues>
	errors: Partial<FieldErrorsImpl<FormValues>>
	isDirty?: boolean
	isShowPassword?: boolean
	isLoading?: boolean
}

export const Component: React.FC<Props> = ({
	onSubmit,
	register,
	handleSubmit,
	handleShow,
	isLoading,
	isShowPassword,
}) => (
	<>
		<Header
			logout={function (): void {
				throw new Error('Function not implemented.')
			}}
		/>
		<Box p={4} display="flex" justifyContent="center" alignItems="center">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Card
					p={4}
					mt={12}
					borderRadius={12}
					w={{ base: '330px', md: '400px' }}
				>
					<Box textAlign="center" mt={4}>
						新規登録
					</Box>
					<Box mt={2}>
						<FormLabel>メールアドレス</FormLabel>
						<InputGroup>
							<InputLeftElement
								color="gray.300"
								pointerEvents="none"
								children={<IconAt />}
							/>
							<Input
								id="email"
								{...register('email', {
									required: true,
								})}
							/>
						</InputGroup>
					</Box>
					<Box mt={4}>
						<FormLabel>パスワード</FormLabel>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								color="gray.300"
								children={<IconLock fontSize="sm" />}
							/>
							<Input
								id="password"
								type={isShowPassword ? 'text' : 'password'}
								{...register('password', {
									required: true,
								})}
							/>
							<InputRightElement width="4.5rem" onClick={handleShow}>
								{/* <Button h="1.75rem" size="sm" onClick={handleShow}> */}
								{isShowPassword ? <EyeSlash /> : <Eye />}
								{/* </Button> */}
							</InputRightElement>
						</InputGroup>
					</Box>
					<Box mb={8} mt={8} textAlign="center">
						<Button isLoading={isLoading} type="submit">
							新規登録
						</Button>
					</Box>
					<Box textAlign="center">
						ログインは
						<Link href={'/login'}>
							<Box
								as="span"
								className="border-b border-black cursor-pointer"
								borderBottom="1px"
								cursor="pointer"
							>
								こちら
							</Box>
						</Link>
					</Box>
				</Card>
			</form>
		</Box>
	</>
)

export const Signin = () => {
	const {
		onSubmit,
		register,
		handleSubmit,
		errors,
		isDirty,
		isLoading,
		isShowPassword,
		handleShow,
	} = useSignin()

	return (
		<Component
			onSubmit={onSubmit}
			register={register}
			handleSubmit={handleSubmit}
			handleShow={handleShow}
			errors={errors}
			isDirty={isDirty}
			isLoading={isLoading}
			isShowPassword={isShowPassword}
		/>
	)
}
