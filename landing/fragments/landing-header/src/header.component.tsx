import React                         from 'react'
import { FormattedMessage }          from 'react-intl'

import { Button }                    from '@ui/button'
import { DarkPurpleArrowBottomIcon } from '@ui/icons'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Link }                      from '@ui/link'
import { Logo }                      from '@ui/logo'
import { Text }                      from '@ui/text'

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
            <Link href='/' width={217}>
              <Box
                height={56}
                alignItems='center'
                justifyContent='center'
                borderBottom='transparentWhite'
              >
                <Text
                  fontWeight='normal'
                  fontSize='semiRegular'
                  lineHeight='default'
                  color='text.white'
                >
                  <FormattedMessage id='landing_header.academy' defaultMessage='Academy' />
                </Text>
              </Box>
            </Link>
            <Layout flexBasis={20} flexShrink={0} />
            <Link href='/' width={217}>
              <Box
                height={56}
                alignItems='center'
                justifyContent='center'
                borderBottom='transparentWhite'
              >
                <Text
                  fontWeight='normal'
                  fontSize='semiRegular'
                  lineHeight='default'
                  color='text.white'
                >
                  <FormattedMessage id='landing_header.courses' defaultMessage='Курсы' />
                </Text>
              </Box>
            </Link>
            <Layout flexBasis={20} flexShrink={0} />
            <Link href='/' width={217}>
              <Box
                height={56}
                alignItems='center'
                justifyContent='center'
                borderBottom='transparentWhite'
              >
                <Text
                  fontWeight='normal'
                  fontSize='semiRegular'
                  lineHeight='default'
                  color='text.white'
                >
                  <FormattedMessage id='landing_header.learning' defaultMessage='Обучение' />
                </Text>
              </Box>
            </Link>
            <Layout flexBasis={20} flexShrink={0} />
            <Link href='/' width={217}>
              <Box
                height={56}
                alignItems='center'
                justifyContent='center'
                borderBottom='transparentWhite'
              >
                <Text
                  fontWeight='normal'
                  fontSize='semiRegular'
                  lineHeight='default'
                  color='text.white'
                >
                  <FormattedMessage id='landing_header.scholarship' defaultMessage='Стипендия' />
                </Text>
              </Box>
            </Link>
            <Layout flexBasis={20} flexShrink={0} />
            <Link href='/' width={217}>
              <Box
                height={56}
                alignItems='center'
                justifyContent='center'
                borderBottom='transparentWhite'
              >
                <Text
                  fontWeight='normal'
                  fontSize='semiRegular'
                  lineHeight='default'
                  color='text.white'
                >
                  <FormattedMessage id='landing_header.faq' defaultMessage='FAQ' />
                </Text>
              </Box>
            </Link>
          </Box>
          <Box display={['none', 'flex', 'none']}>
            <Button size='normalAllCourses' variant='transparentWhite'>
              <Text fontWeight='normal' fontSize='medium' lineHeight='default' color='text.white'>
                <FormattedMessage id='landing_section_courses.courses' defaultMessage='Курсы' />
              </Text>
              <Layout flexBasis={4} flexShrink={0} />
              <Box
                width={40}
                height={40}
                justifyContent='center'
                alignItems='center'
                borderRadius='medium'
                backgroundColor='white'
              >
                <DarkPurpleArrowBottomIcon />
              </Box>
            </Button>
          </Box>
          <Box display={['flex', 'none', 'none']}>
            <Button size='smallAllCourses' variant='transparentWhite'>
              <Text
                fontWeight='normal'
                fontSize='semiMedium'
                lineHeight='default'
                color='text.white'
              >
                <FormattedMessage id='landing_header.courses' defaultMessage='Курсы' />
              </Text>
              <Box
                width={28}
                height={28}
                justifyContent='center'
                alignItems='center'
                borderRadius='micro'
                backgroundColor='white'
              >
                <DarkPurpleArrowBottomIcon />
              </Box>
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
