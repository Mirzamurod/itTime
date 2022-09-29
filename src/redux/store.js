import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import { register, login, forgotPassword } from '.'

export default configureStore({
    reducer: { login, register, forgotPassword },
    middleware: [middleware],
})
