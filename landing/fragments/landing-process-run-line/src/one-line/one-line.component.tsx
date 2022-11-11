import styled           from '@emotion/styled'
import { keyframes }    from '@emotion/react'

import React            from 'react'
import { FC }           from 'react'
import { useMemo }      from 'react'

import { Box }          from '@ui/layout'
import { Text }         from '@ui/text'
import { Repeater }     from '@ui/utils'

import { Indent }       from '../indent'
import { OneLineProps } from './one-line.interface'

const OneLine: FC<OneLineProps> = ({ skills, font }) => {
  const infinityLine = useMemo(
    () => keyframes`0% { transform: translateX(0) } 100% { transform: translate(-50%) }`,
    []
  )
  const AnimationBox = useMemo(
    () => styled(Box)({ animation: `${infinityLine} 200s linear infinite` }),
    // eslint-disable-next-line
    []
  )

  const skillsBlock: Array<JSX.Element> = []
  skills.forEach((item) => {
    skillsBlock.push(
      <>
        <Indent />
        <Text
          color='text.white'
          textTransform='uppercase'
          whiteSpace='nowrap'
          fontWeight='thin'
          fontSize={['big', 'semiMassive', 'huge']}
          fontFamily={font || 'primary'}
        >
          {item}
        </Text>
      </>
    )
  })

  return (
    <Box>
      <AnimationBox alignItems='center'>
        <Repeater quantity={50}>{() => skillsBlock}</Repeater>
      </AnimationBox>
    </Box>
  )
}

export { OneLine }
