import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const DarkPurpleArrowBottomIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6 8.25L5.64645 8.60355C5.84171 8.79882 6.15829 8.79882 6.35355 8.60355L6 8.25ZM10.8536 4.10355C11.0488 3.90829 11.0488 3.59171 10.8536 3.39645C10.6583 3.20118 10.3417 3.20118 10.1464 3.39645L10.8536 4.10355ZM1.85355 3.39645C1.65829 3.20118 1.34171 3.20118 1.14645 3.39645C0.951184 3.59171 0.951185 3.90829 1.14645 4.10355L1.85355 3.39645ZM6.35355 8.60355L10.8536 4.10355L10.1464 3.39645L5.64645 7.89645L6.35355 8.60355ZM6.35355 7.89645L1.85355 3.39645L1.14645 4.10355L5.64645 8.60355L6.35355 7.89645Z'
        fill='#3A375D'
      />
    </svg>
  )
}
