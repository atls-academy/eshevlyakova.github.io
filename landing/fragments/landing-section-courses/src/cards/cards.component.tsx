import React               from 'react'

import { Box }             from '@ui/layout/src'
import { Column }          from '@ui/layout/src'
import { Layout }          from '@ui/layout/src'
import { Row }             from '@ui/layout/src'
import { Swiper }          from '@ui/slider/src'
import { SwiperSlide }     from '@ui/slider/src'

import { CardDesc }        from './card-desc'
import { CardWithoutDesc } from './card-without-desc'

const Cards = () => (
  <Column>
    <CardDesc
      category='landing_section_courses.training'
      title='landing_section_courses.frontend_engineer'
      description='landing_section_courses.you_learn_fundamental_knowledge_in_it'
      mobileDescription='landing_section_courses.you_learn_fundamental_knowledge_in_it_and_improve'
    />
    <Layout flexBasis={[20, 40, 40]} />
    <CardDesc
      category='landing_section_courses.mini_course'
      title='landing_section_courses.basics_of_development'
      description='landing_section_courses.you_learn_fundamental_knowledge_in_it'
      mobileDescription='landing_section_courses.you_learn_fundamental_knowledge_in_it_and_improve'
    />
    <Layout flexBasis={[20, 40, 40]} />
    <Box>
      <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
      <Row display={['none', 'flex', 'flex']}>
        <CardWithoutDesc
          category='landing_section_courses.educational_material'
          title='landing_section_courses.how_to_use_libraries'
        />
        <Layout flexBasis={40} flexShrink={0} />
        <CardWithoutDesc
          category='landing_section_courses.educational_material'
          title='landing_section_courses.design_figma_mathematics'
        />
      </Row>
      <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
    </Box>
    <Row display={['flex', 'none', 'none']}>
      <Layout flexBasis={20} flexShrink={0} />
      <Swiper slidesPerView={1.3} spaceBetween={20} touchEventsTarget='container'>
        <SwiperSlide>
          <CardWithoutDesc
            category='landing_section_courses.educational_material'
            title='landing_section_courses.how_to_use_libraries'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardWithoutDesc
            category='landing_section_courses.educational_material'
            title='landing_section_courses.design_figma_mathematics'
          />
        </SwiperSlide>
      </Swiper>
    </Row>
  </Column>
)

export { Cards }
