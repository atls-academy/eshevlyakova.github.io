import { faker }                  from '@faker-js/faker'

import React                      from 'react'
import { Swiper as SwiperCore }   from 'swiper'
import { Pagination }             from 'swiper'
import { useEffect }              from 'react'
import { useState }               from 'react'
import { useIntl }                from 'react-intl'

import { Button }                 from '@ui/button'
import { ArrowLeftIcon }          from '@ui/icons'
import { ArrowRightIcon }         from '@ui/icons'
import { Row }                    from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Swiper }                 from '@ui/slider'
import { SwiperSlide }            from '@ui/slider'
import { SwiperInstanceExporter } from '@ui/slider'

import { SlideImage }             from './slide-image'
import { SlideText }              from './slide-text'

const SliderBlock = () => {
  const { formatMessage } = useIntl()

  const [imgSwiper, setImgSwiper] = useState<SwiperCore | null>(null)
  const [textSwiper, setTextSwiper] = useState<SwiperCore | null>(null)

  const useSlides = (path) => {
    const [content, setContent] = useState('')

    useEffect(
      () => {
        setContent(path)
      }, // eslint-disable-next-line
      []
    )

    return content
  }

  return (
    <Column alignItems='center'>
      <Box width={[335, 660, 960]}>
        <Swiper
          slidesPerView={1}
          allowTouchMove={false}
          onSlideNextTransitionStart={() => textSwiper?.slideNext()}
          onSlidePrevTransitionStart={() => textSwiper?.slidePrev()}
          loop
        >
          <SwiperInstanceExporter swiper={imgSwiper} setSwiper={setImgSwiper} />
          <SwiperSlide>
            <SlideImage
              srcImage='/img-1-slider-section-4.png'
              srcMobileImage='/img-2-slider-section-4.png'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage
              srcImage={useSlides(faker.image.cats())}
              srcMobileImage={useSlides(faker.image.cats())}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Layout flexBasis={[20, 35, 50]} />
      <Row justifyContent='space-between'>
        <Box>
          <Button
            size='smallPaddingMassiveHeight'
            variant='transparentWhite'
            onClick={() => imgSwiper?.slidePrev()}
          >
            <ArrowLeftIcon />
          </Button>
        </Box>
        <Box
          width={[230, 530, 830]}
          borderRadius='medium'
          border='veryTransparentWhite'
          overflow='hidden'
        >
          <Swiper
            slidesPerView={1}
            allowTouchMove={false}
            pagination={{ type: 'progressbar' }}
            modules={[Pagination]}
            touchEventsTarget='container'
            loop
          >
            <SwiperInstanceExporter swiper={textSwiper} setSwiper={setTextSwiper} />
            <SwiperSlide>
              <SlideText
                text={formatMessage({
                  id: 'landing_section_process.formation_of_a_system_of_basic_fragments',
                  defaultMessage: 'Формирование системы базовых фрагментов и компонентов',
                })}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideText text={useSlides(faker.lorem.words())} />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box>
          <Button
            size='smallPaddingMassiveHeight'
            variant='transparentWhite'
            onClick={() => imgSwiper?.slideNext()}
          >
            <ArrowRightIcon color='white' />
          </Button>
        </Box>
      </Row>
    </Column>
  )
}

export { SliderBlock }
