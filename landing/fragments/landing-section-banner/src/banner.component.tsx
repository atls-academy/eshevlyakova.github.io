import React                 from 'react'
import { FormattedMessage }  from 'react-intl'

import { Background }        from '@ui/background'
import { Button }            from '@ui/button'
import { Divider }           from '@ui/divider'
import { ComputerMouseIcon } from '@ui/icons'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { SocialLinks }       from '@ui/social-links'
import { Space }             from '@ui/text'
import { Text }              from '@ui/text'

const SectionBanner = () => (
  <Box height={['100%', '100%', '89vh']}>
    <Layout flexBasis={[20, 20, 230]} />
    <Layout
      width='100%'
      height='100%'
      flexDirection={['column', 'column', 'row']}
      justifyContent='center'
    >
      <Column justifyContent='flex-end' width={['100%', '100%', 1160]}>
        <Layout flexBasis={[252, 332, 535]} />
        <Box width={['100%', '100%', 1116]}>
          <Column justifyContent='end'>
            <Box display={['none', 'none', 'flex']}>
              <Column justifyContent='end'>
                <Row>
                  <Text
                    fontWeight='normal'
                    fontSize='giant'
                    lineHeight={['small', 'small', 'extra']}
                    color='text.white'
                  >
                    <FormattedMessage
                      id='landing_section_banner.we_teach'
                      defaultMessage='Обучаем'
                    />
                  </Text>
                </Row>
                <Row>
                  <Text
                    fontWeight='normal'
                    fontSize='giant'
                    lineHeight={['small', 'small', 'extra']}
                    color='text.white'
                  >
                    <FormattedMessage
                      id='landing_section_banner.professionals'
                      defaultMessage='профессионалов'
                    />
                  </Text>
                </Row>
                <Row>
                  <Box>
                    <Text
                      fontWeight='normal'
                      fontSize='giant'
                      lineHeight={['small', 'small', 'extra']}
                      color='text.darkPurpleBlue'
                    >
                      <FormattedMessage
                        id='landing_section_banner.for_the_revolution'
                        defaultMessage='для революции'
                      />
                      <Space />
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontWeight='normal'
                      fontSize='giant'
                      lineHeight={['small', 'small', 'extra']}
                      color='text.white'
                    >
                      <FormattedMessage id='landing_section_banner.in' defaultMessage='в' />
                      <Space />
                    </Text>
                  </Box>
                  <Background gradient='darkPurpleShadowGradient' radius='bigger'>
                    <Box
                      borderRadius='bigger'
                      width='148px'
                      justifyContent='center'
                      border='thinLightPurple'
                      style={{ backdropFilter: 'blur(2px)' }}
                    >
                      <Text
                        fontSize='giant'
                        lineHeight='extra'
                        textTransform='uppercase'
                        color='text.white'
                      >
                        <FormattedMessage id='landing_section_banner.it' defaultMessage='it' />
                      </Text>
                    </Box>
                  </Background>
                </Row>
              </Column>
            </Box>
            <Column display={['flex', 'flex', 'none']} justifyContent='end'>
              <Row>
                <Text
                  fontWeight='normal'
                  fontSize={['increased', 'massive', 'massive']}
                  lineHeight='small'
                  color='text.white'
                >
                  <FormattedMessage id='landing_section_banner.we_teach' defaultMessage='Обучаем' />
                </Text>
              </Row>
              <Row>
                <Text
                  fontWeight='normal'
                  fontSize={['increased', 'massive', 'massive']}
                  lineHeight='small'
                  color='text.white'
                >
                  <FormattedMessage
                    id='landing_section_banner.professionals'
                    defaultMessage='профессионалов'
                  />
                </Text>
              </Row>
              <Row>
                <Text
                  fontWeight='normal'
                  fontSize={['increased', 'massive', 'massive']}
                  lineHeight='small'
                  color='text.darkPurpleBlue'
                >
                  <FormattedMessage
                    id='landing_section_banner.for_the_revolution'
                    defaultMessage='для революции'
                  />
                </Text>
              </Row>
              <Row>
                <Text
                  fontWeight='normal'
                  fontSize={['increased', 'massive', 'massive']}
                  lineHeight='small'
                  color='text.white'
                >
                  <FormattedMessage id='landing_section_banner.in_it' defaultMessage='в IT' />
                </Text>
              </Row>
              <Layout flexBasis='20px' />
            </Column>
          </Column>
        </Box>
        <Layout flexBasis={[24, 24, 48]} flexShrink={0} />
        <Box width='100%' maxWidth={1160}>
          <Divider weight={1} backgroundColor='background.transparentGray' />
        </Box>
        <Layout flexBasis={[24, 24, 48]} flexShrink={0} />
        <Box width='100%' maxWidth={1160} justifyContent='space-between'>
          <Box width={['100%', '100%', 640]}>
            <Text
              fontSize={['semiMedium', 'semiRegular', 'regular']}
              lineHeight='primary'
              color='text.white'
            >
              <FormattedMessage
                id='landing_section_banner.we_dont_teach_programming'
                defaultMessage='Мы не учим программированию и дизайну, мы учим мышлению способному релизовывывать невозможные идеи.'
              />
            </Text>
          </Box>
          <Box display={['none', 'none', 'flex']}>
            <Button size='mediumPaddingNormalHeight' variant='borderTransparentWhite'>
              <ComputerMouseIcon width={20} height={20} />
            </Button>
          </Box>
        </Box>
        <Layout flexBasis={[24, 24, 48]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[0, 0, 60]} flexShrink={0} />
      <Layout flexBasis={[0, 0, 334]} />
      <Column justifyContent={['start', 'start', 'flex-end']}>
        <SocialLinks />
        <Layout flexBasis={[84, 112, 48]} />
      </Column>
    </Layout>
    <Layout flexBasis={[0, 0, 30]} flexShrink={0} />
    <Layout flexBasis={[20, 20, 50]} />
  </Box>
)

export { SectionBanner }
