import React               from 'react'
import { FC }              from 'react'

import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Text }            from '@ui/text'

import { SlideTextcProps } from './slide-text.interface'

const SlideText: FC<SlideTextcProps> = ({ text }) => (
  <Column width='100%' alignItems='center' justifyContent='center'>
    <Layout flexBasis={[13, 15, 18]} />
    <Row justifyContent='center'>
      <Text
        textAlign='center'
        fontWeight='normal'
        fontSize={['micro', ' semiMedium', 'medium']}
        lineHeight={['medium', 'primary', 'semiBig']}
        color='text.white'
      >
        {text}
      </Text>
    </Row>
    <Layout flexBasis={[13, 15, 18]} />
  </Column>
)

export { SlideText }
