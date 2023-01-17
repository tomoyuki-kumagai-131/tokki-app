import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Circle = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <mask
      id="mask0_1_3024"
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
    <g mask="url(#mask0_1_3024)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0001 1H23.0001V23H16.0001V1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.00009 1H8.00009V23H1.00009V1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00009 1H16.0001V23H8.00009V1Z"
        fill="currentColor"
      />
    </g>
  </Icon>
)
