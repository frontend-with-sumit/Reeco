import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../shared/types";

interface InitialState {
	carts: { id: number; items: CartItem[]; cart_total: number }[] | [];
}

const initialState: InitialState = {
	carts: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		populateCart: (state, action) => {
			state.carts = action.payload;
		},
		updateStatus: (state, action) => {
			const { item_id, status } = action.payload;
			const cart = state.carts.find((cart) =>
				cart.items.some((item) => item.id === item_id)
			);
			if (cart) {
				const item = cart.items.find((item) => item.id === item_id);
				if (item) {
					item.status = status;
				}
			}
		},
	},
});

export const { updateStatus, populateCart } = cartSlice.actions;
export default cartSlice.reducer;
