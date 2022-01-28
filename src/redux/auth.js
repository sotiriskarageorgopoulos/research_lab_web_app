//Authenticate user and protect routes.
import {
    createSlice
} from '@reduxjs/toolkit';

const initialStateValue = {
    isAuth: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        setAuth: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {
    setAuth
} = authSlice.actions
export default authSlice.reducer