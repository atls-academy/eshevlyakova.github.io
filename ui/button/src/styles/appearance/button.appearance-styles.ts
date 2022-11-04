import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceTransparentWhiteDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhite.default.font'),
  backgroundColor: prop('theme.colors.button.transparentWhite.default.background'),
  borderColor: prop('theme.colors.button.transparentWhite.default.border'),
})

const appearanceTransparentWhiteHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhite.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentWhite.hover.background'),
  borderColor: prop('theme.colors.button.transparentWhite.hover.border'),
})

const appearanceTransparentWhitePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhite.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentWhite.pressed.background'),
  borderColor: prop('theme.colors.button.transparentWhite.pressed.border'),
})

const appearanceTransparentWhiteDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhite.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentWhite.disabled.background'),
  borderColor: prop('theme.colors.button.transparentWhite.disabled.border'),
})

const appearanceBorderTransparentWhiteDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.borderTransparentWhite.default.font'),
  backgroundColor: prop('theme.colors.button.borderTransparentWhite.default.background'),
  borderColor: prop('theme.colors.button.borderTransparentWhite.default.border'),
})

const appearanceBorderTransparentWhiteHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.borderTransparentWhite.hover.font'),
  backgroundColor: prop('theme.colors.button.borderTransparentWhite.hover.background'),
  borderColor: prop('theme.colors.button.borderTransparentWhite.hover.border'),
})

const appearanceBorderTransparentWhitePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.borderTransparentWhite.pressed.font'),
  backgroundColor: prop('theme.colors.button.borderTransparentWhite.pressed.background'),
  borderColor: prop('theme.colors.button.borderTransparentWhite.pressed.border'),
})

const appearanceBorderTransparentWhiteDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.borderTransparentWhite.disabled.font'),
  backgroundColor: prop('theme.colors.button.borderTransparentWhite.disabled.background'),
  borderColor: prop('theme.colors.button.borderTransparentWhite.disabled.border'),
})

const appearanceDarkPurpleBlueDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBlue.default.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBlue.default.background'),
  borderColor: prop('theme.colors.button.darkPurpleBlue.default.border'),
})

const appearanceDarkPurpleBlueHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBlue.hover.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBlue.hover.background'),
  borderColor: prop('theme.colors.button.darkPurpleBlue.hover.border'),
})

const appearanceDarkPurpleBluePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBlue.pressed.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBlue.pressed.background'),
  borderColor: prop('theme.colors.button.darkPurpleBlue.pressed.border'),
})

const appearanceDarkPurpleBlueDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBlue.disabled.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBlue.disabled.background'),
  borderColor: prop('theme.colors.button.darkPurpleBlue.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  transparentWhite: ifProp(
    prop('disabled', false),
    appearanceTransparentWhiteDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentWhitePressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentWhiteHoverStyles,
        appearanceTransparentWhiteDefaultStyles
      )
    )
  ),
  borderTransparentWhite: ifProp(
    prop('disabled', false),
    appearanceBorderTransparentWhiteDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceBorderTransparentWhitePressedStyles,
      ifProp(
        prop('hover', false),
        appearanceBorderTransparentWhiteHoverStyles,
        appearanceBorderTransparentWhiteDefaultStyles
      )
    )
  ),
  darkPurpleBlue: ifProp(
    prop('disabled', false),
    appearanceDarkPurpleBlueDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceDarkPurpleBluePressedStyles,
      ifProp(
        prop('hover', false),
        appearanceDarkPurpleBlueHoverStyles,
        appearanceDarkPurpleBlueDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
