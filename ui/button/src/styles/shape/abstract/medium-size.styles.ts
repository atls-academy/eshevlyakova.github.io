import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getMediumSizeStyles = (theme): styleFn => {
  const mediumSizeStyles = createShapeStyles({
    size: 40,
    fontSize: theme.fontSizes.semiRegular,
    rounding: theme.radii.huge,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
    paddingLeft: 16,
    paddingRight: 16,
    paddingRatio: 0,
  })

  return mediumSizeStyles
}

export { getMediumSizeStyles }
