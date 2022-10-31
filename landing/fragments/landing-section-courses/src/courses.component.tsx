import React                        from 'react'
import { FormattedMessage }         from 'react-intl'

import { Background }               from '@ui/background'
import { Button }                   from '@ui/button'
import { Divider }                  from '@ui/divider'
import { DarkPurpleArrowRightIcon } from '@ui/icons'
import { WhitePlusIcon }            from '@ui/icons'
import { ImageBlock }               from '@ui/image'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Text }                     from '@ui/text'
import { Space }                    from '@ui/text'

import { Cards }                    from './cards'

const SectionCourses = () => (
  <Background
    gradient='lightPurpleGradientImage'
    backgroundRepeat='no-repeat'
    backgroundSize='100%'
    backgroundPosition={['right 33%', 'right 30%', 'right center']}
  >
    <Row justifyContent='center'>
      <Column width={['100%', '100%', 1460]}>
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
              <Column width={253} display={['none', 'none', 'flex']}>
                <Button size='normalAllMaterials' variant='darkPurpleBlue'>
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
                  <Box
                    width={48}
                    height={48}
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='big'
                    backgroundColor='white'
                  >
                    <DarkPurpleArrowRightIcon />
                  </Box>
                </Button>
              </Column>
            </Row>
            <Layout flexBasis={[40, 60, 80]} />
            <Row>
              <Divider weight={1} backgroundColor='background.transparentDarkBlue' />
            </Row>
            <Layout flexBasis={[40, 60, 80]} />
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
                    <FormattedMessage
                      id='landing_section_courses.atlantis'
                      defaultMessage='Atlantis'
                    />
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
                    <FormattedMessage
                      id='landing_section_courses.it_sphere'
                      defaultMessage='сферу IT'
                    />
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
                    <FormattedMessage
                      id='landing_section_courses.practice'
                      defaultMessage='практики'
                    />
                  </Text>
                  <Space />
                  <FormattedMessage
                    id='landing_section_courses.on_existing_projects'
                    defaultMessage='на существующих проектах.'
                  />
                </Text>
              </Box>
            </Row>
            <Layout flexBasis={[40, 60, 80]} />
          </Column>
          <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
        </Box>
        <Row flexDirection={['column-reverse', 'column-reverse', 'row']}>
          <Cards />
          <Layout flexBasis={40} flexShrink={0} />
          <Box height='100%' width={['100%', '100%', 440]} flexShrink={0}>
            <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
            <Column>
              <Box
                width='100%'
                borderRadius='bigger'
                overflow='hidden'
                border='transparentGray'
                style={{ backdropFilter: 'blur(5px)' }}
              >
                <Background gradient='transparentLightGray' display='flex'>
                  <Layout flexBasis={[16, 32, 32]} flexShrink={0} />
                  <Row>
                    <Column>
                      <Layout flexBasis={[16, 32, 32]} />
                      <Row>
                        <Text
                          fontWeight='normal'
                          fontSize={['semiMedium', 'medium', 'medium']}
                          lineHeight={['primary', 'semiBig', 'semiBig']}
                          color='text.darkPurpleBlue'
                        >
                          <FormattedMessage
                            id='landing_section_courses.we_dont_gather_large_groups'
                            defaultMessage='Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не собираем большие группы, что позволяет курировать работу каждого студента.'
                          />
                        </Text>
                      </Row>
                      <Layout flexBasis={[20, 25, 74]} />
                      <Box flexDirection={['row', 'row', 'column']} alignItems='center'>
                        <Box order={[5, 5, 0]} height={[64, 100, 240]} width={[64, 100, 240]}>
                          <ImageBlock src='/symbol-section-3.png' />
                        </Box>
                        <Layout order={[4, 4, 0]} flexBasis={62} flexGrow={[3, 3, 1]} />
                        <Box width={['auto', 'auto', '100%']} order={[1, 1, 0]}>
                          <Text
                            fontWeight='normal'
                            fontSize={['semiExtra', 'extra', 'semiMassive']}
                            lineHeight='default'
                            color='text.lightPurpleBlue'
                          >
                            <FormattedMessage
                              id='landing_section_courses.five'
                              defaultMessage='5'
                            />
                          </Text>
                        </Box>
                        <Box width={['auto', 'auto', '100%']} order={[3, 3, 0]}>
                          <Box width={[131, 188, 188]}>
                            <Text
                              fontWeight='normal'
                              fontSize={['micro', 'semiMedium', 'semiMedium']}
                              lineHeight={['medium', 'semiBig', 'semiBig']}
                              color='text.darkPurpleBlue'
                            >
                              <FormattedMessage
                                id='landing_section_courses.students_study_in_one_practical_group'
                                defaultMessage='студентов обучаются в одной практической группе'
                              />
                            </Text>
                          </Box>
                        </Box>
                        <Layout order={[2, 2, 0]} flexBasis={[10, 10, 0]} />
                      </Box>
                      <Layout flexBasis={[16, 32, 32]} />
                    </Column>
                  </Row>
                  <Layout flexBasis={[16, 32, 32]} flexShrink={0} />
                </Background>
              </Box>
              <Layout flexBasis={20} />
              <Column display={['none', 'none', 'flex']}>
                <Button size='normalAdmissionProcess' variant='darkPurpleBlue'>
                  <Row>
                    <Text
                      fontWeight='normal'
                      fontSize='regular'
                      lineHeight='small'
                      color='text.white'
                    >
                      <FormattedMessage
                        id='landing_section_courses.admission_process'
                        defaultMessage='Процесс поступления'
                      />
                    </Text>
                  </Row>
                  <Box
                    width={48}
                    height={48}
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='medium'
                    backgroundColor='background.transparentWhite'
                  >
                    <WhitePlusIcon />
                  </Box>
                </Button>
              </Column>
              <Column display={['flex', 'flex', 'none']}>
                <Button size='smallAdmissionProcess' variant='darkPurpleBlue'>
                  <Row>
                    <Text
                      fontWeight='normal'
                      fontSize={['medium', 'semiRegular', 'regular']}
                      lineHeight='small'
                      color='text.white'
                    >
                      <FormattedMessage
                        id='landing_section_courses.admission_process'
                        defaultMessage='Процесс поступления'
                      />
                    </Text>
                  </Row>
                  <Box
                    width={32}
                    height={32}
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='medium'
                    backgroundColor='background.transparentWhite'
                  >
                    <WhitePlusIcon />
                  </Box>
                </Button>
              </Column>
            </Column>
            <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
          </Box>
        </Row>
        <Layout flexBasis={20} />
        <Box display={['flex', 'flex', 'none']}>
          <Layout flexBasis={20} flexShrink={0} />
          <Column width='100%'>
            <Button size='smallAdmissionProcess' variant='darkPurpleBlue'>
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
              <Box
                width={32}
                height={32}
                justifyContent='center'
                alignItems='center'
                borderRadius='semiMedium'
                backgroundColor='white'
              >
                <DarkPurpleArrowRightIcon />
              </Box>
            </Button>
          </Column>
          <Layout flexBasis={20} flexShrink={0} />
        </Box>
        <Layout flexBasis={[64, 90, 141]} />
      </Column>
    </Row>
  </Background>
)

export { SectionCourses }
