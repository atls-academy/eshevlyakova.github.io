import styled         from '@emotion/styled'

import { background } from 'styled-system'
import { layout }     from 'styled-system'
import { position }   from 'styled-system'

const Background = styled.div(
  ({ theme, gradient, radius }) => ({
    background: gradient ? theme.backgrounds[gradient] : 'none',
    borderRadius: radius ? theme.radii[radius] : '0',
  }),
  background,
  layout,
  position
)
export { Background }
