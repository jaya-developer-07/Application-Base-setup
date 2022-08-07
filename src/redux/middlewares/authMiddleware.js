import { REHYDRATE } from 'redux-persist/lib/constants'
import authSelector from 'modules/Auth/selectors'

import initializeApp from 'utils/initializeApp'

const authMiddleware = () => next => action => {
  if (action.type === REHYDRATE && action.payload) {
    const persistedState = action.payload

    if (persistedState.auth) {
      const token = authSelector.getToken(persistedState)
      if (token) initializeApp(token)
    }
  }

  next(action)
}

export default authMiddleware
