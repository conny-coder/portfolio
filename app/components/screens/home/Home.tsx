import { FC, MutableRefObject, Ref, useRef, useState } from 'react'
import Information from './information/Information'
import AnimateText from '../../ui/animate-text/AnimateText'
import MetaTitle from '../../ui/MetaTitle'
import Slider from './slider/Slider'
import styles from './Home.module.scss'
import Bubbles from '../../ui/bubbles/Bubbles'
import Technologies from './technology/Technologies'
import { HomeProps } from '../../../types/about-me'
import Contact from './contact/Contact'

const Home: FC<HomeProps> = ({ projects, technologies }) => {
  const ref1 = useRef<any>()
  const ref2 = useRef<any>()
  const ref3 = useRef<any>()
  const ref4 = useRef<any>()
  const innerRefs: MutableRefObject<any>[] = [ref1, ref2, ref3, ref4]

  return (
    <section className={styles.section}>
      <div ref={ref1} className={styles['animate-text']}>
        <AnimateText />
      </div>

      <MetaTitle title='Portfolio | Home' />
      <div className={styles.container}>
        <Information />
      </div>

      <Bubbles innerRefs={innerRefs} />

      <div ref={ref2}>
        <Slider projects={projects} />
      </div>

      <div ref={ref3}>
        <Technologies technologies={technologies} />
      </div>

      <div ref={ref4} className={styles.container}>
        <Contact />
      </div>
    </section>
  )
}

export default Home
