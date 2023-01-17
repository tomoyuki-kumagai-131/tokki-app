import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Neo = (props: IconProps) => (
  <Icon viewBox="0 0 48 48" fill="none" {...props}>
    <rect width={48} height={48} rx={24} fill="currentColor" />
    <g clipPath="url(#clip0_1_3315)">
      <path
        d="M11.0001 14.5827V34.2206L23.7468 38.7935V18.9963L37.5371 13.9135L25.0215 9.43625L11.0001 14.5827Z"
        fill="currentColor"
      />
      <path
        d="M24.7911 19.5618V30.3009L37.5378 34.8738V14.8456L24.7911 19.5618Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_3315">
        <rect
          width={26.537}
          height={29.3572}
          fill="white"
          transform="translate(11.0089 9.43625)"
        />
      </clipPath>
    </defs>
  </Icon>
)
