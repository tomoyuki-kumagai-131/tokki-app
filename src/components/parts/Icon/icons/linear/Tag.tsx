import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Tag = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.16989 15.2998L8.69989 19.8298C10.5599 21.6898 13.5799 21.6898 15.4499 19.8298L19.8399 15.4398C21.6999 13.5798 21.6999 10.5598 19.8399 8.6898L15.2999 4.1698C14.3499 3.2198 13.0399 2.7098 11.6999 2.7798L6.69989 3.0198C4.69989 3.1098 3.10989 4.6998 3.00989 6.6898L2.76989 11.6898C2.70989 13.0398 3.21989 14.3498 4.16989 15.2998Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.49988 12C10.8806 12 11.9999 10.8808 11.9999 9.50005C11.9999 8.11934 10.8806 7.00005 9.49988 7.00005C8.11917 7.00005 6.99988 8.11934 6.99988 9.50005C6.99988 10.8808 8.11917 12 9.49988 12Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Icon>
)
