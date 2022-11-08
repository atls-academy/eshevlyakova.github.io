import React            from 'react'

import { Background }   from '@ui/background'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'

import { DesktopSteps } from './desktop-steps'
import { MobileSteps }  from './mobile-steps'

const StepsBlock = () => (
  <Background
    width='100%'
    gradient='purpleImageGradient'
    backgroundSize={['100%', '100%', '100%']}
    backgroundRepeat='no-repeat'
    backgroundPosition='right center'
  >
    <Box justifyContent='center'>
      <Layout flexBasis={[20, 25, 30]} flexShrink={0} />
      <Column width={['100%', '100%', 1760]}>
        <Layout flexBasis={[36, 62, 114]} />
        <DesktopSteps />
        <MobileSteps />
        <Layout flexBasis={[0, 10, 114]} />
      </Column>
      <Layout flexBasis={[20, 25, 30]} flexShrink={0} />
    </Box>
  </Background>
)

export { StepsBlock }
