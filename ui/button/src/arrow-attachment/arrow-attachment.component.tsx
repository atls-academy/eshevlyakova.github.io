import styled                   from '@emotion/styled'
import { ConditionalRender }    from '@atls-ui-parts/conditional-render'

import React                    from 'react'
import { FC }                   from 'react'
import { useMemo }              from 'react'

import { Box }                  from '@ui/layout'

import { ArrowAttachmentProps } from './arrow-attachment.interface'

const ArrowAttachment: FC<ArrowAttachmentProps> = ({ iconSvg }) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(), [])

  return iconSvg !== undefined ? (
    <Attachment>
      <Box
        width={[28, 32, 48]}
        height={[28, 32, 48]}
        justifyContent='center'
        alignItems='center'
        borderRadius={['micro', 'semiMedium', 'big']}
        backgroundColor='white'
      >
        {iconSvg}
      </Box>
    </Attachment>
  ) : null
}

export { ArrowAttachment }
