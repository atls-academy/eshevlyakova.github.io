import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowTopIcon = (props: IconProps) => {
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
        d='M8 5L8.61872 4.38128C8.27701 4.03957 7.72299 4.03957 7.38128 4.38128L8 5ZM1.38128 10.3813C1.03957 10.723 1.03957 11.277 1.38128 11.6187C1.72299 11.9604 2.27701 11.9604 2.61872 11.6187L1.38128 10.3813ZM13.3813 11.6187C13.723 11.9604 14.277 11.9604 14.6187 11.6187C14.9604 11.277 14.9604 10.723 14.6187 10.3813L13.3813 11.6187ZM7.38128 4.38128L1.38128 10.3813L2.61872 11.6187L8.61872 5.61872L7.38128 4.38128ZM7.38128 5.61872L13.3813 11.6187L14.6187 10.3813L8.61872 4.38128L7.38128 5.61872Z'
        fill='#3A375D'
      />
    </svg>
  )
}
