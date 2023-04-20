import { configureStore } from '@reduxjs/toolkit'
import { rtkQueryError } from './middlewares'
import reducer from './root'

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(rtkQueryError)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch