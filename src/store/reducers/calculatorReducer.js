import {
  SET_INGREDIENT_SPENDING,
  SET_FULLTIME_EMPLOYEES
} from '@/store/actions/calculatorActions'

const initialState = {
  ingredientSpending: 10,
  fulltimeEmployees: 1
}

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_SPENDING:
      return {
        ...state,
        ingredientSpending: action.payload
      }
    case SET_FULLTIME_EMPLOYEES:
      return {
        ...state,
        fulltimeEmployees: action.payload
      }
    default:
      return state
  }
}

export default calculatorReducer
