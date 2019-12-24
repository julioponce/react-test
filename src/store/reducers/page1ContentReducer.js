import {
  GET_PAGE1_CONTENT_REQUEST,
  GET_PAGE1_CONTENT_SUCCESS,
  SET_SLIDE
} from '@/store/actions/page1ContentActions'

const initialState = {
  page1Content: [],
  slide: 0,
  loading: false
}

const page1ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGE1_CONTENT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_PAGE1_CONTENT_SUCCESS:
      return {
        ...state,
        page1Content: action.payload,
        loading: false
      }
    case SET_SLIDE:
      return {
        ...state,
        slide: action.payload
      }
    default:
      return state
  }
}

export default page1ContentReducer
