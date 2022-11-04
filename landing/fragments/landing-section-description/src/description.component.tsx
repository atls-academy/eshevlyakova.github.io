import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

const SectionDescription = () => (
  <>
    <Background gradient='darkPurpleAndPurpleGradient' display={['none', 'none', 'flex']}>
      <Row justifyContent='center'>
        <Layout flexBasis={[20, 20, 230]} flexShrink={5} />
        <Column width={['100%', '100%', 1460]}>
          <Layout flexBasis={[0, 0, 160]} />
          <Box flexWrap='wrap'>
            <Text
              display='inline'
              fontWeight='normal'
              fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
              lineHeight='primary'
              color='text.white'
            >
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.digital'
                  defaultMessage='Digital'
                />
              </Text>
              <Space />
              <FormattedMessage
                id='landing_section_description.its_getting_more_crowded'
                defaultMessage='становится всё более многолюдным, востребованность по направлениям при этом не снижается'
              />
              <Space />
              <Box
                width={[52, 62, 76]}
                height={[36, 43, 52]}
                display='inline-flex'
                verticalAlign='middle'
              >
                <ImageBlock width='100%' height='100%' src='/circle-section-2.png' />
              </Box>
              <Space />
              <FormattedMessage id='landing_section_description.but' defaultMessage='Но' />
              <Space />
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.specialists'
                  defaultMessage='специалистов'
                />
              </Text>
              <FormattedMessage
                id='landing_section_description.ready_to_take_responsibility'
                defaultMessage=', готовых нести ответсвенность за свои решения по прежднему мало'
              />
              <Space />
              <Box
                width={[52, 62, 76]}
                height={[36, 43, 52]}
                display='inline-flex'
                verticalAlign='middle'
              >
                <ImageBlock width='100%' height='100%' src='/circle-section-2.png' />
              </Box>
            </Text>
          </Box>
          <Layout flexBasis={[24, 24, 40]} />
          <Box flexWrap='wrap'>
            <Text
              display='inline'
              fontWeight='normal'
              fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
              lineHeight='primary'
              color='text.white'
            >
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.atlantis_academy'
                  defaultMessage='Atlantis Academy'
                />
              </Text>
              <Space />
              <FormattedMessage
                id='landing_section_description.educates_and_forms'
                defaultMessage='обучает и формирует'
              />
              <Space />
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.engineers'
                  defaultMessage='инженеров'
                />
              </Text>
              <Space />
              <FormattedMessage id='landing_section_description.and' defaultMessage='и' />
              <Space />
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.architects'
                  defaultMessage='архитекторов'
                />
              </Text>
              <FormattedMessage
                id='landing_section_description.not_programmers_and_designers'
                defaultMessage=', а не программистов и дизайнеров'
              />
              <Space />
              <Box
                width={[52, 62, 76]}
                height={[36, 43, 52]}
                display='inline-flex'
                verticalAlign='middle'
              >
                <ImageBlock width='100%' height='100%' src='/circle-section-2.png' />
              </Box>
            </Text>
          </Box>
          <Layout flexBasis={[64, 64, 160]} />
        </Column>
        <Layout flexBasis={[20, 20, 230]} flexShrink={5} />
      </Row>
    </Background>
    <Background
      gradient='blueAndPurpleGradient'
      display={['flex', 'flex', 'none']}
      borderBottomLeftRadius='semiHuge'
      borderBottomRightRadius='semiHuge'
    >
      <Row justifyContent='center'>
        <Layout flexBasis={[20, 20, 230]} flexShrink={5} />
        <Column width={['100%', '100%', 1460]}>
          <Layout flexBasis={[0, 0, 160]} />
          <Box flexWrap='wrap'>
            <Text
              display='inline'
              fontWeight='normal'
              fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
              lineHeight='primary'
              color='text.white'
            >
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.digital'
                  defaultMessage='Digital'
                />
              </Text>
              <Space />
              <FormattedMessage
                id='landing_section_description.its_getting_more_crowded'
                defaultMessage='становится всё более многолюдным, востребованность по направлениям при этом не снижается'
              />
              <Space />
              <Box
                width={[52, 62, 76]}
                height={[36, 43, 52]}
                display='inline-flex'
                verticalAlign='middle'
              >
                <ImageBlock width='100%' height='100%' src='/circle-section-2.png' />
              </Box>
              <Space />
              <FormattedMessage id='landing_section_description.but' defaultMessage='Но' />
              <Space />
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.specialists'
                  defaultMessage='специалистов'
                />
              </Text>
              <FormattedMessage
                id='landing_section_description.ready_to_take_responsibility'
                defaultMessage=', готовых нести ответсвенность за свои решения по прежднему мало'
              />
              <Space />
              <Box
                width={[52, 62, 76]}
                height={[36, 43, 52]}
                display='inline-flex'
                verticalAlign='middle'
              >
                <ImageBlock width='100%' height='100%' src='/circle-section-2.png' />
              </Box>
            </Text>
          </Box>
          <Layout flexBasis={[24, 24, 40]} />
          <Box flexWrap='wrap'>
            <Text
              display='inline'
              fontWeight='normal'
              fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
              lineHeight='primary'
              color='text.white'
            >
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.atlantis_academy'
                  defaultMessage='Atlantis Academy'
                />
              </Text>
              <Space />
              <FormattedMessage
                id='landing_section_description.educates_and_forms'
                defaultMessage='обучает и формирует'
              />
              <Space />
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.engineers'
                  defaultMessage='инженеров'
                />
              </Text>
              <Space />
              <FormattedMessage id='landing_section_description.and' defaultMessage='и' />
              <Space />
              <Text
                fontWeight='normal'
                fontSize={['semiModerate', 'semiIncreased', 'semiBig']}
                lineHeight='primary'
                color='text.darkPurpleBlue'
              >
                <FormattedMessage
                  id='landing_section_description.architects'
                  defaultMessage='архитекторов'
                />
              </Text>
              <FormattedMessage
                id='landing_section_description.not_programmers_and_designers'
                defaultMessage=', а не программистов и дизайнеров'
              />
              <Space />
              <Box
                width={[52, 62, 76]}
                height={[36, 43, 52]}
                display='inline-flex'
                verticalAlign='middle'
              >
                <ImageBlock width='100%' height='100%' src='/circle-section-2.png' />
              </Box>
            </Text>
          </Box>
          <Layout flexBasis={[64, 64, 160]} />
        </Column>
        <Layout flexBasis={[20, 20, 230]} flexShrink={5} />
      </Row>
    </Background>
  </>
)

export { SectionDescription }
