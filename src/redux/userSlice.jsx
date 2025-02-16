import { createSlice } from "@reduxjs/toolkit";
import Loging from "../components/Loging";
const initialState = {
    user: {
        name: '',
        email: '',
        password: ''
    },
    isLogin: false,
    IsSignUp: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            state.IsSignUp = true;

        },
        setIsSignUp: (state) => {
            state.IsSignUp = !state.IsSignUp
        }

    }

})
export const { addUser, setIsSignUp } = userSlice.actions;
export default userSlice.reducer;
