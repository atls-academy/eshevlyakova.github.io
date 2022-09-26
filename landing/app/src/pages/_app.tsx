import React              from 'react'

import { ThemeProvider }  from '@ui/theme'

const Bare = ({ Component, pageProps, props }) => (
      <ThemeProvider>
        <Component {...props} {...pageProps} />
      </ThemeProvider>
  )

export default Bare
