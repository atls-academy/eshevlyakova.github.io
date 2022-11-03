import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { Cards }            from './cards'
import { Description }      from './description'
import { TrainingDetails }  from './training-details'

const SectionCourses = () => (
  <Background
    gradient='lightPurpleGradientImage'
    backgroundRepeat='no-repeat'
    backgroundSize='100%'
    backgroundPosition={['right 33%', 'right 30%', 'right center']}
  >
    <Row justifyContent='center'>
      <Column width={['100%', '100%', 1520]}>
        <Layout flexBasis={[64, 100, 160]} />
        <Box>
          <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
          <Column width='100%'>
            <Row justifyContent='space-between' alignItems='center'>
              <Box>
                <Text
                  fontWeight='normal'
                  fontSize={['increased', 'extra', 'giant']}
                  lineHeight='default'
                  color='text.darkPurpleBlue'
                >
                  <FormattedMessage
                    id='landing_section_courses.courses_and_materials'
                    defaultMessage='Курсы и материалы'
                  />
                </Text>
              </Box>
              <Box width={253} display={['none', 'none', 'flex']}>
                <Button
                  size='mediumPaddingHugeHeight'
                  variant='darkPurpleBlue'
                  icon='arrow'
                  iconSvg={<ArrowRightIcon />}
                  fill
                >
                  <Row>
                    <Text
                      fontWeight='normal'
                      fontSize='regular'
                      lineHeight='small'
                      color='text.white'
                    >
                      <FormattedMessage
                        id='landing_section_courses.all_materials'
                        defaultMessage='Все материалы'
                      />
                    </Text>
                  </Row>
                </Button>
              </Box>
            </Row>
            <Layout flexBasis={[40, 60, 80]} />
            <Row>
              <Divider weight={1} backgroundColor='background.transparentDarkBlue' />
            </Row>
            <Layout flexBasis={[40, 60, 80]} />
            <Description />
            <Layout flexBasis={[40, 60, 80]} />
          </Column>
          <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
        </Box>
        <Row flexDirection={['column-reverse', 'column-reverse', 'row']}>
          <Cards />
          <Layout flexBasis={40} flexShrink={0} />
          <TrainingDetails />
        </Row>
        <Layout flexBasis={20} />
        <Box display={['flex', 'flex', 'none']}>
          <Layout flexBasis={20} flexShrink={0} />
          <Row>
            <Button
              size='normalPaddingExtraHeight'
              variant='darkPurpleBlue'
              icon='arrow'
              iconSvg={<ArrowRightIcon />}
              fill
            >
              <Row>
                <Text
                  fontWeight='normal'
                  fontSize={['medium', 'semiRegular', 'regular']}
                  lineHeight='small'
                  color='text.white'
                >
                  <FormattedMessage
                    id='landing_section_courses.all_materials'
                    defaultMessage='Все материалы'
                  />
                </Text>
              </Row>
            </Button>
          </Row>
          <Layout flexBasis={20} flexShrink={0} />
        </Box>
        <Layout flexBasis={[64, 90, 141]} />
      </Column>
    </Row>
  </Background>
)

export { SectionCourses }
