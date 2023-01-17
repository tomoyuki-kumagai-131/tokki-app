import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Messenger = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.7 18.4V22L9 20.1C9.9 20.4 10.9 20.5 12 20.5C17.5 20.5 22 16.4 22 11.2C22 6.1 17.5 2 12 2C6.5 2 2 6.1 2 11.3C2 14.2 3.4 16.7 5.7 18.4Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3 9.2L7.5 13.7L11.2 12.8L12.7 13.7L16.5 9.2L13 10.1L11.3 9.2Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
