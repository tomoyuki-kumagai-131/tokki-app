import { Box, BoxProps } from "@chakra-ui/react"
import Image from "next/image"
import * as React from "react"

import { useAvatarImage } from "~/components/parts/AvatarImage/AvatarImage.hooks"

export type Props = BoxProps & {
  src?: string
  showShadow?: boolean
}

export const AvatarImage: React.FC<Props> = ({
  src,
  width = 148,
  height = 148,
  showShadow = true,
  ...props
}) => {
  const { imageSrc, onError } = useAvatarImage({
    src,
  })
  return (
    <Box position="relative" width={width} height={height} {...props}>
      {showShadow && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          bg="primary.100"
          right={{
            base: "-4px",
            md: "-8px",
          }}
          bottom={{
            base: "-3px",
            md: "-6px",
          }}
          rounded="full"
        />
      )}
      <Box
        rounded="full"
        position="absolute"
        left="0"
        top="0"
        width="100%"
        height="100%"
        overflow="hidden"
      >
        <Image
          src={imageSrc}
          style={{
            objectPosition: "center",
          }}
          alt=""
          fill
          unoptimized
          onError={onError}
        />
      </Box>
    </Box>
  )
}
