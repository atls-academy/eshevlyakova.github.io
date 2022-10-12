import React                 from 'react'
import { FormattedMessage }  from 'react-intl'

import { Button }            from '@ui/button'
import { Divider }           from '@ui/divider'
import { ComputerMouseIcon } from '@ui/icons'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { SocialLinks }       from '@ui/social-links'
import { Space }             from '@ui/text'
import { Text }              from '@ui/text'

const SectionBanner = () => (
  <Box backgroundColor='background.gray' height={['100%', '100%', '85vh']}>
    <Layout flexBasis={[20, 20, 230]} />
    <Layout
      width='100%'
      height='100%'
      flexDirection={['column', 'column', 'row']}
      justifyContent='center'
    >
      <Column justifyContent='flex-end'>
        <Layout flexBasis={[252, 332, 535]} />
        <Box width={['100%', '100%', 1116]}>
          <Column justifyContent='end'>
            <Box display={['none', 'none', 'flex']}>
              <Column justifyContent='end'>
                <Text
                  fontWeight='normal'
                  fontSize={['semiGiant', 'semiIncreased', 'giant']}
                  lineHeight={['small', 'small', 'extra']}
                  color='text.white'
                >
                  <FormattedMessage id='landing_section_banner.we_teach' defaultMessage='Обучаем' />
                </Text>
                <Text
                  fontWeight='normal'
                  fontSize={['semiGiant', 'semiIncreased', 'giant']}
                  lineHeight={['small', 'small', 'extra']}
                  color='text.white'
                >
                  <FormattedMessage
                    id='landing_section_banner.professionals'
                    defaultMessage='профессионалов'
                  />
                </Text>
                <Box>
                  <Text
                    fontWeight='normal'
                    fontSize={['semiGiant', 'semiIncreased', 'giant']}
                    lineHeight={['small', 'small', 'extra']}
                    color='text.white'
                  >
                    <FormattedMessage
                      id='landing_section_banner.for_the_revolution_in'
                      defaultMessage='для революции в'
                    />
                    <Space />
                  </Text>
                  <Box
                    borderRadius='24px'
                    backgroundColor='background.lightGray'
                    width='130px'
                    justifyContent='center'
                  >
                    <Text
                      fontSize={['semiIncreased', 'semiBig', 'increased']}
                      lineHeight='medium'
                      textTransform='uppercase'
                      color='text.white'
                    >
                      <FormattedMessage id='landing_section_banner.it' defaultMessage='it' />
                    </Text>
                  </Box>
                </Box>
              </Column>
            </Box>
            <Column display={['flex', 'flex', 'none']} justifyContent='end'>
              <Text
                fontWeight='normal'
                fontSize={['semiEnlarged', 'big', 'big']}
                lineHeight='small'
                color='text.white'
              >
                <FormattedMessage id='landing_section_banner.we_teach' defaultMessage='Обучаем' />
              </Text>
              <Text
                fontWeight='normal'
                fontSize={['semiEnlarged', 'big', 'big']}
                lineHeight='small'
                color='text.white'
              >
                <FormattedMessage
                  id='landing_section_banner.professionals'
                  defaultMessage='профессионалов'
                />
              </Text>
              <Text
                fontWeight='normal'
                fontSize={['semiEnlarged', 'big', 'big']}
                lineHeight='small'
                color='text.white'
              >
                <FormattedMessage
                  id='landing_section_banner.for_the_revolution_in_it'
                  defaultMessage='для революции в IT'
                />
              </Text>
              <Layout flexBasis='20px' />
            </Column>
          </Column>
        </Box>
        <Layout flexBasis={[24, 24, 48]} flexShrink={0} />
        <Box width={['100%', '100%', 1160]}>
          <Divider weight={1} backgroundColor='background.transparentGray' />
        </Box>
        <Layout flexBasis={[24, 24, 48]} flexShrink={0} />
        <Box width={['100%', '100%', 1160]} justifyContent='space-between'>
          <Box width={['100%', '100%', 640]}>
            <Text
              fontSize={['regular', 'medium', 'semiLarge']}
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
            <Button size='transparent' variant='transparent'>
              <ComputerMouseIcon width={20} height={20} />
            </Button>
          </Box>
        </Box>
        <Layout flexBasis={[24, 24, 48]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[0, 0, 394]} />
      <Column justifyContent={['start', 'start', 'flex-end']}>
        <SocialLinks />
        <Layout flexBasis={[112, 112, 160]} />
      </Column>
    </Layout>
    <Layout flexBasis={[20, 20, 80]} />
  </Box>
)

export { SectionBanner }
