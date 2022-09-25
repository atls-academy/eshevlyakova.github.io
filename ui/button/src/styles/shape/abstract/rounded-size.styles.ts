import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getRoundedSizeStyles = (theme): styleFn => {
  const roundedSizeStyles = createShapeStyles({
    size: 56,
    fontSize: theme.fontSizes.semiRegular,
    rounding: theme.radii.huge,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
    paddingLeft: 18,
    paddingRight: 18,
    paddingRatio: 0,
  })

  return roundedSizeStyles
}

export { getRoundedSizeStyles }
