import React             from 'react'
import { FC }            from 'react'

import { Background }    from '@ui/background'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'

import { CardDescProps } from './card-desc.interface'

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
                  {category}
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
                    {title}
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
                    {description}
                  </Text>
                </Box>
                <Box display={['flex', 'none', 'none']}>
                  <Text
                    fontWeight='normal'
                    fontSize='semiMedium'
                    lineHeight='semiBig'
                    color='text.transparentDarkPurpleBlue'
                  >
                    {mobileDescription}
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
