import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { Drawer }           from '@ui/drawer'
import { ArrowBottomIcon }  from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

const HeaderBlock = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Box>
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={[20, 22, 30]} />
          <Box width='100%'>
            <Layout flexBasis={[10, 15, 30]} />
            <Row justifyContent={['space-between', 'space-between', 'start']} alignItems='end'>
              <Box width={[36, 40, 56]} flexShrink={0}>
                <Logo />
              </Box>
              <Layout flexBasis={[0, 0, 241]} flexGrow={1} flexShrink={4} />
              <Box display={['none', 'none', 'flex']} width={1166}>
                <Box
                  width='100%'
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
                  width='100%'
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
                  width='100%'
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
                  width='100%'
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
                  width='100%'
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
              <Layout flexBasis={[0, 0, 241]} flexGrow={1} flexShrink={4} />
              <Box display={['none', 'flex', 'flex']} width={136} flexShrink={0}>
                <Button
                  size='mediumPaddingExtraHeight'
                  variant='transparentWhite'
                  iconSvg={<ArrowBottomIcon />}
                  valueRadius={['micro', 'medium', 'medium']}
                  valueWidth={[28, 40, 40]}
                  valueHeight={[28, 40, 40]}
                  onClick={() => setVisible(true)}
                  fill
                >
                  <Row>
                    <Text
                      fontWeight='normal'
                      fontSize='medium'
                      lineHeight='default'
                      color='text.white'
                    >
                      <FormattedMessage
                        id='landing_section_courses.courses'
                        defaultMessage='Курсы'
                      />
                    </Text>
                  </Row>
                </Button>
              </Box>
              <Box display={['flex', 'none', 'none']} width={100}>
                <Button
                  size='smallPaddingMediumHeight'
                  variant='transparentWhite'
                  iconSvg={<ArrowBottomIcon />}
                  valueRadius={['micro', 'medium', 'medium']}
                  valueWidth={[28, 40, 40]}
                  valueHeight={[28, 40, 40]}
                  onClick={() => setVisible(true)}
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
    </>
  )
}
export { HeaderBlock }
