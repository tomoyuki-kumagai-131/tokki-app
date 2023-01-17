import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const FolderColored = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 3H17C19.2091 3 21 4.79086 21 7V11H9V3Z"
      fill="url(#paint0_linear_1_3151)"
    />
    <path
      d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.33 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.67 12.93 5.26L11.53 3.4C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54Z"
      fill="url(#paint1_linear_1_3151)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_3151"
        x1={15}
        y1={3}
        x2={15}
        y2={6.55556}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC471" />
        <stop offset={1} stopColor="#FB9F4B" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_3151"
        x1={12}
        y1={2}
        x2={12}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD8A0" />
        <stop offset={1} stopColor="#FFC48E" />
      </linearGradient>
    </defs>
  </Icon>
)
