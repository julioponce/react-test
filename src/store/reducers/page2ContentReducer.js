import {
  GET_PAGE2_CONTENT_REQUEST,
  GET_PAGE2_CONTENT_SUCCESS
} from '@/store/actions/page2ContentActions'

const initialState = {
  page2Content: [],
  loading: false
}

const page2ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGE2_CONTENT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_PAGE2_CONTENT_SUCCESS:
      return {
        page2Content: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default page2ContentReducer
