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
  | 'smallPaddingMassiveHeight'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  iconSvg?: object
  valueRadius?: object
  valueWidth?: object
  valueHeight?: object
}
