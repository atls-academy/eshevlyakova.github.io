import styled                   from '@emotion/styled'
import { ConditionalRender }    from '@atls-ui-parts/conditional-render'

import React                    from 'react'
import { FC }                   from 'react'
import { useMemo }              from 'react'

import { ArrowRightIcon }       from '@ui/icons'
import { Box }                  from '@ui/layout'

import { RightAttachmentProps } from './right-attachment.interface'

const RightAttachment: FC<RightAttachmentProps> = ({ icon }) => {
  const Attachment = useMemo(() => styled(ConditionalRender()), [])

  return icon === 'arrow-right' ? (
    <Attachment>
      <Box
        width={48}
        height={48}
        justifyContent='center'
        alignItems='center'
        borderRadius='big'
        backgroundColor='white'
      >
        <ArrowRightIcon />
      </Box>
    </Attachment>
  ) : null
}

export { RightAttachment }
