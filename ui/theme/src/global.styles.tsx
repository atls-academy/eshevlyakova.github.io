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
      
      .swiper-pagination {
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: left;
        transition: .3s opacity;
        transform: translate3d(0, 0, 0);
        z-index: 10;
      }
      .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background: white;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: scale(0);
        transform-origin: left top;
      }
      .swiper-horizontal>.swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal {
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
      }
`}
    />
  )
}
