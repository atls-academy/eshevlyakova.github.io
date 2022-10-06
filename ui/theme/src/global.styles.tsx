import { Global }    from '@emotion/react'
import { css }       from '@emotion/react'

import React         from 'react'
import { useEffect } from 'react'
import { polyfill }  from 'seamless-scroll-polyfill'

export const GlobalStyles = () => {
  useEffect(() => {
    polyfill()
  }, [])

  return (
    <Global
      styles={css`
        @import url('http://fonts.cdnfonts.com/css/helvetica-2');

        html,
        body,
        #__next {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -webkit-overflow-scrolling: touch;
        }
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }
        body {
          font-family: "primary", sans-serif;
        }
        ul,
        ol {
            padding: 0;
        }
        
        body,
        h1,
        h2,
        h3,
        h4,
        p,
        ul,
        ol,
        li,
        dl,
        dd {
            margin: 0;
        }

        #__next {
          display: flex;
          flex-direction: column;
        }       
      `}
    />
  )
}
