export const SET_INGREDIENT_SPENDING = 'SET_INGREDIENT_SPENDING'
export const SET_FULLTIME_EMPLOYEES = 'SET_FULLTIME_EMPLOYEES'

export const setIngredientSpending = quantity => {
  return {
    type: SET_INGREDIENT_SPENDING,
    payload: quantity
  }
}

export const setFulltimeEmployees = quantity => {
  return {
    type: SET_FULLTIME_EMPLOYEES,
    payload: quantity
  }
}
