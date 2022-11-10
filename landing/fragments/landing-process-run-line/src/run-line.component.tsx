import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { Indent }           from './indent'
import { OneLine }          from './one-line'

const RunLineBlock = () => (
  <Column>
    <Row>
      <Divider weight={1} backgroundColor='background.transparentGray' />
    </Row>
    <Layout flexBasis={[36, 50, 64]} />
    <OneLine>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.javascript' defaultMessage='JavaScript' />
      </Text>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.html' defaultMessage='html' />
      </Text>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.css' defaultMessage='css' />
      </Text>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.sass' defaultMessage='sass' />
      </Text>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.vanilla_js' defaultMessage='Vanilla JS' />
      </Text>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.jade' defaultMessage='Jade' />
      </Text>
    </OneLine>
    <Layout flexBasis={[36, 50, 64]} />
    <OneLine>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.github' defaultMessage='Github' />
      </Text>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.atom' defaultMessage='atom' />
      </Text>
      <Indent />
      <Text
        color='text.white'
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='thin'
        fontSize={['big', 'semiMassive', 'huge']}
      >
        <FormattedMessage id='landing_section_process.figma' defaultMessage='figma' />
      </Text>
    </OneLine>
    <Layout flexBasis={[36, 50, 64]} />
    <Row>
      <Divider weight={1} backgroundColor='background.transparentGray' />
    </Row>
  </Column>
)

export { RunLineBlock }
