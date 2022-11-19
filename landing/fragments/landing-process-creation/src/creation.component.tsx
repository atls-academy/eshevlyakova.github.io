import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { SliderBlock }      from './slider'

const CreationBlock = () => (
  <Background
    width='100%'
    gradient='hugePurpleImageGradient'
    backgroundSize={['100%', '100%', '100%']}
    backgroundRepeat='no-repeat'
    backgroundPosition='right center'
  >
    <Box justifyContent='center'>
      <Layout flexBasis={[20, 25, 0]} flexShrink={0} />
      <Column width={['100%', '100%', 960]} alignItems='center'>
        <Layout flexBasis={[56, 140, 224]} />
        <Box>
          <Text
            fontWeight='normal'
            fontSize={['semiMicro', 'micro', 'semiMedium']}
            lineHeight='default'
            textTransform='uppercase'
            color='text.transparentWhite'
          >
            <FormattedMessage
              id='landing_section_process.process_creating'
              defaultMessage='Процесс создания'
            />
          </Text>
        </Box>
        <Layout flexBasis={[16, 20, 24]} />
        <Box width={['100%', '100%', 900]}>
          <Text
            display='inline'
            textAlign='center'
            fontWeight='normal'
            fontSize={['large', 'moderate', 'increased']}
            lineHeight='extra'
            color='text.white'
          >
            <FormattedMessage
              id='landing_section_process.any_process_stops'
              defaultMessage='Любой процесс перестаёт'
            />
            <Space />
            <Text
              fontWeight='normal'
              fontSize={['large', 'moderate', 'increased']}
              lineHeight='extra'
              color='text.transparentWhite'
            >
              <FormattedMessage id='landing_section_process.be' defaultMessage='быть' />
            </Text>
            <Space />
            <FormattedMessage
              id='landing_section_process.difficult_when'
              defaultMessage='сложным, когда'
            />
            <Space />
            <Text
              fontWeight='normal'
              fontSize={['large', 'moderate', 'increased']}
              lineHeight='extra'
              color='text.transparentWhite'
            >
              <FormattedMessage id='landing_section_process.know' defaultMessage='знаешь' />
            </Text>
            <Space />
            <FormattedMessage
              id='landing_section_process.how_he_flows'
              defaultMessage='как он протекает'
            />
          </Text>
        </Box>
        <Layout flexBasis={[28, 40, 52]} />
        <SliderBlock />
        <Layout flexBasis={[59, 110, 160]} />
      </Column>
      <Layout flexBasis={[20, 25, 0]} flexShrink={0} />
    </Box>
  </Background>
)

export { CreationBlock }
