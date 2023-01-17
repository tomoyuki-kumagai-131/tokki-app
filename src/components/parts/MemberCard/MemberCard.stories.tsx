import { ComponentMeta } from '@storybook/react'

import { MemberCard } from './MemberCard'

export default { component: MemberCard } as ComponentMeta<typeof MemberCard>
export const Default = {
	args: {
		// src: '/images/haerin.jpeg',
		// name: 'Haerin',
		// description:
		// 	'2019年10月にBigHits主催のグローバルオーディションで合格し、2020年、中学2年生の時に練習生生活を開始。事務所に入社する前までは、韓国の伝統芸能であるパンソリを習っていたそう。猫顔が特徴。',
	},
}
