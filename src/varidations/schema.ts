import { z } from 'zod'

export const schema = z.object({
	tweet: z.string().min(1, { message: '呟きは必須です' }),
})

export type TweetInputSchema = z.infer<typeof schema>
