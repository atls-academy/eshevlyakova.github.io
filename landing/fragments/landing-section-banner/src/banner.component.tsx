import React from 'react';
import Link from 'next/link';
import { Image } from '@ui/image';
import styled from '@emotion/styled';

const SectionBanner = () => {
  return(<section className={"banner"}>
    <div className={"banner__networks"}>
      <Link href="#">
        <a className={"banner__networks-item"}>
          <Image
            alt="Логотип telegram"
            src="https://svgshare.com/i/mQT.svg"
          />
        </a>
      </Link>
      <Link href="/">
        <a className={"banner__networks-item"}>
          <Image
            alt="Логотип github"
            src="https://svgshare.com/i/mSh.svg"
          />
        </a>
      </Link>
      <Link href="/">
        <a className={"banner__networks-item"}>
          <Image
            alt="Иконка письма"
            src="https://svgshare.com/i/mSB.svg"
          />
        </a>
      </Link>
    </div>
    <div className={'container'}>
      <h1>Обучаем <br/>профессионалов <br/>для революции в <span>it</span>
      </h1>
      <div className={"banner__text"}>
        <p>Мы не учим программированию и дизайну, мы учим мышлению <br/>способному релизовывывать невозможные идеи.</p>
        <button className={"banner__text__btn"}>
          <Image
            alt="Иконка компьютерной мышки"
            src="https://svgshare.com/i/mRe.svg"
          />
        </button>
      </div>
    </div>
  </section>)
}

export { SectionBanner }
