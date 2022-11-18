import { faker }     from '@faker-js/faker'

import { useEffect } from 'react'
import { useState }  from 'react'

const useText = () => {
  const [text, setText] = useState('')
  useEffect(() => {
    setText(faker.lorem.words())
  }, [])
  return text
}

export { useText }
