import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const Thetanetwork = (props: IconProps) => (
  <Icon viewBox="0 0 48 48" fill="none" {...props}>
    <rect width={48} height={48} rx={24} fill="currentColor" />
    <path
      d="M15.7275 9.96045H31.9789V38.0309H15.7275V9.96045Z"
      stroke="url(#paint0_linear_1_3393)"
      strokeWidth={5.90582}
      strokeLinejoin="bevel"
    />
    <path
      d="M28.7772 28.4275H25.4118V31.9532H22.3751V28.4275H19.0098V25.3908H28.7772V28.4275ZM28.7772 19.7269H25.4118V16.2012H22.3751V19.7269H19.0098V22.7636H28.7772V19.7269Z"
      fill="url(#paint1_linear_1_3393)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_3393"
        x1={11.9982}
        y1={12.1407}
        x2={35.707}
        y2={35.8495}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2AB8E6" />
        <stop offset={0.53} stopColor="#29CAD2" />
        <stop offset={1} stopColor="#2EE4BE" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_3393"
        x1={19.1952}
        y1={19.3789}
        x2={28.5929}
        y2={28.7766}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2AB8E6" />
        <stop offset={0.53} stopColor="#29CAD2" />
        <stop offset={1} stopColor="#2EE4BE" />
      </linearGradient>
    </defs>
  </Icon>
)
