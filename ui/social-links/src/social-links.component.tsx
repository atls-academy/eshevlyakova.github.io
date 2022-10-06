import React           from 'react'
import { useIntl }     from 'react-intl'

import { Button }      from '@ui/button'
import { Image }       from '@ui/image'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Link }        from '@ui/link'

const SocialLinks = () => {
  const { formatMessage } = useIntl();

  return (
    <Box
      position={['static', 'static', 'absolute']}
      right={[50, 50, 40]}
      bottom={[100, 100, 130]}
      flexDirection='column'>
      <Layout flexBasis={[20, 30, 0]}/>
      <Box
        flexDirection={['row', 'row', 'column']}>
        <Link
          href='https://telegram.org/'
          target='_blank'>
          <Button
            rounding={16}
            colors='social'
            size='medium'
            width={[95, 130, 54]}
            height={[52, 52, 54]}>
            <Layout>
              <Image
                alt={formatMessage({
                  id: 'altIconTelegram',
                  defaultMessage: 'Написать в телеграме',
                })}
                src='http://dev.eshevlyakova.ru/svg-atlantis/telegram.svg'
                contain />
            </Layout>
          </Button>
        </Link>
        <Layout flexBasis={[13, 20, 16]}/>
        <Link
          href='https://github.com/atls-academy'
          target='_blank'>
          <Button
            rounding={16}
            colors='social'
            size='medium'
            width={[95, 130, 54]}
            height={[52, 52, 54]}>
            <Layout>
              <Image
                alt={formatMessage({
                  id: 'altIconGithub',
                  defaultMessage: 'Посмотреть профиль на GitHub',
                })}
                src='http://dev.eshevlyakova.ru/svg-atlantis/github.svg'
                contain/>
            </Layout>
          </Button>
        </Link>
        <Layout flexBasis={[13, 20, 16]}/>
        <Link href='mailto:me@atls.academy' target='_blank'>
          <Button
            rounding={16}
            colors='social'
            size='medium'
            width={[95, 130, 54]}
            height={[52, 52, 54]}>
            <Layout>
              <Image
                alt={formatMessage({
                  id: 'altIconEmail',
                  defaultMessage: 'Написать email письмо',
                })}
                src='http://dev.eshevlyakova.ru/svg-atlantis/email.svg'
                contain/>
            </Layout>
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export { SocialLinks }
