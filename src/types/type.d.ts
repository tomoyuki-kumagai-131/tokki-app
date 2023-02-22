export type UserData = {
	email: string
	password: string
	name: string
}

export type FormValues = {
	email: readonly string
	password: readonly string
	name: readonly string
}

export type TweetData = {
	id: string
	uid: string
	tweet: string
	createdAt: string
}
