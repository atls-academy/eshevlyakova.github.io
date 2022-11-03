import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { ArrowBottomIcon }  from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

const HeaderBlock = () => (
  <Box>
    <Column width='100%' alignItems='center'>
      <Layout flexBasis={[20, 22, 30]} />
      <Box width='100%'>
        <Layout flexBasis={[10, 15, 30]} />
        <Row justifyContent={['space-between', 'space-between', 'start']}>
          <Box width={[36, 40, 56]} flexShrink={0}>
            <Logo />
          </Box>
          <Layout flexBasis={[0, 0, 241]} flexGrow={1} />
          <Box display={['none', 'none', 'flex']}>
            <Box
              width={217}
              height={56}
              alignItems='center'
              justifyContent='center'
              borderBottom='transparentWhite'
            >
              <NextLink path='/'>
                <FormattedMessage id='landing_header.academy' defaultMessage='Academy' />
              </NextLink>
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box
              width={217}
              height={56}
              alignItems='center'
              justifyContent='center'
              borderBottom='transparentWhite'
            >
              <NextLink path='/'>
                <FormattedMessage id='landing_header.courses' defaultMessage='Курсы' />
              </NextLink>
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box
              width={217}
              height={56}
              alignItems='center'
              justifyContent='center'
              borderBottom='transparentWhite'
            >
              <NextLink path='/'>
                <FormattedMessage id='landing_header.learning' defaultMessage='Обучение' />
              </NextLink>
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box
              width={217}
              height={56}
              alignItems='center'
              justifyContent='center'
              borderBottom='transparentWhite'
            >
              <NextLink path='/'>
                <FormattedMessage id='landing_header.scholarship' defaultMessage='Стипендия' />
              </NextLink>
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box
              width={217}
              height={56}
              alignItems='center'
              justifyContent='center'
              borderBottom='transparentWhite'
            >
              <NextLink path='/'>
                <FormattedMessage id='landing_header.faq' defaultMessage='FAQ' />
              </NextLink>
            </Box>
          </Box>
          <Box display={['none', 'flex', 'none']} width={135}>
            <Button
              size='mediumPaddingExtraHeight'
              variant='transparentWhite'
              icon='arrow'
              iconSvg={<ArrowBottomIcon />}
              fill
            >
              <Row>
                <Text fontWeight='normal' fontSize='medium' lineHeight='default' color='text.white'>
                  <FormattedMessage id='landing_section_courses.courses' defaultMessage='Курсы' />
                </Text>
              </Row>
            </Button>
          </Box>
          <Box display={['flex', 'none', 'none']} width={100}>
            <Button
              size='smallPaddingMediumHeight'
              variant='transparentWhite'
              icon='arrow'
              iconSvg={<ArrowBottomIcon />}
              fill
            >
              <Row>
                <Text
                  fontWeight='normal'
                  fontSize='semiMedium'
                  lineHeight='default'
                  color='text.white'
                >
                  <FormattedMessage id='landing_header.courses' defaultMessage='Курсы' />
                </Text>
              </Row>
            </Button>
          </Box>
        </Row>
        <Layout flexBasis={[10, 15, 30]} />
      </Box>
      <Layout flexBasis={[20, 22, 30]} />
    </Column>
  </Box>
)
export { HeaderBlock }
