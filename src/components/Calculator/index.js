import React from 'react'
import { useSelector } from 'react-redux'
import {
  setIngredientSpending,
  setFulltimeEmployees
} from '@/store/actions/calculatorActions'
import InputSlider from '@/components/InputSlider'
import EstimatedValue from '@/components/EstimatedValue'
import styles from './styles'

const Calculator = () => {
  const state = useSelector(state => state.calculator)

  const rawCostFoodSavings = state.ingredientSpending * 0.3
  const rawAnnualSavings = state.fulltimeEmployees * 1337 + rawCostFoodSavings

  const costFoodSavings = rawCostFoodSavings % 1 === 0 ? rawCostFoodSavings : rawCostFoodSavings.toFixed(2)
  const annualSavings = rawAnnualSavings % 1 === 0 ? rawAnnualSavings : rawAnnualSavings.toFixed(2)

  return (
    <div className={styles.calculator}>
      <InputSlider
        minValue={10}
        maxValue={100}
        defaultValue={10}
        type="money"
        inputSize="large"
        label="Monthly<br />ingredient spending"
        setStoreValue={setIngredientSpending}
      />
      <InputSlider
        minValue={1}
        maxValue={10}
        defaultValue={1}
        type="time"
        inputSize="small"
        label="Full-time employees that<br />process invoices"
        setStoreValue={setFulltimeEmployees}
      />
      <div className={styles.savings}>
        <EstimatedValue
          value={costFoodSavings}
          label="Estimated cost food savings"
        />
        <EstimatedValue
          value={annualSavings}
          label="Your estimated annual savings"
        />
      </div>
    </div>
  )
}

export default Calculator
