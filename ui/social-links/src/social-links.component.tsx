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
  <Box position={['static', 'static', 'absolute']} right={[0, 0, 40]} bottom={[0, 0, 130]}>
    <Column width='100%'>
      <Layout flexBasis={[20, 30, 0]} />
      <Box flexDirection={['row', 'row', 'column']}>
        <Link href='https://telegram.org/' target='_blank'>
          <Layout display={['none', 'none', 'flex']}>
            <Button size='normalSocial' variant='social'>
              <Layout>
                <IconTelegramIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <Button size='wideSocial' variant='social'>
              <Layout>
                <IconTelegramIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
        </Link>
        <Layout flexBasis={[13, 20, 16]} />
        <Link href='https://github.com/atls-academy' target='_blank'>
          <Layout display={['none', 'none', 'flex']}>
            <Button size='normalSocial' variant='social'>
              <Layout>
                <IconGithubIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <Button size='wideSocial' variant='social'>
              <Layout>
                <IconGithubIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
        </Link>
        <Layout flexBasis={[13, 20, 16]} />
        <Link href='mailto:me@atls.academy' target='_blank'>
          <Layout display={['none', 'none', 'flex']}>
            <Button size='normalSocial' variant='social'>
              <Layout>
                <IconEmailIcon width={24} height={24} />
              </Layout>
            </Button>
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <Button size='wideSocial' variant='social'>
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
