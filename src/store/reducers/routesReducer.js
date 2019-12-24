import {
  GET_ROUTES_REQUEST,
  GET_ROUTES_SUCCESS
} from '@/store/actions/routesActions'

const initialState = {
  routes: [],
  loading: false
}

const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_ROUTES_SUCCESS:
      return {
        ...state,
        routes: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default routesReducer
