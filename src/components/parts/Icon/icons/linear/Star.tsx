import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Star = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.73 3.51L15.49 7.03C15.73 7.52 16.37 7.99 16.91 8.08L20.1 8.61C22.14 8.95 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.02003 21.35C5.88003 22.62 4.58003 21.67 5.14003 19.25L5.85003 16.18C5.98003 15.6 5.75003 14.79 5.33003 14.37L2.85003 11.89C1.39003 10.43 1.86003 8.95 3.90003 8.61L7.09003 8.08C7.62003 7.99 8.26003 7.52 8.50003 7.03L10.26 3.51C11.22 1.6 12.78 1.6 13.73 3.51Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
