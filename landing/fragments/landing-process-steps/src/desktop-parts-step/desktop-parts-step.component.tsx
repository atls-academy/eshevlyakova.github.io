import React                    from 'react'
import { FC }                   from 'react'

import { Background }           from '@ui/background'
import { Divider }              from '@ui/divider'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Text }                 from '@ui/text'

import { DescriptionStepProps } from './desktop-parts-step.interface'
import { TitleStepProps }       from './desktop-parts-step.interface'

const TitleStep: FC<TitleStepProps> = ({ border, counter, title }) => {
  if (border) {
    return (
      <Box position='relative'>
        <Column width='100%'>
          <Layout flexBasis={[28, 38, 48]} />
          <Row alignItems='center'>
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
            <Box>
              <Text
                fontWeight='normal'
                fontSize={['large', ' moderate', 'increased']}
                lineHeight='extra'
                color='text.white'
              >
                {title}
              </Text>
            </Box>
          </Row>
          <Layout flexBasis={[28, 38, 48]} />
          <Box width={['100%', '100%', 1760]} position='absolute' bottom={0} left={0}>
            <Divider weight={1} backgroundColor='background.transparentGray' />
          </Box>
        </Column>
      </Box>
    )
  }
  return (
    <Box position='relative'>
      <Column width='100%'>
        <Layout flexBasis={[28, 38, 48]} />
        <Row alignItems='center'>
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
          <Box>
            <Text
              fontWeight='normal'
              fontSize={['large', ' moderate', 'increased']}
              lineHeight='extra'
              color='text.white'
            >
              {title}
            </Text>
          </Box>
        </Row>
        <Layout flexBasis={[28, 38, 48]} />
      </Column>
    </Box>
  )
}

const DescriptionStep: FC<DescriptionStepProps> = ({ description }) => (
  <Column width='100%'>
    <Layout flexBasis={[28, 38, 48]} />
    <Row flexDirection={['row-reverse', 'row-reverse', 'row']}>
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
      <Layout flexBasis={50} />
    </Row>
    <Layout flexBasis={[28, 38, 48]} />
  </Column>
)

export { DescriptionStep, TitleStep }
