import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        id: '',
        username: '',
        fullname: ''
    },
    reducers: {
        setUserSlice: (state, action) => {
            state.id = action.payload.id
            state.fullname = action.payload.fullname
            state.username = action.payload.username
        },
    },
})

export const { setUserSlice } = userSlice.actions
export default userSlice.reducer