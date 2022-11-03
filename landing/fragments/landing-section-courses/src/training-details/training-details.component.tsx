import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { PlusIcon }         from '@ui/icons'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const TrainingDetails = () => (
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
                    <FormattedMessage id='landing_section_courses.five' defaultMessage='5' />
                  </Text>
                </Box>
                <Box
                  width={[131, 188, 188]}
                  order={[3, 3, 0]}
                  alignSelf={['center', 'center', 'flex-start']}
                >
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
                <Layout order={[2, 2, 0]} flexBasis={[10, 10, 0]} />
              </Box>
              <Layout flexBasis={[16, 32, 32]} />
            </Column>
          </Row>
          <Layout flexBasis={[16, 32, 32]} flexShrink={0} />
        </Background>
      </Box>
      <Layout flexBasis={20} />
      <Row display={['none', 'none', 'flex']}>
        <Button size='mediumPaddingGiantHeight' variant='darkPurpleBlue' fill>
          <Row>
            <Text fontWeight='normal' fontSize='regular' lineHeight='small' color='text.white'>
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
            <PlusIcon />
          </Box>
        </Button>
      </Row>
      <Row display={['flex', 'flex', 'none']}>
        <Button size='normalPaddingExtraHeight' variant='darkPurpleBlue' fill>
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
            <PlusIcon />
          </Box>
        </Button>
      </Row>
    </Column>
    <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
  </Box>
)

export { TrainingDetails }
