import { Button } from '@chakra-ui/react'
import * as React from 'react'

export type Props = {
	isLoading?: boolean
	loadMore: () => void
}

export const ButtonLoadMore: React.FC<Props> = ({ isLoading, loadMore }) => {
	return (
		<Button onClick={loadMore} disabled={isLoading} isLoading={isLoading}>
			もっと見る
		</Button>
	)
}
