import React            from 'react'
import { FC }           from 'react'

import { Background }   from '@ui/background'
import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Text }         from '@ui/text'

import { OneStepProps } from './step.interface'

const OneStep: FC<OneStepProps> = ({ border, counter, title, description }) => (
  <Box borderBottom={border ? 'veryTransparentWhite' : 'none'}>
    <Column width='100%'>
      <Layout flexBasis={[28, 38, 48]} />
      <Row flexWrap={['wrap', 'wrap', 'nowrap']} alignItems='center'>
        <Background
          gradient='darkPurpleShadowGradient'
          borderRadius={['medium', 'big', 'extra']}
          height={[35, 50, 64]}
        >
          <Box
            borderRadius={['medium', 'big', 'extra']}
            border='transparentWhite'
            width={[35, 50, 64]}
            height={[35, 50, 64]}
            alignItems='center'
            justifyContent='center'
            style={{ backdropFilter: 'blur(2px)' }}
          >
            <Text
              fontWeight='normal'
              fontSize={['semiRegular', 'semiLarge', 'large']}
              lineHeight='default'
              color='text.white'
            >
              {counter}
            </Text>
          </Box>
        </Background>
        <Layout flexBasis={[12, 22, 32]} flexShrink={0} />
        <Box width={['auto', 'auto', '100%']}>
          <Text
            fontWeight='normal'
            fontSize={['large', 'semiIncreased', 'big']}
            lineHeight='extra'
            color='text.white'
          >
            {title}
          </Text>
        </Box>
        <Box flexDirection={['row-reverse', 'row-reverse', 'row']}>
          <Box>
            <Text
              fontWeight='normal'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color='text.white'
              opacity={[0.7, 0.7, 1]}
            >
              {description}
            </Text>
          </Box>
          <Layout flexBasis={[47, 72, 50]} flexShrink={0} />
        </Box>
      </Row>
      <Layout flexBasis={[28, 38, 48]} />
    </Column>
  </Box>
)

export { OneStep }
