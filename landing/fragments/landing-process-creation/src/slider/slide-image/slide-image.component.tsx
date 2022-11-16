import React               from 'react'
import { FC }              from 'react'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'

import { SlideImageProps } from './slide-image.interface'

const SlideImage: FC<SlideImageProps> = ({ srcImage, srcMobileImage }) => (
  <Box>
    <Box width='100%' height={540} display={['none', 'flex', 'flex']}>
      <ImageBlock src={srcImage} />
    </Box>
    <Box width='100%' height={327} display={['flex', 'none', 'none']}>
      <ImageBlock src={srcMobileImage} />
    </Box>
  </Box>
)

export { SlideImage }
