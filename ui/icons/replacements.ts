/**
 * Usage - getReplacement([<color to replace>,<prop to replace with>])
 * Takes unlimited amount of replacements: getReplacement(['#000000','color],['transparent','stroke'],[14,'width']) etc.
 *
 * Example
 *
 * Icon: <svg fill='#000000' path='#111111' stroke='transparent' />
 * Replacement func: getReplacement(['#000000','fillColor'],['#111111','pathColor'],['transparent','strokeColor'])
 * Result:
 * <svg
 * fill={theme.colors[props.fillColor] || props.fillColor || '#000000'}
 * path={theme.colors[props.pathColor] || props.pathColor || '#111111'}
 * stroke={theme.colors[props.strokeColor] || props.strokeColor || 'transparent'}
 * />
 * */

const getReplacement = (...themeProps) =>
  (color) => ({
    [color]: `{(theme.colors${themeProps.reduce(
      (str, prop) => `${str}.${prop}`,
      ''
    )}[props.color] || props.color) || "${color}"}`,
  })

export const replacements = {
  BetweenExchangesIcon: getReplacement()('black'),
  DexArbitrageIcon: getReplacement()('black'),
  InsideExchangeIcon: getReplacement()('black'),
  UpdateIcon: getReplacement()('black'),
  ArrowDownIcon: getReplacement()('#1F1F27'),
  ArrowProfileIcon: getReplacement()('#81869A'),
  ChangePasswordIcon: getReplacement()('#1F1F27'),
  ExitIcon: getReplacement()('#1F1F27'),
  CrossIcon: getReplacement()('#1F1F27'),
  RemoveIcon: getReplacement()('#31A0F0'),
  CheckboxIcon: getReplacement()('#31A0F0'),
  VisibleIcon: getReplacement()('#C0C2CB'),
}
