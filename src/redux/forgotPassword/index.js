import { createSlice } from '@reduxjs/toolkit'
import { checkEmail, itTime, newPassword, verificationCode } from '../apis'

const forgotPassword = createSlice({
    name: 'forgotPassword',
    initialState: {
        isLoading: false,
        emailUser: '',
        parolUser: '',
        passwordUser: '',
        isError: false,
    },
    reducers: {
        onStart: state => {
            state.isLoading = true
            state.isError = false
        },
        email: (state, { payload }) => {
            state.isLoading = false
            state.emailUser = payload
            state.isError = false
        },
        parol: (state, { payload }) => {
            state.isLoading = false
            state.parolUser = payload
            state.isError = false
        },
        password: (state, { payload }) => {
            state.isLoading = false
            state.passwordUser = payload
            state.isError = false
        },
        onFail: (state, { payload }) => {
            state.isLoading = false
            state.isError = true
            state.err_msg = { ...payload.response.data.message }
        },
    },
})

export const userEmail = data =>
    itTime({
        url: checkEmail,
        method: 'post',
        data,
        onStart: forgotPassword.actions.onStart.type,
        onSuccess: forgotPassword.actions.email.type,
        onFail: forgotPassword.actions.onFail.type,
    })

export const userParol = data =>
    itTime({
        url: verificationCode,
        method: 'post',
        data,
        onStart: forgotPassword.actions.onStart.type,
        onSuccess: forgotPassword.actions.parol.type,
        onFail: forgotPassword.actions.onFail.type,
    })

export const userPassword = data =>
    itTime({
        url: newPassword,
        method: 'put',
        data,
        onStart: forgotPassword.actions.onStart.type,
        onSuccess: forgotPassword.actions.password.type,
        onFail: forgotPassword.actions.onFail.type,
    })

export default forgotPassword.reducer
