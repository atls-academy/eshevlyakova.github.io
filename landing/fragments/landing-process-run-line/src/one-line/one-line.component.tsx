import styled        from '@emotion/styled'
import { keyframes } from '@emotion/react'

import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Repeater }  from '@ui/utils'

const infinityLine = keyframes`
   0%   { transform: translateX(0) }
 100% { transform: translate(-50%) }
`

const AnimationBox = styled(Box)({
  animation: `${infinityLine} 200s linear infinite`,
})

const OneLine: FC = (props) => {
  const { children } = props
  return (
    <Box>
      <AnimationBox alignItems='center'>
        <Repeater quantity={50}>{() => children}</Repeater>
      </AnimationBox>
    </Box>
  )
}

export { OneLine }
