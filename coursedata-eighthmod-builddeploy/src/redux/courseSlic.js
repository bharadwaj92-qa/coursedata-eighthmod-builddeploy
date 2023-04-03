import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    name: null,
    phone: 0,
    email: null,
    subject: null
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        // increment: state => {
        //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //   // doesn't actually mutate the state because it uses the Immer library,
        //   // which detects changes to a "draft state" and produces a brand new
        //   // immutable state based off those changes
        //   state.value += 1
        // },
        // decrement: state => {
        //   state.value -= 1
        // },
        takeUserinput: (state, action) => {
            // state.push(action.payload);
            // console.log("data in slice:" + action.payload)
            // const random = Math.floor(Math.random() * 1000);
            state.id += action.payload.id
            state.name += action.payload.name
            state.phone += action.payload.phone
            state.email += action.payload.email
            state.subject += action.payload.subject
            // console.log("name in the slice is " + state)
        }
    }
})

// Action creators are generated for each case reducer function
export const { takeUserinput } = courseSlice.actions

export default courseSlice.reducer