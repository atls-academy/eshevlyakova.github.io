import styled            from '@emotion/styled'

import React             from 'react'
import { background }    from 'styled-system'
import { layout }        from 'styled-system'

import { SectionBanner } from '@landing/banner-fragment'
import { HeaderBlock }   from '@landing/header-fragment'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'

const Hero = () => {
  const Background = styled<any>('div')(
    ({ theme, gradient }: any) => ({
      background: gradient ? theme.backgrounds[gradient] : 'none',
    }),
    background,
    layout
  )

  return (
    <>
      <Background
        display={['none', 'none', 'block']}
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
        display={['none', 'block', 'none']}
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
        display={['block', 'none', 'none']}
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
}

export { Hero }
