import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FadeTransform } from 'react-animation-components'
import { setSlide } from '@/store/actions/page1ContentActions'
import LeftArrowIcon from '@/components/icons/left-arrow'
import RightArrowIcon from '@/components/icons/right-arrow'
import styles from './styles'

const Slider = (props) => {
  let names = []
  let positions = []
  let comments = []
  const currentSlideIndex = useSelector(state => state.page1Content.slide)
  const totalSlides = props.reviews.length

  props.reviews.map(testimonial => {
    names.push(testimonial.name)
    positions.push(testimonial.position)
    comments.push(testimonial.comment)
  })

  const dispatch = useDispatch()

  const setNextSlide = () => {
    const nextSlideIndex = currentSlideIndex < props.reviews.length - 1
      ? currentSlideIndex + 1
      : currentSlideIndex
    dispatch(setSlide(nextSlideIndex))
  }

  const setPreviousSlide = () => {
    const previousSlideIndex = currentSlideIndex > 0
      ? currentSlideIndex - 1
      : currentSlideIndex
    dispatch(setSlide(previousSlideIndex))
  }

  return (
    <div className={styles.slider}>
      <div className={styles.left}>
        <div className={styles.name}>
          {names[currentSlideIndex]}
        </div>
        <div className={styles.position}>
          {positions[currentSlideIndex]}
        </div>
      </div>
      <div className={styles.comment}>
        {comments[currentSlideIndex]}
      </div>
      <div className={styles.controls}>
        <div className={styles.pagination}>
          {`${currentSlideIndex + 1}/${totalSlides}`}
        </div>
        <button className={styles.button} onClick={() => setPreviousSlide()}>
          <LeftArrowIcon />
        </button>
        <button className={styles.button} onClick={() => setNextSlide()}>
          <RightArrowIcon />
        </button>
      </div>
    </div>
  )
}

export default Slider
