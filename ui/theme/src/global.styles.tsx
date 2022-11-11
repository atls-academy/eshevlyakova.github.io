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
        @font-face {
          font-family: "Gella Display";
          src: local("Gella Display"),
            url("/fonts/gella-display-light.otf") format("opentype")
        }

      html,
      body,
      #__next {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        scroll-behavior: smooth;
      }
      html,
      body {
        overflow-x: hidden;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      `}
    />
  )
}
