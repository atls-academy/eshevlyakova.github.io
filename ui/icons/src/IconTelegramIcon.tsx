import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const IconTelegramIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.285 5.09863L3.34049 11.208C2.25234 11.6423 2.25863 12.2455 3.14085 12.5144L7.23445 13.7833L16.7058 7.84549C17.1537 7.57473 17.5629 7.72039 17.2265 8.01706L9.55283 14.8985H9.55103L9.55283 14.8994L9.27045 19.0921C9.68413 19.0921 9.86669 18.9035 10.0987 18.681L12.0871 16.7598L16.2229 19.7953C16.9855 20.2126 17.5332 19.9982 17.7229 19.0939L20.4379 6.38002C20.7158 5.27288 20.0126 4.77158 19.285 5.09863Z'
        fill='white'
      />
    </svg>
  )
}
