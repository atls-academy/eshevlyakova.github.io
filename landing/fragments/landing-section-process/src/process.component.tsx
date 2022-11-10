import React            from 'react'

import { RunLineBlock } from '@landing/process-run-line-fragment'
import { StepsBlock }   from '@landing/process-steps-fragment'
import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'

const SectionProcess = () => (
  <Box
    backgroundColor='background.charcoal'
    borderTopLeftRadius={['bigger', 'semiHuge', 0]}
    borderTopRightRadius={['bigger', 'semiHuge', 0]}
  >
    <Column width='100%'>
      <StepsBlock />
      <RunLineBlock />
    </Column>
  </Box>
)
export { SectionProcess }
