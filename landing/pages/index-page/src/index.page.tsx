import React             from 'react'

import { SectionBanner } from '@landing/banner-fragment'
import { HeaderBlock }   from '@landing/header-fragment'

const Main = () => (
  <main>
    <SectionBanner />
  </main>
)

export const HomePage = () => (
  <>
    <HeaderBlock />
    <Main />
  </>
)

export default HomePage
