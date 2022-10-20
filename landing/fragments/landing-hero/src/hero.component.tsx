import React             from 'react'

import { SectionBanner } from '@landing/banner-fragment'
import { HeaderBlock }   from '@landing/header-fragment'
import { Background }    from '@ui/background'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'

const Hero = () => (
  <>
    <Background
      display={['none', 'none', 'flex']}
      gradient='purpleGradientWithBigImage'
      backgroundSize='100% 100%'
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
