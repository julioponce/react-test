import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '@/components/Input'
import Slider from 'rc-slider'
import ReactHtmlParser from 'react-html-parser'
import styles from './styles'
import 'rc-slider/assets/index.css'

const InputSlider = (props) => {
  const dispatch = useDispatch()
  const {
    minValue,
    maxValue,
    defaultValue,
    label,
    type,
    inputSize,
    setStoreValue
  } = props
  const [count, setCount] = useState(defaultValue)

  const onSliderChange = (value) => {
    setCount(value)
    dispatch(setStoreValue(value))
  }

  return (
    <div className={styles['input-slider']}>
      <div className={styles['info-slider']}>
        <span className={styles.label}>
          {ReactHtmlParser(label)}
        </span>
        <div className={styles.count}>
          <Input value={count} type={type} size={inputSize} />
        </div>
      </div>
      <Slider
        className={styles['rc-slider']}
        min={minValue}
        max={maxValue}
        defaultValue={defaultValue}
        onChange={(value) => onSliderChange(value)}
        trackStyle={{ backgroundColor: '#071eb3', height: 4 }}
        railStyle={{ backgroundColor: '#f0f2ff', height: 4 }}
        handleStyle={{
          height: 16,
          width: 16,
          border: '5px solid #071eb3',
          boxShadow: '0 2px 8px 0 rgba(7, 30, 179, 0.24)',
          backgroundColor: '#fff'
        }}
      />
    </div>
  )
}

export default InputSlider
