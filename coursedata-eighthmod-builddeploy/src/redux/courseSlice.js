import { createSlice, createAction } from '@reduxjs/toolkit'
// export const updateFields = createAction('course/updateFields');

const initialState = {

    name: null,
    phone: 0,
    email: null,
    subject: null

}
// const initialState = {
//     fields: [],
// };

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {

        updateFields: (state, action) => {
            // state.push(action.payload);
            // console.log("data in slice:" + action.payload)
            console.log("data in slice:" + action.payload.name)
            // const random = Math.floor(Math.random() * 1000);
            // state.id += action.payload.id
            state.name += action.payload.name
            state.phone += action.payload.phone
            state.email += action.payload.email
            state.subject += action.payload.subject
            // console.log("name in the slice is " + state)
        }
        // updateFields: (state, action) => {
        //     state.fields = action.payload;
        //     console.log("data in slice:" + action.payload)
        //     console.log("data in slice:" + action.payload[0])
        // },
    }
})

// Action creators are generated for each case reducer function
export const { updateFields } = courseSlice.actions

export default courseSlice.reducer