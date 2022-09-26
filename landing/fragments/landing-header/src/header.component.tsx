import React    from 'react'

import { Box }  from '@ui/layout'
import { Logo } from '@ui/logo'

const HeaderBlock = () => (
      <Box
        backgroundColor = "#616161"
        padding = {["20px 5px", "22px 5px", "25px 5px", "30px 5px"]}
        display = "block">
        <Box width={[36, 40, 56, 56]}>
          <Logo />
        </Box>
        <Box width="100%" maxWidth={[ 600, 790, 1000, 2500 ]} margin='0 auto'/>
      </Box>
  )
export { HeaderBlock }
