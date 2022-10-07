import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { Button }              from '@ui/button'
import { Divider }             from '@ui/divider'
import { ComputerMouseIcon }   from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout } from '@ui/layout'
import { SocialLinks }         from '@ui/social-links'
import { Space }               from '@ui/text'

import { Text }         from '@ui/text'

const SectionBanner = () => (
  <Box
    backgroundColor='background.gray'
    position='relative'
    height={['89vh', '89vh', '90vh']}
    minHeight={['520px', '630px', '500px']}
    flexDirection='column'
    justifyContent={['end', 'end', 'start']}
    alignItems='center'
  >
    <Box
      width='98%'
      maxWidth={[600, 790, 1460]}
      flexDirection='column'
      justifyContent='end'
      height='100%'
    >
      <Box display={['none', 'none', 'flex']} flexDirection='column' justifyContent='end'>
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
              fontFeatureSettings="'salt' on"
              color='text.white'
            >
              <FormattedMessage id='landing_section_banner.it' defaultMessage='it' />
            </Text>
          </Box>
        </Box>
        <Layout flexBasis={[40, 40, 57]} />
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
      <Box width={['100%', '95%', '80%']} flexDirection='column'>
        <Divider weight={1} backgroundColor='background.transparentGray' />
        <Layout flexBasis={[25, 30, 42]} />
        <Box alignItems='center' justifyContent='space-between'>
          <Layout flexBasis={['auto', 'auto', '700px']}>
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
          </Layout>
          <Box display={['none', 'none', 'block']}>
            <Button rounding={12} size='rounded' colors='transparent' width='72px' height='48px'>
              <Box>
                <ComputerMouseIcon width={20} height={20} />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
      <SocialLinks />
    </Box>
    <Layout flexBasis={[65, 65, 48]} />
  </Box>
)

export { SectionBanner }
