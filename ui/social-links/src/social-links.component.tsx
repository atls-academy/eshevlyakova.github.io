import React                from 'react'

import { Button }           from '@ui/button'
import { IconEmailIcon }    from '@ui/icons'
import { IconGithubIcon }   from '@ui/icons'
import { IconTelegramIcon } from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Link }             from '@ui/link'

const SocialLinks = () => (
  <Box position={['static', 'static', 'absolute']} right={[0, 0, 40]} bottom={[0, 0, 130]}>
    <Column width='100%'>
      <Layout flexBasis={[20, 30, 0]} />
      <Box flexDirection={['row', 'row', 'column']}>
        <Link href='https://telegram.org/' target='_blank'>
          <Button
            rounding={16}
            colors='social'
            size='medium'
            width={[95, 130, 54]}
            height={[52, 52, 54]}
          >
            <Layout>
              <IconTelegramIcon width={24} height={24} />
            </Layout>
          </Button>
        </Link>
        <Layout flexBasis={[13, 20, 16]} />
        <Link href='https://github.com/atls-academy' target='_blank'>
          <Button
            rounding={16}
            colors='social'
            size='medium'
            width={[95, 130, 54]}
            height={[52, 52, 54]}
          >
            <Layout>
              <IconGithubIcon width={24} height={24} />
            </Layout>
          </Button>
        </Link>
        <Layout flexBasis={[13, 20, 16]} />
        <Link href='mailto:me@atls.academy' target='_blank'>
          <Button
            rounding={16}
            colors='social'
            size='medium'
            width={[95, 130, 54]}
            height={[52, 52, 54]}
          >
            <Layout>
              <IconEmailIcon width={24} height={24} />
            </Layout>
          </Button>
        </Link>
      </Box>
    </Column>
  </Box>
)

export { SocialLinks }
