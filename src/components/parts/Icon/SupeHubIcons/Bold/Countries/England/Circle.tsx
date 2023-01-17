import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Circle = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <mask
      id="mask0_1_3031"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={22}
      height={22}
    >
      <circle cx={12} cy={12} r={11} fill="white" />
    </mask>
    <g mask="url(#mask0_1_3031)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-4 0V24H28V0H-4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0H10V10H-4V14H10V24H14V14H28V10H14V0Z"
        fill="currentColor"
      />
    </g>
  </Icon>
)
