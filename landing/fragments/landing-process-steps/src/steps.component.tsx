import React          from 'react'
import { useIntl }    from 'react-intl'

import { Background } from '@ui/background'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'

import { OneStep }    from './step'

const StepsBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Background
      width='100%'
      gradient='bigImageWithPurpleGradient'
      backgroundSize={['100%, 0px', '100%, 0px', '100%, 400px']}
      backgroundRepeat='no-repeat'
      backgroundPosition='right center, center'
    >
      <Box justifyContent='center'>
        <Layout flexBasis={[20, 25, 30]} flexShrink={0} />
        <Column width={['100%', '100%', 1760]}>
          <Layout flexBasis={[36, 62, 114]} />
          <OneStep
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
          <OneStep
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
          <OneStep
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
          <OneStep
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
          <OneStep
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
          <Layout flexBasis={[0, 10, 114]} />
        </Column>
        <Layout flexBasis={[20, 25, 30]} flexShrink={0} />
      </Box>
    </Background>
  )
}
export { StepsBlock }
