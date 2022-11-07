import styled         from '@emotion/styled'

import { background } from 'styled-system'
import { layout }     from 'styled-system'
import { position }   from 'styled-system'
import { border }     from 'styled-system'

const Background = styled.div(
  ({ theme, gradient, radius }) => ({
    background: gradient ? theme.backgrounds[gradient] : 'none',
  }),
  background,
  layout,
  position,
  border
)
export { Background }
