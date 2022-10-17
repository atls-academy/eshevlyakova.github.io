import React                  from 'react'

import { SectionBanner }      from '@landing/banner-fragment'
import { SectionDescription } from '@landing/description-fragment'
import { HeaderBlock }        from '@landing/header-fragment'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { theme }              from '@ui/theme'

export const HomePage = () => (
  <>
    <Box
      width='100%'
      background={[
        theme.backgrounds.mobileBannerBlockBackground,
        theme.backgrounds.mobileBannerBlockBackground,
        theme.backgrounds.bannerBlockBackground,
      ]}
      backgroundSize={['contain', 'cover', 'cover']}
      backgroundPosition={['top center', 'top center', '0 0']}
      backgroundRepeat='no-repeat'
    >
      <Column width='100%'>
        <HeaderBlock />
        <SectionBanner />
      </Column>
    </Box>
    <SectionDescription />
  </>
)

export default HomePage
