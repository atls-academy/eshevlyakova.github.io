import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'transparentWhite' | 'borderTransparentWhite' | 'darkPurpleBlue'

export type ButtonSize =
  | 'normalPaddingBigHeight'
  | 'bigPaddingNormalHeight'
  | 'mediumPaddingNormalHeight'
  | 'mediumPaddingHugeHeight'
  | 'normalPaddingExtraHeight'
  | 'smallPaddingMediumHeight'
  | 'mediumPaddingExtraHeight'
  | 'mediumPaddingGiantHeight'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
}
