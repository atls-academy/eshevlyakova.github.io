import { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.drawer.backdrop,
  backdropFilter: 'blur(12px)',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
})
