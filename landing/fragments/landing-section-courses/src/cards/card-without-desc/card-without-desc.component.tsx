import React                    from 'react'
import { FC }                   from 'react'

import { Background }           from '@ui/background/src'
import { Box }                  from '@ui/layout/src'
import { Column }               from '@ui/layout/src'
import { Layout }               from '@ui/layout/src'
import { Row }                  from '@ui/layout/src'
import { Text }                 from '@ui/text/src'

import { CardWithoutDescProps } from './card-without-desc.interface'

const CardWithoutDesc: FC<CardWithoutDescProps> = ({ category, title }) => (
  <Box height={[167, 250, 320]} width='100%' borderRadius='bigger' overflow='hidden'>
    <Background gradient='transparentLightPurple' display='flex' width='100%'>
      <Layout flexBasis={[16, 28, 40]} />
      <Row>
        <Column>
          <Layout flexBasis={[16, 28, 40]} />
          <Column justifyContent='space-between'>
            <Box
              width={[142, 158, 179]}
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
            <Box>
              <Text
                fontWeight='normal'
                fontSize={['regular', 'moderate', 'increased']}
                lineHeight='extra'
                color='text.darkPurpleBlue'
              >
                {title}
              </Text>
            </Box>
          </Column>
          <Layout flexBasis={[16, 28, 40]} />
        </Column>
      </Row>
      <Layout flexBasis={[16, 28, 40]} />
    </Background>
  </Box>
)

export { CardWithoutDesc }
