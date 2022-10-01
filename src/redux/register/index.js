import { createSlice } from '@reduxjs/toolkit'
import { itTime, registerUser } from '../apis'

const register = createSlice({
    name: 'register',
    initialState: {
        isLoading: false,
        register: '',
        isError: false,
    },
    reducers: {
        onStart: state => {
            state.isLoading = true
            state.isError = false
        },
        onSuccess: (state, { payload }) => {
            state.isLoading = false
            state.register = payload
        },
        onFail: (state, { payload }) => {
            state.isLoading = false
            state.isError = true
            state.err_msg = { ...payload.response.data.message }
        },
    },
})

export const userRegister = data =>
    itTime({
        url: registerUser,
        method: 'post',
        data,
        onStart: register.actions.onStart.type,
        onSuccess: register.actions.onSuccess.type,
        onFail: register.actions.onFail.type,
    })

export default register.reducer
