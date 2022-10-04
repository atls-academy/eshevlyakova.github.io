import React           from 'react'

import { Button }      from '@ui/button'
import { Image }       from '@ui/image'
import { Box }         from '@ui/layout'
import { Layout } from '@ui/layout'
import { Link }        from '@ui/link'

const SocialLinks = () => (
  <Box
    position={['static', 'static', 'absolute', 'absolute']}
    right={[50, 50, 30, 80]}
    bottom={[100, 100, 100, 160]}
    flexDirection={['row', 'row', 'column', 'column']}
    marginTop={[20, 30, 0, 0]}
  >
    <Link
      href='https://telegram.org/'
      target='_blank'
      marginBottom={[0, 0, 16, 16]}
      marginRight={[13, 20, 0, 0]}
    >
      <Button
        rounding={16}
        colors='social'
        size='medium'
        width={[95, 130, 52, 56]}
        height={[52, 52, 52, 56]}
      >
        <Layout>
          <Image
            alt='Логотип telegram'
            src='http://dev.eshevlyakova.ru/svg-atlantis/telegram.svg'
            contain
          />
        </Layout>
      </Button>
    </Link>
    <Link
      href='https://github.com/atls-academy'
      target='_blank'
      marginBottom={[0, 0, 16, 16]}
      marginRight={[13, 20, 0, 0]}
    >
      <Button
        rounding={16}
        colors='social'
        size='medium'
        width={[95, 130, 52, 56]}
        height={[52, 52, 52, 56]}
      >
        <Layout>
          <Image
            alt='Логотип github'
            src='http://dev.eshevlyakova.ru/svg-atlantis/github.svg'
            contain
          />
        </Layout>
      </Button>
    </Link>
    <Link href='mailto:me@atls.academy' target='_blank'>
      <Button
        rounding={16}
        colors='social'
        size='medium'
        width={[95, 130, 52, 56]}
        height={[52, 52, 52, 56]}
      >
        <Layout>
          <Image
            alt='Иконка письма'
            src='http://dev.eshevlyakova.ru/svg-atlantis/email.svg'
            contain
          />
        </Layout>
      </Button>
    </Link>
  </Box>
)

export { SocialLinks }
