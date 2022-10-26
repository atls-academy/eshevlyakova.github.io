import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'transparentWhite' | 'borderTransparentWhite' | 'darkPurpleBlue'

export type ButtonSize =
  | 'normalSocial'
  | 'wideSocial'
  | 'transparent'
  | 'normalAllMaterials'
  | 'wideAllMaterials'
  | 'smallAllCourses'
  | 'normalAllCourses'
  | 'normalAdmissionProcess'
  | 'smallAdmissionProcess'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
}
