import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const PlusIcon = (props: IconProps) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 1C8.55228 1 9 1.44772 9 2L9 7L14 7C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14L7 9H2C1.44772 9 1 8.55228 1 8C1 7.44771 1.44772 7 2 7L7 7L7 2C7 1.44772 7.44772 1 8 1Z'
        fill='white'
      />
    </svg>
  )
}
