import React             from 'react'

import { CreationBlock } from '@landing/process-creation-fragment'
import { RunLineBlock }  from '@landing/process-run-line-fragment'
import { StepsBlock }    from '@landing/process-steps-fragment'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'

const SectionProcess = () => (
  <Box
    backgroundColor='background.charcoal'
    borderTopLeftRadius={['bigger', 'semiHuge', 'semiGiant']}
    borderTopRightRadius={['bigger', 'semiHuge', 'semiGiant']}
  >
    <Column width='100%'>
      <StepsBlock />
      <RunLineBlock />
      <CreationBlock />
    </Column>
  </Box>
)
export { SectionProcess }
