import { faker }     from '@faker-js/faker'

import { useEffect } from 'react'
import { useState }  from 'react'

const useImage = () => {
  const [image, setImage] = useState('')
  useEffect(() => {
    setImage(faker.image.cats())
  }, [])
  return image
}

export { useImage }
