import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FadeTransform } from 'react-animation-components'
import { getPage2Content } from '@/store/actions/page2ContentActions'
import Title from '@/components/Title'
import Calculator from '@/components/Calculator'
import styles from './styles'

const Page2 = () => {
  const { page2Content } = useSelector(state => state.page2Content)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPage2Content())
  }, [])

  return (
    <div className={`container`}>
      <div className={styles.content}>
        <div className={styles.left}>
          <FadeTransform in delay={0} transformProps={{ enterTransform: 'translateX(0px)', exitTransform: 'translateX(-100px)' }}>
            <Title className={styles.firstTitle} text={page2Content.title ? page2Content.title[0] : ''} />
          </FadeTransform>
          <FadeTransform in delay={0} transformProps={{ enterTransform: 'translateX(0px)', exitTransform: 'translateX(-100px)' }}>
            <Title className={styles.secondTitle} text={page2Content.title ? page2Content.title[1] : ''} />
          </FadeTransform>
          <div className={styles.description}>
            {page2Content.description}
          </div>
        </div>
        <div className={styles.right}>
          <Calculator />
        </div>
      </div>
    </div>
  )
}

export default Page2
