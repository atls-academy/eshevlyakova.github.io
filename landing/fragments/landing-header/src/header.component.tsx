import React    from 'react'

import { Box, Layout }  from '@ui/layout'
import { Logo } from '@ui/logo'

const HeaderBlock = () => (
  <Box
    backgroundColor='background.gray'
    flexDirection='column'
    alignItems='center'>
    <Layout flexBasis={[20, 22, 30]}/>
    <Box width='98%' maxWidth={[600, 790, 2500]}>
      <Box width={[36, 40, 56]}>
        <Logo />
      </Box>
    </Box>
    <Layout flexBasis={[20, 22, 30]}/>
  </Box>
)
export { HeaderBlock }
