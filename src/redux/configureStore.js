import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

import reducers from './rootReducer'
import { persistConfig } from './middlewares/persistMiddleware'
import authMiddleware from './middlewares/authMiddleware'

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = cb => {
  const persistedReducer = persistReducer(persistConfig, reducers)
  const middlewares = [thunk, authMiddleware]

  const store = createStore(
    persistedReducer,
    componseEnhancers(applyMiddleware(...middlewares))
  )

  const persistor = persistStore(store, {}, () => {
    cb({ store, persistor })
  })
}
