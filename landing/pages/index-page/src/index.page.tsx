import React                  from 'react'

import { SectionCourses }     from '@landing/courses-fragment'
import { SectionDescription } from '@landing/description-fragment'
import { Hero }               from '@landing/hero-fragment'
import { SectionProcess }     from '@landing/process-fragment'

export const HomePage = () => (
  <>
    <Hero />
    <SectionDescription />
    <SectionCourses />
    <SectionProcess />
  </>
)

export default HomePage
