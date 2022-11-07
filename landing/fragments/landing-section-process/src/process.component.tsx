import React          from 'react'

import { StepsBlock } from '@landing/process-steps-fragment'
import { Box }        from '@ui/layout'

const SectionProcess = () => (
  <Box
    backgroundColor='background.charcoal'
    borderTopLeftRadius={['bigger', 'semiHuge', 0]}
    borderTopRightRadius={['bigger', 'semiHuge', 0]}
  >
    <StepsBlock />
  </Box>
)
export { SectionProcess }
