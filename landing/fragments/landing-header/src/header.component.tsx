import React from 'react';

import Link from 'next/link';
import { Image } from '@ui/image';
import styled from '@emotion/styled';

const HeaderBlock = () => {
  const StyledHeader = styled.header`
  background-color: #616161;
`
  const HeaderLogo = styled.div`
  width: 40px;
  height: 40px;
`
  return(<StyledHeader>
    <HeaderLogo>
      <Link href="/">
        <a>
          <Image
            alt="Логотип академии"
            src="https://svgshare.com/i/mRJ.svg"
            contain
          />
        </a>
      </Link>
    </HeaderLogo>
    <div className={"container"}>

    </div>
  </StyledHeader>);
}

export { HeaderBlock }
