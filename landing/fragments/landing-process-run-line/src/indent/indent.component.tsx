import React       from 'react'

import { Divider } from '@ui/divider'
import { Box }     from '@ui/layout'
import { Layout }  from '@ui/layout'

const Indent = () => (
  <Box flexShrink={0} width={[51, 73, 96]}>
    <Layout flexBasis={[12, 18, 24]} />
    <Box width={[27, 37, 48]}>
      <Divider weight={[2, 4, 4]} backgroundColor='background.white' />
    </Box>
    <Layout flexBasis={[12, 18, 24]} />
  </Box>
)

export { Indent }
