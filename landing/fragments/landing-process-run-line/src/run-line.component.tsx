import React       from 'react'
import { useIntl } from 'react-intl'

import { Divider } from '@ui/divider'
import { Row }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'

import { OneLine } from './one-line'

const RunLineBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Column>
      <Row>
        <Divider weight={1} backgroundColor='background.transparentGray' />
      </Row>
      <Layout flexBasis={[36, 50, 64]} />
      <OneLine
        skills={formatMessage({
          id: 'landing_section_process.skills_first_line',
          defaultMessage: 'JavaScript,html,css,sass,Vanilla JS,Jade',
        }).split(',')}
      />
      <Layout flexBasis={[36, 50, 64]} />
      <OneLine
        font='gellaDisplay'
        skills={formatMessage({
          id: 'landing_section_process.skills_second_line',
          defaultMessage: '"Github,atom,figma',
        }).split(',')}
      />
      <Layout flexBasis={[36, 50, 64]} />
      <Row>
        <Divider weight={1} backgroundColor='background.transparentGray' />
      </Row>
    </Column>
  )
}

export { RunLineBlock }
