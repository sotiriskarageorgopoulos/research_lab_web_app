import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {componentType: ""}

export const navbarSlice = createSlice({
    name:"navbar",
    initialState: {
        value: initialStateValue
    },
    reducers: { 
        setComponentType: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setComponentType} = navbarSlice.actions
export default navbarSlice.reducer
