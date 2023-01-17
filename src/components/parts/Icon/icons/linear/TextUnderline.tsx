import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const TextUnderline = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 21H19"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
