import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

const Description = () => (
  <Row justifyContent='space-between' flexDirection={['column', 'column', 'row']}>
    <Box width={['100%', '100%', 690]}>
      <Text
        display='inline'
        fontWeight='normal'
        fontSize={['semiLarge', 'semiModerate', 'moderate']}
        lineHeight='primary'
        color='text.darkPurpleBlue'
      >
        <FormattedMessage
          id='landing_section_courses.being_a_grey_cardinal'
          defaultMessage='Являясь серым кардиналом,'
        />
        <Space />
        <Text
          fontWeight='normal'
          fontSize={['semiLarge', 'semiModerate', 'moderate']}
          lineHeight='primary'
          color='text.lightPurpleBlue'
        >
          <FormattedMessage id='landing_section_courses.atlantis' defaultMessage='Atlantis' />
        </Text>
        <Space />
        <FormattedMessage
          id='landing_section_courses.has_an_impact_on'
          defaultMessage='имеет влияние на'
        />
        <Space />
        <Text
          fontWeight='normal'
          fontSize={['semiLarge', 'semiModerate', 'moderate']}
          lineHeight='primary'
          color='text.lightPurpleBlue'
        >
          <FormattedMessage id='landing_section_courses.it_sphere' defaultMessage='сферу IT' />
        </Text>
        <Space />
        <FormattedMessage
          id='landing_section_courses.and_unlimited_possibilities_in'
          defaultMessage='и неограниченные возможности в'
        />
        <Space />
        <Text
          fontWeight='normal'
          fontSize={['semiLarge', 'semiModerate', 'moderate']}
          lineHeight='primary'
          color='text.lightPurpleBlue'
        >
          <FormattedMessage
            id='landing_section_courses.applying_skills'
            defaultMessage='применение навыков.'
          />
        </Text>
      </Text>
    </Box>
    <Layout flexBasis={[20, 30, 0]} />
    <Box width={['100%', '100%', 540]}>
      <Text
        display='inline'
        fontWeight='normal'
        fontSize={['semiLarge', 'semiModerate', 'moderate']}
        lineHeight='primary'
        color='text.darkPurpleBlue'
      >
        <FormattedMessage
          id='landing_section_courses.efficiency_training'
          defaultMessage='Эффективность обучение заметно вырастает из-за'
        />
        <Space />
        <Text
          fontWeight='normal'
          fontSize={['semiLarge', 'semiModerate', 'moderate']}
          lineHeight='primary'
          color='text.lightPurpleBlue'
        >
          <FormattedMessage id='landing_section_courses.practice' defaultMessage='практики' />
        </Text>
        <Space />
        <FormattedMessage
          id='landing_section_courses.on_existing_projects'
          defaultMessage='на существующих проектах.'
        />
      </Text>
    </Box>
  </Row>
)

export { Description }
