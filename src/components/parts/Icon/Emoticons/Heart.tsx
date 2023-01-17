import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Heart = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 1C15.0522 1 13.2295 1.86694 12 3.34912C10.7705 1.86694 8.94775 1 7 1C3.41601 1 0.5 3.91577 0.5 7.5C0.5 13.666 11.2266 22.5134 11.6836 22.887C11.7754 22.9624 11.8877 23 12 23C12.1123 23 12.2246 22.9624 12.3164 22.887C12.7734 22.5134 23.5 13.666 23.5 7.5C23.5 3.91577 20.584 1 17 1Z"
      fill="url(#paint0_linear_1_442)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_442"
        x1={12}
        y1={1}
        x2={12}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5747" />
        <stop offset={1} stopColor="#FFBC7D" />
      </linearGradient>
    </defs>
  </Icon>
)
