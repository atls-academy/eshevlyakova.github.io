import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'

import { Button }           from '@ui/button'
import { ArrowTopIcon }     from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Backdrop }         from './backdrop'
import { DrawerProps }      from './drawer.interfaces'
import { Renderer }         from './renderer'

const Drawer: FC<DrawerProps> = ({ active, onClose }) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 900 }}
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
    >
      <Backdrop onClick={onClose} />
    </motion.div>
    <motion.div
      style={{ position: 'fixed', left: 0, top: '-100%', width: '100%', zIndex: 9999 }}
      animate={{ top: 0 }}
      exit={{ top: '-100%' }}
      transition={{ duration: 0.5 }}
      id='drawer'
    >
      <Box
        width='100%'
        height={[495, 600, 600]}
        backgroundColor='background.white'
        borderBottomLeftRadius={['bigger', 'semiHuge', 'huge']}
        borderBottomRightRadius={['bigger', 'semiHuge', 'huge']}
      >
        <Layout flexBasis={[21, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[20, 25, 35]} flexShrink={0} />
          <Row justifyContent={['end', 'space-between', 'space-between']} alignItems='center'>
            <Box width={[36, 40, 56]} display={['none', 'flex', 'flex']}>
              <Logo color='darkPurpleBlue' />
            </Box>
            <Box width={136} display={['none', 'flex', 'flex']}>
              <Button
                size='mediumPaddingExtraHeight'
                variant='darkPurpleBlue'
                iconSvg={<ArrowTopIcon />}
                valueRadius={['micro', 'medium', 'medium']}
                valueWidth={[28, 40, 40]}
                valueHeight={[28, 40, 40]}
                onClick={onClose}
                fill
              >
                <Row>
                  <Text
                    fontWeight='normal'
                    fontSize='medium'
                    lineHeight='default'
                    color='text.white'
                  >
                    <FormattedMessage id='landing_section_courses.courses' defaultMessage='Курсы' />
                  </Text>
                </Row>
              </Button>
            </Box>
            <Box display={['flex', 'none', 'none']} width={100}>
              <Button
                size='smallPaddingMediumHeight'
                variant='darkPurpleBlue'
                iconSvg={<ArrowTopIcon />}
                valueRadius={['micro', 'medium', 'medium']}
                valueWidth={[28, 40, 40]}
                valueHeight={[28, 40, 40]}
                onClick={onClose}
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
          <Layout flexBasis={[20, 25, 35]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[21, 50, 80]} flexShrink={0} />
      </Box>
    </motion.div>
  </Renderer>
)
export { Drawer }
