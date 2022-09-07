import React, { Component } from "react";
import { HeaderBlock } from '@landing/header-fragment';
import { SectionBanner } from '@landing/banner-fragment';

function Main() {
      return(<main>
        <SectionBanner/>
      </main>)
}

class HomePage extends Component<any, any> {
  state = {};
  render() {
    return(<>
      <HeaderBlock/>
      <Main/>
    </>)
  }
}


export default HomePage
