import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const ToggleOff = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <rect x={1} y={5} width={22} height={14} rx={7} fill="currentColor" />
    <circle cx={8} cy={12} r={5} fill="white" />
  </Icon>
)
