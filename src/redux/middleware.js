import axios from 'axios'

const middleware = ({ dispatch }) => next => action => {
        if (action.type !== 'itTime') {
            next(action)
            return
        }

        next(action)

        const { method, url, params, data, onStart, onSuccess, onFail } = action.payload

        const token = localStorage.getItem('token')

        const headers = token ? { Authorization: `Bearer ${token}` } : null

        dispatch({ type: onStart })

        axios({
            baseURL: 'http://207.154.246.125:8888/',
            method,
            data,
            url,
            params,
            headers,
        })
            .then(res => {
                if (res.status === 200 || res.status === 201) dispatch({ type: onSuccess, payload: res.data })
                else dispatch({ type: onFail, payload: res })
            })
            .catch(error => {
                // const data = { ...error?.response?.data }
                dispatch({ type: onFail, payload: error })
            })
    }

export default middleware
