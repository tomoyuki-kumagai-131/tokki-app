import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const PauseCircle = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      opacity={0.4}
      d="M11.9697 22C17.4926 22 21.9697 17.5228 21.9697 12C21.9697 6.47715 17.4926 2 11.9697 2C6.44688 2 1.96973 6.47715 1.96973 12C1.96973 17.5228 6.44688 22 11.9697 22Z"
      fill="currentColor"
    />
    <path
      d="M10.72 15.03V8.96999C10.72 8.48999 10.52 8.29999 10.01 8.29999H8.71C8.2 8.29999 8 8.48999 8 8.96999V15.03C8 15.51 8.2 15.7 8.71 15.7H10C10.52 15.7 10.72 15.51 10.72 15.03Z"
      fill="currentColor"
    />
    <path
      d="M16 15.03V8.96999C16 8.48999 15.8 8.29999 15.29 8.29999H14C13.49 8.29999 13.29 8.48999 13.29 8.96999V15.03C13.29 15.51 13.49 15.7 14 15.7H15.29C15.8 15.7 16 15.51 16 15.03Z"
      fill="currentColor"
    />
  </Icon>
)
