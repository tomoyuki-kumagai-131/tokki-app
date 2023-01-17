import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const TextBold = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.88 4.5C4.88 3.4 5.78 2.5 6.88 2.5H12C14.62 2.5 16.75 4.63 16.75 7.25C16.75 9.87 14.62 12 12 12H4.88V4.5Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.88 12H14.38C17 12 19.13 14.13 19.13 16.75C19.13 19.37 17 21.5 14.38 21.5H6.88C5.78 21.5 4.88 20.6 4.88 19.5V12V12Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
