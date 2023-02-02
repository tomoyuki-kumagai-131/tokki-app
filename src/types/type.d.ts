export type SigninData = {
	email: string
	password: string
}

export type LoginData = {
	email: string
	password: string
}

export type FormValues = {
	email: readonly string
	password: readonly string
}

export type TweetValues = {
	user?: { uid: string }
	tweet: string
	createdAt: Date
}

export type TweetData = {
	uid: string
	tweet: string
	createdAt: string
}
