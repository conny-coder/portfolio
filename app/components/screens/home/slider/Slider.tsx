import { FC, lazy, useEffect, useState } from 'react'
import { IProject } from '../../../../types/project'
import Title from '../../../ui/title/Title'
import styles from './Slider.module.scss'
import SliderItem from './SliderItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/pagination'

const Slider: FC<{ projects: IProject[] }> = ({ projects }) => {
  const [between, setBetween] = useState<number>(50)
  const [slides, setSlides] = useState<number>(2)
  useEffect(() => {
    if (window.innerWidth < 900) {
      setBetween(20)
    }
    if (window.innerWidth < 600) {
      setSlides(1)
    }
  }, [])

  return (
    <>
      <Title title='My projects' />
      <div className={styles['slider-block']}>
        <Swiper
          modules={[Lazy, Pagination]}
          lazy={true}
          spaceBetween={between}
          loop={true}
          slidesPerView={slides}
          pagination={{
            clickable: true,
            clickableClass: styles.bullet,
            dynamicBullets: true,
          }}
        >
          <div className={styles.slider}>
            {projects &&
              projects.map((p, idx) => (
                <SwiperSlide
                  className={styles.slide}
                  key={`slider-item ${idx}`}
                >
                  <SliderItem project={p} />
                </SwiperSlide>
              ))}
          </div>
          ...
        </Swiper>
      </div>
    </>
  )
}
export default Slider
