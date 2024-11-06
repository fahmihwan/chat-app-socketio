import { createSlice } from "@reduxjs/toolkit";

export const chooseUserSlice = createSlice({
    name: 'chooseUserSlice',
    initialState: {
        id: '',
        username: '',
        fullname: ''
    },
    reducers: {
        setChooseUserSlice: (state, action) => {
            state.id = action.payload.id
            state.fullname = action.payload.fullname
            state.username = action.payload.username
        },
    },
})

export const { setChooseUserSlice } = chooseUserSlice.actions
export default chooseUserSlice.reducer