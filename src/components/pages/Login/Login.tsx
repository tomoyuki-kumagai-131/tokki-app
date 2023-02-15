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
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { FormValues, UserData } from '~/types/type'
import { useLogin } from './Lognin.hooks'
import { IconAt, IconLock } from '@tabler/icons'
import { Header } from '~/components/layouts/Layout/Header'
import Link from 'next/link'
import { Eye } from '~/components/parts/Icon/icons/linear/Eye'
import { EyeSlash } from '~/components/parts/Icon/icons/linear/EyeSlash'

type Props = {
	onSubmit: SubmitHandler<UserData>
	handleSubmit: UseFormHandleSubmit<FormValues>
	handleShow: () => void
	register: UseFormRegister<FormValues>
	errors: Partial<FieldErrorsImpl<FormValues>>
	isDirty?: boolean
	isLoading?: boolean
	isShowPassword?: boolean
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
						ログイン
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
								{isShowPassword ? <EyeSlash /> : <Eye />}
							</InputRightElement>
						</InputGroup>
					</Box>
					<Box mb={8} mt={8} textAlign="center">
						<Button isLoading={isLoading} type="submit">
							ログイン
						</Button>
					</Box>
					<Box textAlign="center">
						新規登録は
						<Link href={'/signin'}>
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

export const Login = () => {
	const {
		onSubmit,
		register,
		handleSubmit,
		handleShow,
		isShowPassword,
		errors,
		isDirty,
		isLoading,
	} = useLogin()

	return (
		<Component
			onSubmit={onSubmit}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			isDirty={isDirty}
			isLoading={isLoading}
			handleShow={handleShow}
			isShowPassword={isShowPassword}
		/>
	)
}
