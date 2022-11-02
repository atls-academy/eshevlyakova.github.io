import React               from 'react'
import { useIntl }         from 'react-intl'

import { Box }             from '@ui/layout/src'
import { Column }          from '@ui/layout/src'
import { Layout }          from '@ui/layout/src'
import { Row }             from '@ui/layout/src'
import { Swiper }          from '@ui/slider/src'
import { SwiperSlide }     from '@ui/slider/src'

import { CardDesc }        from './card-desc'
import { CardWithoutDesc } from './card-without-desc'

const Cards = () => {
  const { formatMessage } = useIntl()

  return (
    <Column>
      <CardDesc
        category={formatMessage({
          id: 'landing_section_courses.training',
          defaultMessage: 'Обучение',
        })}
        title={formatMessage({
          id: 'landing_section_courses.frontend_engineer',
          defaultMessage: 'Frontend Engineer',
        })}
        description={formatMessage({
          id: 'landing_section_courses.you_learn_fundamental_knowledge_in_it',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
        })}
        mobileDescription={formatMessage({
          id: 'landing_section_courses.you_learn_fundamental_knowledge_in_it_and_improve',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
        })}
      />
      <Layout flexBasis={[20, 40, 40]} />
      <CardDesc
        category={formatMessage({
          id: 'landing_section_courses.mini_course',
          defaultMessage: 'Мини-курс',
        })}
        title={formatMessage({
          id: 'landing_section_courses.basics_of_development',
          defaultMessage: 'Основы разработки',
        })}
        description={formatMessage({
          id: 'landing_section_courses.you_learn_fundamental_knowledge_in_it',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
        })}
        mobileDescription={formatMessage({
          id: 'landing_section_courses.you_learn_fundamental_knowledge_in_it_and_improve',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
        })}
      />
      <Layout flexBasis={[20, 40, 40]} />
      <Box>
        <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
        <Row display={['none', 'flex', 'flex']}>
          <CardWithoutDesc
            category={formatMessage({
              id: 'landing_section_courses.educational_material',
              defaultMessage: 'Учебный материал',
            })}
            title={formatMessage({
              id: 'landing_section_courses.how_to_use_libraries',
              defaultMessage: 'Как использовать библиотеки',
            })}
          />
          <Layout flexBasis={40} flexShrink={0} />
          <CardWithoutDesc
            category={formatMessage({
              id: 'landing_section_courses.educational_material',
              defaultMessage: 'Учебный материал',
            })}
            title={formatMessage({
              id: 'landing_section_courses.design_figma_mathematics',
              defaultMessage: 'Дизайн, Figma, Математика',
            })}
          />
        </Row>
        <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
      </Box>
      <Row display={['flex', 'none', 'none']}>
        <Layout flexBasis={20} flexShrink={0} />
        <Swiper slidesPerView={1.3} spaceBetween={20} touchEventsTarget='container'>
          <SwiperSlide>
            <CardWithoutDesc
              category={formatMessage({
                id: 'landing_section_courses.educational_material',
                defaultMessage: 'Учебный материал',
              })}
              title={formatMessage({
                id: 'landing_section_courses.how_to_use_libraries',
                defaultMessage: 'Как использовать библиотеки',
              })}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardWithoutDesc
              category={formatMessage({
                id: 'landing_section_courses.educational_material',
                defaultMessage: 'Учебный материал',
              })}
              title={formatMessage({
                id: 'landing_section_courses.design_figma_mathematics',
                defaultMessage: 'Дизайн, Figma, Математика',
              })}
            />
          </SwiperSlide>
        </Swiper>
      </Row>
    </Column>
  )
}

export { Cards }
