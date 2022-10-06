import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }      from '@ui/button'
import { Image }       from '@ui/image'
import { Box, Layout } from '@ui/layout'
import { SocialLinks } from '@ui/social-links'
import { Text, Space } from '@ui/text'

const SectionBanner = () => {
  const { formatMessage } = useIntl();

  return (
    <Box
      backgroundColor='background.gray'
      position='relative'
      height={['89vh', '89vh', '90vh']}
      minHeight={['520px', '630px', '500px']}
      flexDirection='column'
      justifyContent={['end', 'end', 'start']}
      alignItems={['start', 'start', 'center']}>
        <Box
          width='98%'
          maxWidth={[600, 790, 2500]}
          flexDirection='column'
          justifyContent='end'
          height='100%'>
          <Box
          display={['none', 'none', 'flex']}
          flexDirection='column'
          justifyContent='end'>
            <Text
            fontWeight='normal'
            fontSize={['semiGiant', 'semiIncreased', 'giant']}
            lineHeight={['small', 'small', 'extra']}
            letterSpacing='-0.02em'
            color='text.white'>  
            <FormattedMessage id='banner.oneLineTitle' defaultMessage='Обучаем' />
            </Text>
            <Text
            fontWeight='normal'
            fontSize={['semiGiant', 'semiIncreased', 'giant']}
            lineHeight={['small', 'small', 'extra']}
            letterSpacing='-0.02em'
            color='text.white'> 
            <FormattedMessage id='banner.secondLineTitle' defaultMessage='профессионалов' />
            </Text>
            <Box>
              <Text
                fontWeight='normal'
                fontSize={['semiGiant', 'semiIncreased', 'giant']}
                lineHeight={['small', 'small', 'extra']}
                letterSpacing='-0.02em'
                color='text.white'>
                <FormattedMessage id='banner.thirdLineTitle' defaultMessage='для революции в' /> 
                <Space />
              </Text>
              <Box
                borderRadius='24px'
                backgroundColor='background.lightGray'
                width='130px'
                justifyContent='center'>
                <Text
                  fontSize={['semiIncreased', 'semiBig', 'increased']}
                  lineHeight='medium'
                  letterSpacing='-0.02em'
                  textTransform='uppercase'
                  fontFeatureSettings="'salt' on"
                  color='text.white'>
                  <FormattedMessage id='banner.partTitle' defaultMessage='it' />
                </Text>
              </Box>
            </Box>
            <Layout flexBasis={[40, 40, 57]}/>
          </Box>
          <Box
          display={['flex', 'flex', 'none']}
          flexDirection='column'
          justifyContent='end'>
            <Text
              fontWeight='normal'
              fontSize={['enlarged', 'big', 'big']}
              lineHeight='small'
              letterSpacing='-0.02em'
              color='text.white'>
              <FormattedMessage id='banner.oneLineTitle' defaultMessage='Обучаем' />
            </Text>
            <Text
              fontWeight='normal'
              fontSize={['enlarged', 'big', 'big']}
              lineHeight='small'
              letterSpacing='-0.02em'
              color='text.white'>
              <FormattedMessage id='banner.secondLineTitle' defaultMessage='профессионалов' />
            </Text>
            <Text
              fontWeight='normal'
              fontSize={['enlarged', 'big', 'big']}
              lineHeight='small'
              letterSpacing='-0.02em'
              color='text.white'> 
              <FormattedMessage id='banner.thirdLineTitleMobile' defaultMessage='для революции в IT' />
            </Text>
            <Layout flexBasis='20px'/>
          </Box>
          <Box
            width={['100%', '95%', '80%']}
            borderTop='1px solid rgba(255, 255, 255, 0.25)'
            flexDirection='column'>
            <Layout flexBasis={[25, 30, 42]}/>
            <Box
              alignItems='center'
              justifyContent='space-between'>
              <Layout flexBasis={['auto', 'auto', '700px']}>
              <Text fontSize={['regular', 'medium', 'semiLarge']} lineHeight='primary' color='text.white'>
                <FormattedMessage id='banner.description' defaultMessage='Мы не учим программированию и дизайну, мы учим мышлению способному релизовывывать невозможные идеи.' />
              </Text>
              </Layout>
              <Box display={['none', 'none', 'block']}>
              <Button rounding={12} size='rounded' colors='transparent' width='72px' height='48px'>
                <Image
                  alt={formatMessage({
                    id: 'altComputerMouse',
                    defaultMessage: 'Иконка компьютерной мыши',
                  })}
                  src='http://dev.eshevlyakova.ru/svg-atlantis/computer-mouse.svg'
                  contain />
              </Button>
              </Box>
            </Box>
          </Box>
          <SocialLinks />
        </Box>
      <Layout flexBasis={[65, 65, 48]}/>
    </Box>
  )
}

export { SectionBanner }
