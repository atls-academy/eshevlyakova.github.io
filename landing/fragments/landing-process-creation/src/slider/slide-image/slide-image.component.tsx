import styled              from '@emotion/styled'

import React               from 'react'
import { FC }              from 'react'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'

import { SlideImageProps } from './slide-image.interface'

const SlideImage: FC<SlideImageProps> = ({ srcImage, srcMobileImage }) => {
  const Image = styled(ImageBlock)`
    object-fit: contain;
  `

  return (
    <Box justifyContent='center'>
      <Box width='100%' height={[0, 370, 540]} display={['none', 'flex', 'flex']}>
        <ImageBlock src={srcImage} />
      </Box>
      <Box width={155} height={327} display={['flex', 'none', 'none']}>
        <Image src={srcMobileImage} />
      </Box>
    </Box>
  )
}

export { SlideImage }
