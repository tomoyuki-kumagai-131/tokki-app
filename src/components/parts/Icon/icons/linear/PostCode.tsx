import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Postcode = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <rect x={4} y={5} width={16} height={1.5} rx={0.75} fill="currentColor" />
    <rect x={4} y={10} width={16} height={1.5} rx={0.75} fill="currentColor" />
    <rect
      x={13}
      y={11}
      width={10}
      height={1.5}
      rx={0.75}
      transform="rotate(90 13 11)"
      fill="currentColor"
    />
  </Icon>
)
