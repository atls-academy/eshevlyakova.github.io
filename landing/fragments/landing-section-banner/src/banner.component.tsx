import React           from 'react'

import { Button }      from '@ui/button'
import { Image }       from '@ui/image'
import { Box }         from '@ui/layout'
import { SocialLinks } from '@ui/social-links'
import { Text }        from '@ui/text'

import { messages }    from './messages'

const SectionBanner = () => (
  <Box
    backgroundColor='#616161'
    position='relative'
    height={['89vh', '89vh', '90vh', '90vh']}
    minHeight={['520px', '630px', '500px', '500px']}
    padding='0 5px'
    paddingBottom={['65px', '65px', '38px', '48px']}
    color='#FFFFFF'
    justifyContent={['end', 'end', 'start', 'start']}
    flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
  >
    <SocialLinks />
    <Box
      width='100%'
      maxWidth={[600, 790, 1000, 2500]}
      margin='0 auto'
      flexDirection='column'
      justifyContent='end'
      height='100%'
    >
      <Box
        display={['none', 'none', 'flex', 'flex']}
        alignItems='end'
        marginBottom={[40, 40, 40, 57]}
      >
        <Text
          fontWeight='400'
          fontSize={[80, 70, 76, 96]}
          lineHeight={['110%', '110%', '110%', '120%']}
          letterSpacing='-0.02em'
          color='#FFFFFF'
        >
          {messages.oneLineTitle} <br />
          {messages.secondLineTitle} <br />
          {messages.thirdLineTitle}&nbsp;
        </Text>
        <Box
          padding={['0 26px', '0 22px', '0 26px', '0 32px']}
          borderRadius='24px'
          backgroundColor='rgba(255, 255, 255, 0.08)'
        >
          <Text
            fontSize={[70, 60, 66, 80]}
            lineHeight='130%'
            letterSpacing='-0.02em'
            textTransform='uppercase'
            fontFeatureSettings="'salt' on"
            color='#FFFFFF'
          >
            {' '}
            {messages.partTitle}{' '}
          </Text>
        </Box>
      </Box>

      <Text
        display={['block', 'block', 'none', 'none']}
        fontWeight='400'
        fontSize={[40, 68, 0, 0]}
        lineHeight={['110%', '110%', 0, 0]}
        letterSpacing='-0.02em'
        marginBottom='20px'
        color='#FFFFFF'
      >
        {messages.oneLineTitle} <br />
        {messages.secondLineTitle} <br />
        {messages.thirdLineTitleMobile}
      </Text>

      <Box
        width={['100%', '95%', '85%', '80%']}
        paddingTop={[25, 30, 35, 48]}
        borderTop='1px solid rgba(255, 255, 255, 0.25)'
        alignItems='center'
        justifyContent='space-between'
      >
        <Text fontSize={[16, 18, 20, 20]} lineHeight='140%' color='#FFFFFF'>
          {' '}
          {messages.oneLineDescription} <br /> {messages.secondLineDescription}{' '}
        </Text>
        <Box display={['none', 'none', 'block', 'block']}>
          <Button rounding={12} size='rounded' colors='transparent' width='72px' height='48px'>
            <Image
              alt='Иконка компьютерной мышки'
              src='http://dev.eshevlyakova.ru/svg-atlantis/computer-mouse.svg'
              contain
            />
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
)

export { SectionBanner }
