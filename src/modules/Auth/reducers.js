import { SIGN_IN_SUCCESS } from "modules/Auth/actions"

const initialState = {
  token: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
      }
    default:
      return state
  }
}
