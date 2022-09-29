import { createSlice } from '@reduxjs/toolkit'
import { itTime, loginUser } from '../apis'

const login = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        user: '',
        isError: false,
    },
    reducers: {
        onStart: state => {
            state.isLoading = true
            state.isError = false
        },
        onSuccess: (state, { payload }) => {
            state.isLoading = false
            state.user = payload
        },
        onFail: (state, { payload }) => {
            state.isLoading = false
            state.isError = true
            state.err_msg = { ...payload.response.data.message }
        },
    },
})

export const userLogin = data =>
    itTime({
        url: loginUser,
        method: 'post',
        data,
        onStart: login.actions.onStart.type,
        onSuccess: login.actions.onSuccess.type,
        onFail: login.actions.onFail.type,
    })

export default login.reducer
