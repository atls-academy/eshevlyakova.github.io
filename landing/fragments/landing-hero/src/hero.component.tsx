import React             from 'react'

import { SectionBanner } from '@landing/banner-fragment'
import { HeaderBlock }   from '@landing/header-fragment'
import { Background }    from '@ui/background'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'

const Hero = () => (
  <>
    <Background
      position='relative'
      display={['none', 'none', 'flex']}
      gradient='purpleGradientWithBigImage'
      backgroundSize='contain, cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='right top -20px, 0 0'
    >
      <Box width='100%' zIndex={1}>
        <Column width='100%'>
          <HeaderBlock />
          <SectionBanner />
        </Column>
      </Box>
      <Background
        position='absolute'
        bottom={0}
        width='100%'
        height={200}
        gradient='transparentPurple'
        backgroundSize='cover'
      />
    </Background>
    <Background
      display={['none', 'flex', 'none']}
      gradient='purpleGradientWithSmallImage'
      backgroundSize='cover'
      backgroundPosition='top center'
      backgroundRepeat='no-repeat'
    >
      <Box width='100%'>
        <Column width='100%'>
          <HeaderBlock />
          <SectionBanner />
        </Column>
      </Box>
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      gradient='purpleGradientWithSmallImage'
      backgroundSize='contain'
      backgroundPosition='top center'
      backgroundRepeat='no-repeat'
    >
      <Box width='100%'>
        <Column width='100%'>
          <HeaderBlock />
          <SectionBanner />
        </Column>
      </Box>
    </Background>
  </>
)

export { Hero }
