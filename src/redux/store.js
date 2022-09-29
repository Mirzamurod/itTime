import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import register from './register'
import login from './login'

export default configureStore({
    reducer: { login, register },
    middleware: [middleware],
})
