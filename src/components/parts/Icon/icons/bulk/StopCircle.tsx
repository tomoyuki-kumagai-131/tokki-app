import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const StopCircle = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      opacity={0.4}
      d="M11.9697 22C17.4926 22 21.9697 17.5228 21.9697 12C21.9697 6.47715 17.4926 2 11.9697 2C6.44688 2 1.96973 6.47715 1.96973 12C1.96973 17.5228 6.44688 22 11.9697 22Z"
      fill="currentColor"
    />
    <path
      d="M10.7695 16.23H13.2295C14.8895 16.23 16.2295 14.89 16.2295 13.23V10.77C16.2295 9.11002 14.8895 7.77002 13.2295 7.77002H10.7695C9.10953 7.77002 7.76953 9.11002 7.76953 10.77V13.23C7.76953 14.89 9.10953 16.23 10.7695 16.23Z"
      fill="currentColor"
    />
  </Icon>
)
