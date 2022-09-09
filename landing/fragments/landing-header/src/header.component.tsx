import styled   from '@emotion/styled'

import React    from 'react'

import { Logo } from '@ui/logo'

const HeaderBlock = () => {
  const StyledHeader = styled.header`
    background-color: #616161;
    padding: 35px 40px;
    @media (max-width: 1550px) {
      padding: 30px 35px;
    }
    @media (max-width: 1070px) {
      padding: 25px 30px;
    }
    @media (max-width: 800px) {
      padding: 22px 20px;
    } 
    @media (max-width: 375px) {
    padding: 20px 16px;
    }
`
  const HeaderLogo = styled.div`
    @media (max-width: 1550px) {
      svg {
        width: 40px;
        height: 40px;
      }
    }
    @media (max-width: 1070px) {
     svg{
       width: 36px;
       height: 36px;
     }
    }
`
  const Container = styled.div`
    max-width: 1460px;
    margin: 0 auto;
    @media (max-width: 1550px) {
      max-width: 1020px;
    }
    @media (max-width: 1070px) {
      max-width: 760px;
    }
    @media (max-width: 800px) {
      max-width: 790px;
      width: 98%;
      min-width: 375px;
    }
    @media (max-width: 375px) {
      min-width: 320px;
      width: 96%;
      max-width: 375px;
    }
`
  return (
    <StyledHeader>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <Container />
    </StyledHeader>
  )
}

export { HeaderBlock }
