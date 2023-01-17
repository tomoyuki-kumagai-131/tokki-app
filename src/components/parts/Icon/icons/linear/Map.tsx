import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Map = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2.28998 7.78001V17.51C2.28998 19.41 3.63998 20.19 5.27998 19.25L7.62998 17.91C8.13998 17.62 8.98998 17.59 9.51998 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.49001C22 4.59001 20.65 3.81001 19.01 4.75001L16.66 6.09001C16.15 6.38001 15.3 6.41001 14.77 6.14001L9.51998 3.52001C8.98998 3.26001 8.13998 3.28001 7.62998 3.57001L3.29998 6.05001C2.73998 6.37001 2.28998 7.15001 2.28998 7.78001Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.56 4V17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.73 6.62V20"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
