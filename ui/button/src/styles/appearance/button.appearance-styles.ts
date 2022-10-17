import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceSocialDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.default.font'),
  backgroundColor: prop('theme.colors.button.social.default.background'),
  borderColor: prop('theme.colors.button.social.default.border'),
})

const appearanceSocialHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.hover.font'),
  backgroundColor: prop('theme.colors.button.social.hover.background'),
  borderColor: prop('theme.colors.button.social.hover.border'),
})

const appearanceSocialPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.pressed.font'),
  backgroundColor: prop('theme.colors.button.social.pressed.background'),
  borderColor: prop('theme.colors.button.social.pressed.border'),
})

const appearanceSocialDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.disabled.font'),
  backgroundColor: prop('theme.colors.button.social.disabled.background'),
  borderColor: prop('theme.colors.button.social.disabled.border'),
})

const appearanceTransparentDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.default.font'),
  backgroundColor: prop('theme.colors.button.transparent.default.background'),
  borderColor: prop('theme.colors.button.transparent.default.border'),
})

const appearanceTransparentHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.hover.font'),
  backgroundColor: prop('theme.colors.button.transparent.hover.background'),
  borderColor: prop('theme.colors.button.transparent.hover.border'),
})

const appearanceTransparentPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparent.pressed.background'),
  borderColor: prop('theme.colors.button.transparent.pressed.border'),
})

const appearanceTransparentDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparent.disabled.background'),
  borderColor: prop('theme.colors.button.transparent.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  social: ifProp(
    prop('disabled', false),
    appearanceSocialDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSocialPressedStyles,
      ifProp(prop('hover', false), appearanceSocialHoverStyles, appearanceSocialDefaultStyles)
    )
  ),
  transparent: ifProp(
    prop('disabled', false),
    appearanceTransparentDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentHoverStyles,
        appearanceTransparentDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
