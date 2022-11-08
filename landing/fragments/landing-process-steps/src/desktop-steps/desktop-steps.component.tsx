import React               from 'react'
import { useIntl }         from 'react-intl'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'

import { DescriptionStep } from '../desktop-parts-step'
import { TitleStep }       from '../desktop-parts-step'

const DesktopSteps = () => {
  const { formatMessage } = useIntl()

  return (
    <Row alignItems='center' justifyContent='space-between' display={['none', 'none', 'flex']}>
      <Column width='100%'>
        <TitleStep
          border
          counter={formatMessage({
            id: 'landing_section_courses.steps_first',
            defaultMessage: '1',
          })}
          title={formatMessage({
            id: 'landing_section_courses.integration_into_the_team',
            defaultMessage: 'Интеграция в команду',
          })}
        />
        <TitleStep
          border
          counter={formatMessage({
            id: 'landing_section_courses.steps_second',
            defaultMessage: '2',
          })}
          title={formatMessage({
            id: 'landing_section_courses.creating_an_environment',
            defaultMessage: 'Создание среды',
          })}
        />
        <TitleStep
          border
          counter={formatMessage({
            id: 'landing_section_courses.steps_third',
            defaultMessage: '3',
          })}
          title={formatMessage({
            id: 'landing_section_courses.technology_study',
            defaultMessage: 'Изучение технологий',
          })}
        />
        <TitleStep
          border
          counter={formatMessage({
            id: 'landing_section_courses.steps_fourth',
            defaultMessage: '4',
          })}
          title={formatMessage({
            id: 'landing_section_courses.practice_of_the_studied',
            defaultMessage: 'Практика изученого',
          })}
        />
        <TitleStep
          counter={formatMessage({
            id: 'landing_section_courses.steps_fifth',
            defaultMessage: '5',
          })}
          title={formatMessage({
            id: 'landing_section_courses.integration_into_the_project',
            defaultMessage: 'Интеграция в проект',
          })}
        />
      </Column>
      <Column justifyContent='center' alignItems='center' width='100%'>
        <Box width={400} zIndex={2}>
          <ImageBlock src='/img-bg-section-4.png' />
        </Box>
      </Column>
      <Column width='100%'>
        <DescriptionStep
          description={formatMessage({
            id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
            defaultMessage:
              'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
          })}
        />
        <DescriptionStep
          description={formatMessage({
            id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
            defaultMessage:
              'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
          })}
        />
        <DescriptionStep
          description={formatMessage({
            id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
            defaultMessage:
              'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
          })}
        />
        <DescriptionStep
          description={formatMessage({
            id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
            defaultMessage:
              'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
          })}
        />
        <DescriptionStep
          description={formatMessage({
            id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
            defaultMessage:
              'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
          })}
        />
      </Column>
    </Row>
  )
}

export { DesktopSteps }
