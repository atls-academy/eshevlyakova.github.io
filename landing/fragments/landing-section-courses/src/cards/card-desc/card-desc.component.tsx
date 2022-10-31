import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background/src'
import { Box }              from '@ui/layout/src'
import { Column }           from '@ui/layout/src'
import { Layout }           from '@ui/layout/src'
import { Row }              from '@ui/layout/src'
import { Text }             from '@ui/text/src'

import { CardDescProps }    from './card-desc.interface'

const CardDesc: FC<CardDescProps> = ({ category, title, description, mobileDescription }) => (
  <Box>
    <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
    <Box width='100%' height={[335, 400, 480]} borderRadius='bigger' overflow='hidden'>
      <Background gradient='transparentLightPurple' display='flex' width='100%'>
        <Layout flexBasis={[16, 28, 40]} />
        <Row>
          <Column>
            <Layout flexBasis={[16, 28, 40]} />
            <Column justifyContent='space-between'>
              <Box
                width={[80, 90, 104]}
                height={[27, 32, 38]}
                backgroundColor='background.white'
                borderRadius='semiMedium'
                justifyContent='center'
                alignItems='center'
              >
                <Text
                  fontWeight='normal'
                  fontSize={['semiMicro', 'micro', 'semiMedium']}
                  lineHeight='default'
                  color='text.darkPurpleBlue'
                  textTransform='uppercase'
                >
                  <FormattedMessage id={category} defaultMessage='Обучение' />
                </Text>
              </Box>
              <Box flexDirection='column'>
                <Box>
                  <Text
                    fontWeight='normal'
                    fontSize={['large', 'moderate', 'increased']}
                    lineHeight='extra'
                    color='text.darkPurpleBlue'
                  >
                    <FormattedMessage id={title} defaultMessage='Заголовок' />
                  </Text>
                </Box>
                <Layout flexBasis={[12, 16, 16]} />
                <Box width={['100%', '100%', 690]} display={['none', 'flex', 'flex']}>
                  <Text
                    fontWeight='normal'
                    fontSize={['semiMedium', 'semiRegular', 'regular']}
                    lineHeight={['semiBig', 'semiBig', 'primary']}
                    color='text.transparentDarkPurpleBlue'
                  >
                    <FormattedMessage id={description} defaultMessage='Описание' />
                  </Text>
                </Box>
                <Box display={['flex', 'none', 'none']}>
                  <Text
                    fontWeight='normal'
                    fontSize='semiMedium'
                    lineHeight='semiBig'
                    color='text.transparentDarkPurpleBlue'
                  >
                    <FormattedMessage id={mobileDescription} defaultMessage='Описание' />
                  </Text>
                </Box>
              </Box>
            </Column>
            <Layout flexBasis={[16, 28, 40]} />
          </Column>
        </Row>
        <Layout flexBasis={[16, 28, 40]} />
      </Background>
    </Box>
    <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
  </Box>
)

export { CardDesc }
