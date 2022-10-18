import styled                 from '@emotion/styled'

import React                  from 'react'
import { background }         from 'styled-system'

import { SectionBanner }      from '@landing/banner-fragment'
import { SectionDescription } from '@landing/description-fragment'
import { HeaderBlock }        from '@landing/header-fragment'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'

export const HomePage = () => {
  const Background = styled<any>('div')(background)

  return (
    <>
      <Background
        background={[
          'mobileBannerBlockBackground',
          'mobileBannerBlockBackground',
          'bannerBlockBackground',
        ]}
      >
        <Box width='100%'>
          <Column width='100%'>
            <HeaderBlock />
            <SectionBanner />
          </Column>
        </Box>
      </Background>
      <SectionDescription />
    </>
  )
}

export default HomePage
