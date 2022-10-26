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
  size: 48,
  rounding: prop('theme.radii.medium') as unknown as number,
  paddingLeft: 25,
  paddingRight: 25,
})

const normalAllMaterialsStyles = createShapeStyles({
  size: 72,
  rounding: prop('theme.radii.bigger') as unknown as number,
  paddingLeft: 24,
  paddingRight: 12,
})

const wideAllMaterialsStyles = createShapeStyles({
  size: 56,
  rounding: prop('theme.radii.big') as unknown as number,
  paddingLeft: 16,
  paddingRight: 12,
})

const smallAllCoursesStyles = createShapeStyles({
  size: 40,
  rounding: prop('theme.radii.medium') as unknown as number,
  paddingLeft: 12,
  paddingRight: 6,
})

const normalAllCoursesStyles = createShapeStyles({
  size: 56,
  rounding: prop('theme.radii.big') as unknown as number,
  paddingLeft: 20,
  paddingRight: 8,
})

const normalAdmissionProcessStyles = createShapeStyles({
  size: 80,
  rounding: prop('theme.radii.bigger') as unknown as number,
  paddingLeft: 24,
  paddingRight: 16,
})

const smallAdmissionProcessStyles = createShapeStyles({
  size: 56,
  rounding: prop('theme.radii.big') as unknown as number,
  paddingLeft: 16,
  paddingRight: 12,
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normalSocial: normalSocialStyles,
  wideSocial: wideSocialStyles,
  transparent: transparentStyles,
  normalAllMaterials: normalAllMaterialsStyles,
  wideAllMaterials: wideAllMaterialsStyles,
  smallAllCourses: smallAllCoursesStyles,
  normalAllCourses: normalAllCoursesStyles,
  normalAdmissionProcess: normalAdmissionProcessStyles,
  smallAdmissionProcess: smallAdmissionProcessStyles,
})
