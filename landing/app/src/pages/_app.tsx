import React              from 'react'

import { ThemeProvider }  from '@ui/theme'

const Bare = ({ Component, pageProps, props }) => {
  return (
      <ThemeProvider>
        <Component {...props} {...pageProps} />
      </ThemeProvider>
  )
}

export default Bare
