import { useCallback, useState } from "react"

import type { Props } from "~/components/parts/AvatarImage"

const DUMMY_IMAGE_PATH = "/images/Avatar.png"

export const useAvatarImage = ({ src }: { src?: Props["src"] }) => {
  const [imageSrc, setImageSrc] = useState(src || DUMMY_IMAGE_PATH)

  const onError = useCallback(() => {
    setImageSrc(DUMMY_IMAGE_PATH)
  }, [])

  return {
    imageSrc,
    onError,
  }
}
