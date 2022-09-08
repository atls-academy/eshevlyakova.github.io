import React from 'react';
import Link from 'next/link';
import { Image } from '@ui/image';
import styled from '@emotion/styled';

const SectionBanner = () => {
  const Banner = styled.section`
    background-color: #616161;
    position: relative;
    height: 90vh;
    min-height: 500px;
    padding-bottom: 48px;
    color: #FFFFFF;
    @media (max-width: 1550px) {
      height: 89vh;
    }
    @media (max-width: 1070px) {
      padding-bottom: 38px;
    }
    @media (max-width: 1070px) {
      min-height: 430px;
    }
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding-bottom: 65px;
      min-height: 520px;
    }
`
  const Container = styled.div`
    max-width: 1460px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    @media (max-width: 1550px) {
      max-width: 1020px;
    }
    @media (max-width: 1070px) {
      max-width: 760px;
    }
    @media (max-width: 800px) {
      max-width: 790px;
      width: 98%;
      min-width: 365px;
      padding: 0 5px;
    }
    @media (max-width: 800px) {
      height: auto;
      display: block;
      order: 1;
    }
    @media (max-width: 375px) {
      min-width: 320px;
      width: 96%;
      max-width: 375px;
    }
`
  const BannerNetworks = styled.div`
    position: absolute;
    right: 80px;
    bottom: 160px;
    a {
      display: block;
      width: 56px;
      height: 56px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      padding: 18px;
      margin-bottom: 16px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    @media (max-width: 1550px) {
      right: 50px;
      bottom: 100px;
      a {
        width: 52px;
        height: 52px;
        padding: 15px;
      }
    }
    @media (max-width: 1070px) {
      right: 30px;
      bottom: 60px;
      border-radius: 12px;
      margin-bottom: 12px;
      a{
        width: 46px;
        height: 46px;
        padding: 13px;
      }
    }
    @media (max-width: 800px) {
      position: static;
      order: 2;
      max-width: 790px;
      width: 98%;
      min-width: 365px;
      padding: 0 5px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 30px;
      a {
        width: 31%;
        max-width: 130px;
        margin-bottom: 0;
        margin-right: 12px;
        padding: 13px 47px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    @media (max-width: 375px) {
      min-width: 320px;
      width: 96%;
      max-width: 375px;
      margin-top: 24px;
      a {
        width: 30%;
        padding: 9px 41px;
      }
    }
  `
  const BannerTitle = styled.h1`
    font-weight: 400;
    font-size: 96px;
    line-height: 120%;
    letter-spacing: -0.02em;
    margin-bottom: 57px;
    span{
      padding: 0 32px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      font-size: 80px;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      font-feature-settings: 'salt' on;
    }
    @media (max-width: 1550px) {
      font-size: 86px;
      line-height: 110%;
      margin-bottom: 40px;
      span{
        font-size: 70px;
      }
    }
    @media (max-width: 1070px) {
      font-size: 68px;
      margin-bottom: 30px;
      span{
        font-size: 52px;
        padding: 1px 26px;
        border-radius: 20px;
      }
    }
    @media (max-width: 800px) {
      font-size: 46px;
      span{
        font-size: 46px;
        background-color: transparent;
        padding: 0;
      }
    }
    @media (max-width: 375px) {
      font-size: 40px;
      margin-bottom: 24px;
      span{
        font-size: 40px;
      }
    }
  `
  const BannerText = styled.div`
    width: 80%;
    padding-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    line-height: 140%;
    @media (max-width: 1550px) {
      width: 85%;
      padding-top: 35px;
    }
    @media (max-width: 1070px) {
      width: 87%;
      padding-top: 30px;
      font-size: 18px;
    }
    @media (max-width: 800px) {
      width: 100%;
      font-size: 16px;
      br{
        display: none;
      }
    }
    @media (max-width: 375px) {
      padding-top: 24px;
      font-size: 14px;
    }
  `
  const BannerTextBtn = styled.button`
    width: 72px;
    height: 48px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    outline: none;
    background: none;
    padding: 15px 30px;
    cursor: pointer;
    @media (max-width: 1550px) {
      padding: 12px 27.7px; 
    }
    @media (max-width: 1070px) {
      width: 67px;
      height: 43px;
      padding: 10px 25.5px;
    }
    @media (max-width: 800px) {
      display: none;
    }
  `

  return(
    <Banner>
    <BannerNetworks>
        <Link href="#">
          <a target = "_blank">
            <Image
              alt="Логотип telegram"
              src="https://svgshare.com/i/mQT.svg"
              contain
            />
          </a>
        </Link>
        <Link href="https://github.com/atls-academy">
          <a target = "_blank">
            <Image
              alt="Логотип github"
              src="https://svgshare.com/i/mSh.svg"
              contain
            />
          </a>
        </Link>
        <Link href="mailto:me@atls.academy">
          <a target = "_blank">
            <Image
              alt="Иконка письма"
              src="https://svgshare.com/i/mSB.svg"
              contain
            />
          </a>
        </Link>
    </BannerNetworks>
    <Container>
      <BannerTitle>Обучаем <br/>профессионалов <br/>для революции в <span>it</span>
      </BannerTitle>
      <BannerText>
        <p>Мы не учим программированию и дизайну, мы учим мышлению <br/>способному релизовывывать невозможные идеи.</p>
        <BannerTextBtn>
          <Image
            alt="Иконка компьютерной мышки"
            src="https://svgshare.com/i/mRe.svg"
          />
        </BannerTextBtn>
      </BannerText>
    </Container>
  </Banner>
)
}

export { SectionBanner }
