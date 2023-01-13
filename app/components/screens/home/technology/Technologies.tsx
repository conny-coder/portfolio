import { FC } from 'react'
import Title from '../../../ui/title/Title'
import Technology, { ITechnology } from './Technology'
import styles from './Technology.module.scss'

const Technologies: FC<{ technologies: ITechnology[] }> = ({
  technologies,
}) => {
  return (
    <>
      <Title title='Technologies' />
      <div className={styles.technologies}>
        {technologies &&
          technologies.map((t, idx) => (
            <Technology
              key={`technology ${idx}`}
              image={t.image}
              name={t.name}
              stars={t.stars}
              title={t.title}
            />
          ))}
      </div>
    </>
  )
}
export default Technologies
