import React                from 'react'

import { Button }           from '@ui/button'
import { IconEmailIcon }    from '@ui/icons'
import { IconGithubIcon }   from '@ui/icons'
import { IconTelegramIcon } from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Link }             from '@ui/link'

const SocialLinks = () => (
  <Box width={['100%', 330, 56]} height={[44, 44, 200]}>
    <Column width='100%'>
      <Layout flexBasis={[20, 30, 0]} />
      <Box flexDirection={['row', 'row', 'column']} justifyContent='space-between' height='100%'>
        <Link href='https://telegram.org/' target='_blank'>
          <Layout display={['none', 'none', 'flex']}>
            <Button size='normalSocial' variant='transparentWhite'>
              <Layout>
                <IconTelegramIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <Button size='wideSocial' variant='transparentWhite'>
              <Layout>
                <IconTelegramIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
        </Link>
        <Link href='https://github.com/atls-academy' target='_blank'>
          <Layout display={['none', 'none', 'flex']}>
            <Button size='normalSocial' variant='transparentWhite'>
              <Layout>
                <IconGithubIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <Button size='wideSocial' variant='transparentWhite'>
              <Layout>
                <IconGithubIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
        </Link>
        <Link href='mailto:me@atls.academy' target='_blank'>
          <Layout display={['none', 'none', 'flex']}>
            <Button size='normalSocial' variant='transparentWhite'>
              <Layout>
                <IconEmailIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <Button size='wideSocial' variant='transparentWhite'>
              <Layout>
                <IconEmailIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
        </Link>
      </Box>
    </Column>
  </Box>
)

export { SocialLinks }
