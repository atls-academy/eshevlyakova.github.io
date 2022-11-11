import styled                   from '@emotion/styled'
import { ConditionalRender }    from '@atls-ui-parts/conditional-render'

import React                    from 'react'
import { FC }                   from 'react'
import { useMemo }              from 'react'

import { Box }                  from '@ui/layout'

import { ArrowAttachmentProps } from './arrow-attachment.interface'

const ArrowAttachment: FC<ArrowAttachmentProps> = ({
  iconSvg,
  valueRadius,
  valueWidth,
  valueHeight,
}) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(), [])

  return iconSvg !== undefined ? (
    <Attachment>
      <Box
        width={valueWidth}
        height={valueHeight}
        justifyContent='center'
        alignItems='center'
        borderRadius={valueRadius}
        backgroundColor='white'
      >
        {iconSvg}
      </Box>
    </Attachment>
  ) : null
}

export { ArrowAttachment }
