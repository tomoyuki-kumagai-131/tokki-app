import { Icon, IconProps } from "@chakra-ui/react"
import * as React from "react"

export const InstagramColored = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <mask
      id="mask0_1_3231"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        d="M11.9972 2C9.28226 2 8.94184 2.01161 7.87547 2.05996C7.04629 2.07655 6.22595 2.23373 5.44937 2.52481C4.7851 2.78151 4.18181 3.17421 3.6782 3.67772C3.17458 4.18122 2.78175 4.78442 2.5249 5.44863C2.23328 6.22551 2.07609 7.04637 2.06005 7.87602C2.01234 8.94239 2.00009 9.28345 2.00009 12.0023C2.00009 14.7211 2.01234 15.0576 2.0607 16.124C2.07738 16.9533 2.23433 17.7738 2.5249 18.5507C2.78149 19.2146 3.17386 19.8177 3.67688 20.3213C4.1799 20.8248 4.78251 21.2179 5.44614 21.4752C6.22307 21.7658 7.04357 21.9227 7.87289 21.9394C8.93926 21.9877 9.27968 22 11.994 22C14.7083 22 15.0487 21.9877 16.115 21.9394C16.9446 21.9226 17.7653 21.7657 18.5424 21.4752C19.2063 21.2177 19.8091 20.8245 20.3125 20.3209C20.8158 19.8172 21.2085 19.2141 21.4656 18.5501C21.7551 17.7726 21.9122 16.9521 21.9305 16.1227C21.9782 15.0563 21.9904 14.7165 21.9904 12.001C21.9904 9.28539 21.9782 8.94433 21.9305 7.87795C21.9123 7.04874 21.7551 6.22845 21.4656 5.45121C21.2089 4.78694 20.8162 4.18366 20.3127 3.68004C19.8092 3.17642 19.206 2.78359 18.5418 2.52674C17.7645 2.23589 16.9435 2.07872 16.1138 2.06189C15.0474 2.01354 14.7076 2.00193 11.992 2.00193L11.9972 2ZM11.1004 3.80523H11.9972C14.6664 3.80523 14.9829 3.81425 16.0364 3.86261C16.6703 3.87021 17.2981 3.98666 17.8926 4.20689C18.3236 4.37339 18.715 4.62821 19.0416 4.95498C19.3683 5.28176 19.623 5.67325 19.7893 6.10432C20.0096 6.69875 20.126 7.32661 20.1336 7.96048C20.1813 9.0146 20.1923 9.33116 20.1923 11.9997C20.1923 14.6682 20.1813 14.9848 20.1336 16.0389C20.126 16.6728 20.0096 17.3006 19.7893 17.895C19.6228 18.3259 19.3681 18.7173 19.0414 19.0439C18.7148 19.3706 18.3235 19.6253 17.8926 19.7918C17.2982 20.0124 16.6703 20.1288 16.0364 20.1361C14.9829 20.1838 14.6664 20.1941 11.9972 20.1941C9.32803 20.1941 9.01147 20.1838 7.95799 20.1361C7.32408 20.1283 6.69622 20.0116 6.10183 19.7912C5.67077 19.6248 5.27927 19.3701 4.9525 19.0435C4.62572 18.7168 4.3709 18.3254 4.2044 17.8944C3.98354 17.3001 3.86706 16.6722 3.86012 16.0382C3.81177 14.9841 3.8021 14.6675 3.8021 11.9971C3.8021 9.32665 3.81177 9.01202 3.86012 7.9579C3.86746 7.324 3.98393 6.6961 4.2044 6.10174C4.37058 5.67039 4.62527 5.27864 4.95207 4.95173C5.27887 4.62481 5.67054 4.36999 6.10183 4.20367C6.69602 3.98249 7.32401 3.8658 7.95799 3.85874C8.87995 3.81683 9.23777 3.80458 11.1004 3.80265V3.80523ZM17.3329 5.46539C17.0956 5.46539 16.8636 5.53578 16.6663 5.66765C16.4689 5.79952 16.3152 5.98694 16.2244 6.20622C16.1336 6.4255 16.1099 6.66678 16.1562 6.89954C16.2025 7.1323 16.3169 7.34609 16.4847 7.51386C16.6526 7.68164 16.8665 7.79586 17.0993 7.84208C17.332 7.88831 17.5733 7.86445 17.7925 7.77354C18.0118 7.68263 18.1991 7.52874 18.3309 7.33135C18.4626 7.13395 18.5329 6.90191 18.5328 6.66458C18.5328 6.50705 18.5017 6.35106 18.4414 6.20552C18.3811 6.05999 18.2927 5.92776 18.1813 5.8164C18.0699 5.70504 17.9376 5.61672 17.792 5.55649C17.6465 5.49627 17.4905 5.46531 17.3329 5.46539ZM11.9972 6.8638C10.9815 6.86304 9.98835 7.16354 9.14345 7.7273C8.29855 8.29106 7.63983 9.09274 7.25063 10.0309C6.86143 10.9691 6.75924 12.0017 6.95697 12.998C7.15471 13.9942 7.64349 14.9095 8.36148 15.6279C9.07948 16.3464 9.99443 16.8357 10.9906 17.0341C11.9867 17.2325 13.0194 17.1309 13.9578 16.7423C14.8962 16.3537 15.6983 15.6955 16.2626 14.8509C16.8269 14.0064 17.128 13.0135 17.1279 11.9977C17.1277 10.6367 16.5872 9.3315 15.6252 8.36883C14.6631 7.40616 13.3582 6.86483 11.9972 6.8638ZM11.9972 8.66903C12.6566 8.66916 13.3012 8.86487 13.8493 9.23141C14.3975 9.59795 14.8246 10.1188 15.0767 10.7282C15.3287 11.3375 15.3944 12.0079 15.2653 12.6546C15.1363 13.3013 14.8183 13.8951 14.3517 14.361C13.885 14.8269 13.2907 15.144 12.6438 15.272C11.997 15.4001 11.3266 15.3334 10.7177 15.0804C10.1087 14.8274 9.58852 14.3995 9.22283 13.8507C8.85714 13.302 8.66243 12.6572 8.66332 11.9977C8.6634 11.56 8.74971 11.1267 8.91731 10.7223C9.0849 10.318 9.33051 9.95062 9.6401 9.64121C9.94968 9.33181 10.3172 9.08641 10.7216 8.91905C11.1261 8.75169 11.5595 8.66564 11.9972 8.66581V8.66903Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_1_3231)">
      <path
        d="M12.0022 -1.54137C6.34986 -1.54137 4.69614 -1.53556 4.37507 -1.50913C3.44897 -1.47204 2.5406 -1.24352 1.7072 -0.837972C1.12444 -0.554697 0.597459 -0.168797 0.151478 0.301256C-0.711286 1.20221 -1.26126 2.35686 -1.41714 3.59451C-1.50869 4.22827 -1.53512 4.35722 -1.54092 7.5918C-1.54092 8.67043 -1.54092 10.0895 -1.54092 11.9927C-1.54092 17.6418 -1.53448 19.2942 -1.5074 19.6146C-1.46906 20.521 -1.24985 21.4105 -0.862674 22.2309C-0.501193 22.9715 0.0164466 23.625 0.654627 24.1465C1.29281 24.6679 2.03638 25.0449 2.83418 25.2515C3.47877 25.4051 4.13754 25.4915 4.79994 25.5093C5.1352 25.5242 8.55288 25.5345 11.9725 25.5345C15.3921 25.5345 18.8117 25.5306 19.1386 25.5139C19.8253 25.5008 20.5084 25.4113 21.1753 25.2469C21.9747 25.0419 22.7197 24.6648 23.3582 24.142C23.9968 23.6192 24.5134 22.9632 24.8721 22.22C25.2534 21.4158 25.4704 20.5437 25.5104 19.6546C25.5285 19.4212 25.5362 15.7011 25.5362 11.9862C25.5362 8.27134 25.5278 4.55773 25.5098 4.32434C25.4708 3.42538 25.2492 2.54377 24.8586 1.73319C24.5728 1.13698 24.1793 0.59865 23.6981 0.145233C22.7946 -0.715028 21.6394 -1.26338 20.4016 -1.41951C19.7692 -1.51106 19.6434 -1.53814 16.4043 -1.54395L12.0022 -1.54137Z"
        fill="url(#paint0_radial_1_3231)"
      />
      <path
        d="M12.0022 -1.54137C6.34986 -1.54137 4.69614 -1.53556 4.37507 -1.50913C3.44897 -1.47204 2.5406 -1.24352 1.7072 -0.837972C1.12444 -0.554697 0.597459 -0.168797 0.151478 0.301256C-0.711286 1.20221 -1.26126 2.35686 -1.41714 3.59451C-1.50869 4.22827 -1.53512 4.35722 -1.54092 7.5918C-1.54092 8.67043 -1.54092 10.0895 -1.54092 11.9927C-1.54092 17.6418 -1.53448 19.2942 -1.5074 19.6146C-1.46906 20.521 -1.24985 21.4105 -0.862674 22.2309C-0.501193 22.9715 0.0164466 23.625 0.654627 24.1465C1.29281 24.6679 2.03638 25.0449 2.83418 25.2515C3.47877 25.4051 4.13754 25.4915 4.79994 25.5093C5.1352 25.5242 8.55288 25.5345 11.9725 25.5345C15.3921 25.5345 18.8117 25.5306 19.1386 25.5139C19.8253 25.5008 20.5084 25.4113 21.1753 25.2469C21.9747 25.0419 22.7197 24.6648 23.3582 24.142C23.9968 23.6192 24.5134 22.9632 24.8721 22.22C25.2534 21.4158 25.4704 20.5437 25.5104 19.6546C25.5285 19.4212 25.5362 15.7011 25.5362 11.9862C25.5362 8.27134 25.5278 4.55773 25.5098 4.32434C25.4708 3.42538 25.2492 2.54377 24.8586 1.73319C24.5728 1.13698 24.1793 0.59865 23.6981 0.145233C22.7946 -0.715028 21.6394 -1.26338 20.4016 -1.41951C19.7692 -1.51106 19.6434 -1.53814 16.4043 -1.54395L12.0022 -1.54137Z"
        fill="url(#paint1_radial_1_3231)"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_1_3231"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(5.71226 27.6708) rotate(-90) scale(26.8432 24.9616)"
      >
        <stop stopColor="#FFDD55" />
        <stop offset={0.1} stopColor="#FFDD55" />
        <stop offset={0.5} stopColor="#FF543E" />
        <stop offset={1} stopColor="#C837AB" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_1_3231"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-6.12027 0.291312) rotate(78.6774) scale(11.9968 49.4501)"
      >
        <stop stopColor="#3771C8" />
        <stop offset={0.128} stopColor="#3771C8" />
        <stop offset={1} stopColor="#6600FF" stopOpacity={0} />
      </radialGradient>
    </defs>
  </Icon>
)
