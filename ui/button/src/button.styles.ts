import { createBaseStyles }    from '@atls-ui-parts/button'
import { createShapeStyles }   from '@atls-ui-parts/button'
import { createContentStyles } from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

const normalSocialStyles = createShapeStyles({
  size: 56,
  rounding: prop('theme.radii.big') as unknown as number,
  paddingLeft: 16,
  paddingRight: 16,
})

const wideSocialStyles = createShapeStyles({
  size: 44,
  rounding: prop('theme.radii.big') as unknown as number,
  paddingLeft: 34,
  paddingRight: 34,
})

const transparentStyles = createShapeStyles({
  size: 52,
  rounding: prop('theme.radii.medium') as unknown as number,
  paddingLeft: 30,
  paddingRight: 30,
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normalSocial: normalSocialStyles,
  wideSocial: wideSocialStyles,
  transparent: transparentStyles,
})
