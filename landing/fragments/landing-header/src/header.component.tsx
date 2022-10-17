import React      from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Logo }   from '@ui/logo'

const HeaderBlock = () => (
  <Box backgroundColor='background.gray'>
    <Column width='100%' alignItems='center'>
      <Layout flexBasis={[20, 22, 30]} />
      <Box width='100%'>
        <Layout flexBasis={[10, 15, 30]} />
        <Box width={[36, 40, 56]}>
          <Logo />
        </Box>
        <Layout flexBasis={[10, 15, 30]} />
      </Box>
      <Layout flexBasis={[20, 22, 30]} />
    </Column>
  </Box>
)
export { HeaderBlock }
