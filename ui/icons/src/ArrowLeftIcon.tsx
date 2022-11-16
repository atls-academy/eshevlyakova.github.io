import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowLeftIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.5 8L4.05806 7.55806C3.81398 7.80214 3.81398 8.19786 4.05806 8.44194L4.5 8ZM9.05806 13.4419C9.30214 13.686 9.69786 13.686 9.94194 13.4419C10.186 13.1979 10.186 12.8021 9.94194 12.5581L9.05806 13.4419ZM9.94194 3.44194C10.186 3.19786 10.186 2.80214 9.94194 2.55806C9.69786 2.31398 9.30214 2.31398 9.05806 2.55806L9.94194 3.44194ZM4.05806 8.44194L9.05806 13.4419L9.94194 12.5581L4.94194 7.55806L4.05806 8.44194ZM4.94194 8.44194L9.94194 3.44194L9.05806 2.55806L4.05806 7.55806L4.94194 8.44194Z'
        fill='white'
      />
    </svg>
  )
}
