import { RootState } from "./../configureStore";
import { LoginResponse, RegisterResponse } from "@novomarkt/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = LoginResponse;

let initialState: InitialState = {
	id: 0,
	device_id: "",
	token: "",
	name: "",
	phone: "",
	email: null,
	photo: "",
	balance: 0,
	date: "",
	gender: false,
};

const cartSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLoggedIn: (state, action: PayloadAction<LoginResponse>) => {
			return action.payload;
		},
		userLoggedOut: () => {
			return initialState;
		},

		userRegistered: (state, acion: PayloadAction<LoginResponse>) => {
			return acion.payload;
		},
	},
});

export const { userLoggedIn, userLoggedOut, userRegistered } =
	cartSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default cartSlice.reducer;
