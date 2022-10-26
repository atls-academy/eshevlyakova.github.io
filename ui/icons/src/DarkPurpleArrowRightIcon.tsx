import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const DarkPurpleArrowRightIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.5 8.5L12.1187 9.11872C12.4604 8.77701 12.4604 8.22299 12.1187 7.88128L11.5 8.5ZM6.11872 1.88128C5.77701 1.53957 5.22299 1.53957 4.88128 1.88128C4.53957 2.22299 4.53957 2.77701 4.88128 3.11872L6.11872 1.88128ZM4.88128 13.8813C4.53957 14.223 4.53957 14.777 4.88128 15.1187C5.22299 15.4604 5.77701 15.4604 6.11872 15.1187L4.88128 13.8813ZM12.1187 7.88128L6.11872 1.88128L4.88128 3.11872L10.8813 9.11872L12.1187 7.88128ZM10.8813 7.88128L4.88128 13.8813L6.11872 15.1187L12.1187 9.11872L10.8813 7.88128Z'
        fill='#3A375D'
      />
    </svg>
  )
}
