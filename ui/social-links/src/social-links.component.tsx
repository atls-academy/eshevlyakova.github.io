import React                 from 'react'

import { Button }            from '@ui/button'
import { Box }               from '@ui/layout'
import { Link }              from '@ui/link'
import { Image }             from '@ui/image'

const SocialLinks = () => {
return (
  <Box
    position={["static", "static", "absolute", "absolute"]}
    right={[50, 50, 30, 80]}
    bottom={[100, 100, 100, 160]}
    flexDirection={["row", "row", "column", "column"]}
    marginTop={[20, 30, 0, 0]}>
      <Link href='https://telegram.org/' target='_blank'>
        <Button
          colors='social'
          width={["95px", "130px", "52px", "56px"]}
          height={[52, 52, 52, 56]}
          padding={["17px 13px", "17px 15px", "15px", "18px"]}
          marginBottom={[0, 0, 16, 16]}
          marginRight={[15, 20, 0, 0]}>
          <Image alt='Логотип telegram' src='https://svgshare.com/i/mQT.svg' contain />
        </Button>
      </Link>
    <Link href='https://github.com/atls-academy' target='_blank'>
      <Button
        colors='social'
        width={["95px", "130px", "52px", "56px"]}
        height={[52, 52, 52, 56]}
        padding={["17px 13px", "17px 15px", "15px", "18px"]}
        marginBottom={[0, 0, 16, 16]}
        marginRight={[15, 20, 0, 0]}>
        <Image alt='Логотип github' src='https://svgshare.com/i/mSh.svg' contain />
      </Button>
    </Link>
    <Link href='mailto:me@atls.academy' target='_blank'>
      <Button
        colors='social'
        width={["95px", "130px", "52px", "56px"]}
        height={[52, 52, 52, 56]}
        padding={["17px 13px", "17px 15px", "15px", "18px"]}>
        <Image alt='Иконка письма' src='https://svgshare.com/i/mSB.svg' contain />
      </Button>
    </Link>
  </Box>
  )
}

export { SocialLinks }
