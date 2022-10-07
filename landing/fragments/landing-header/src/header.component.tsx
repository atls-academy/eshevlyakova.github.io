import React                   from 'react'

import { Box }                 from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout } from '@ui/layout'
import { Logo }                from '@ui/logo'

const HeaderBlock = () => (
  <Box backgroundColor='background.gray'>
    <Column width='100%' alignItems='center'>
      <Layout flexBasis={[20, 22, 30]} />
      <Box width='98%' maxWidth={[600, 790, 1920]}>
        <Box width={[36, 40, 56]}>
          <Logo />
        </Box>
      </Box>
      <Layout flexBasis={[20, 22, 30]} />
    </Column>
  </Box>
)
export { HeaderBlock }
