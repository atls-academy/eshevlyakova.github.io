import React             from 'react'
import { useIntl }       from 'react-intl'

import { Column }        from '@ui/layout'

import { MobileOneStep } from '../mobile-step'

const MobileSteps = () => {
  const { formatMessage } = useIntl()

  return (
    <Column display={['flex', 'flex', 'none']}>
      <MobileOneStep
        border
        counter={formatMessage({
          id: 'landing_section_courses.steps_first',
          defaultMessage: '1',
        })}
        title={formatMessage({
          id: 'landing_section_courses.integration_into_the_team',
          defaultMessage: 'Интеграция в команду',
        })}
        description={formatMessage({
          id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
          defaultMessage:
            'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
        })}
      />
      <MobileOneStep
        border
        counter={formatMessage({
          id: 'landing_section_courses.steps_second',
          defaultMessage: '2',
        })}
        title={formatMessage({
          id: 'landing_section_courses.creating_an_environment',
          defaultMessage: 'Создание среды',
        })}
        description={formatMessage({
          id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
          defaultMessage:
            'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
        })}
      />
      <MobileOneStep
        border
        counter={formatMessage({
          id: 'landing_section_courses.steps_third',
          defaultMessage: '3',
        })}
        title={formatMessage({
          id: 'landing_section_courses.technology_study',
          defaultMessage: 'Изучение технологий',
        })}
        description={formatMessage({
          id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
          defaultMessage:
            'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
        })}
      />
      <MobileOneStep
        border
        counter={formatMessage({
          id: 'landing_section_courses.steps_fourth',
          defaultMessage: '4',
        })}
        title={formatMessage({
          id: 'landing_section_courses.practice_of_the_studied',
          defaultMessage: 'Практика изученого',
        })}
        description={formatMessage({
          id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
          defaultMessage:
            'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
        })}
      />
      <MobileOneStep
        counter={formatMessage({
          id: 'landing_section_courses.steps_fifth',
          defaultMessage: '5',
        })}
        title={formatMessage({
          id: 'landing_section_courses.integration_into_the_project',
          defaultMessage: 'Интеграция в проект',
        })}
        description={formatMessage({
          id: 'landing_section_courses.being_a_cardinal_atlantis_has_influence',
          defaultMessage:
            'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
        })}
      />
    </Column>
  )
}

export { MobileSteps }
