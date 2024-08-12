import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fetchNotifications } from "./actions";


export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {data: [], loading: false},
    reducers: {
        clearNotifications: (state) => {
            state.data = []
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchNotifications.pending, (state) => {
            state.loading = true;
        }) 
        .addCase(fetchNotifications.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchNotifications.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const {clearNotifications} = notificationsSlice.actions


const store = configureStore({
    reducer: {
        notifications: notificationsSlice.reducer,
    }
})

export default store