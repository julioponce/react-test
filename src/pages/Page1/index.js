import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FadeTransform } from 'react-animation-components'
import { getPage1Content } from '@/store/actions/page1ContentActions'
import Title from '@/components/Title'
import Slider from '@/components/Slider'
import styles from './styles'

const Page1 = () => {
  const { page1Content } = useSelector(state => state.page1Content)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPage1Content())
  }, [])

  return (
    <div className={`container`}>
      <div className={styles.content}>
        <FadeTransform in delay={0} transformProps={{ enterTransform: 'translateX(0px)', exitTransform: 'translateX(-100px)' }}>
          <Title text={page1Content.title} />
        </FadeTransform>
        {
          page1Content.reviews
            ? (<Slider reviews={page1Content.reviews} />)
            : ('')
        }
      </div>
    </div>
  )
}

export default Page1
