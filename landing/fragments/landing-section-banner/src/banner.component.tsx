import React     from 'react'

import { Box }  from '@ui/layout'
import { Image } from '@ui/image'
import { Text } from '@ui/text'
import { Button } from '@ui/button'
import { SocialLinks } from '@ui/social-links'

const SectionBanner = () => (
    <Box
      backgroundColor="#616161"
      position="relative"
      height={['89vh','89vh', '90vh', '90vh']}
      minHeight={["520px", "630px", "500px", "500px"]}
      padding="0 5px"
      paddingBottom={["65px", "65px", "38px", "48px"]}
      color="#FFFFFF"
      justifyContent={["end", "end", "start", "start"]}
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}>
      <SocialLinks/>
      <Box
        width="100%"
        maxWidth={[ 600, 790, 1000, 2500 ]}
        margin='0 auto'
        flexDirection="column"
        justifyContent="end"
        height="100%">
        <Box
          display={["none", "none", "flex", "flex"]}
          alignItems="end"
          marginBottom={[40, 40, 40, 57]}>
            <Text
              fontWeight="400"
              fontSize={[80, 70, 76, 96]}
              lineHeight={["110%", "110%", "110%", "120%"]}
              letterSpacing="-0.02em"
              color="#FFFFFF">
                Обучаем <br />
                профессионалов <br />
                для революции в&nbsp;

            </Text>
            <Box
            padding={["0 26px", "0 22px", "0 26px", "0 32px"]}
            borderRadius="24px"
            backgroundColor="rgba(255, 255, 255, 0.08)">
              <Text
                fontSize={[70, 60, 66, 80]}
                lineHeight="130%"
                letterSpacing="-0.02em"
                textTransform="uppercase"
                fontFeatureSettings="'salt' on"
                color="#FFFFFF">
                it
              </Text>
            </Box>
        </Box>

        <Text
          display={["block", "block", "none", "none"]}
          fontWeight="400"
          fontSize={[40, 68, 0, 0]}
          lineHeight={["110%", "110%", 0, 0]}
          letterSpacing="-0.02em"
          marginBottom="20px"
          color="#FFFFFF">
          Обучаем <br />
          профессионалов <br />
          для революции в IT
        </Text>

        <Box
          width={["100%", "95%", "85%", "80%"]}
          paddingTop={[25, 30, 35, 48]}
          borderTop="1px solid rgba(255, 255, 255, 0.25)"
          alignItems="center"
          justifyContent="space-between">
          <Text
            fontSize={[16, 18, 20, 20]}
            lineHeight="140%"
            color="#FFFFFF">
            Мы не учим программированию и дизайну, мы учим мышлению <br/>способному релизовывывать невозможные идеи.
          </Text>
          <Box
            display={["none", "none", "block", "block"]}>
            <Button
              rounding={12}
              colors='transparent'
              width="72px"
              height="48px"
              padding="15px 30px">
              <Image alt='Иконка компьютерной мышки' src='https://svgshare.com/i/mRe.svg' />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )

export { SectionBanner }
