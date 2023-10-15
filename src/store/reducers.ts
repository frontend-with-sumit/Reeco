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
			const stateClone = { ...state };
			stateClone.carts = action.payload;

			return stateClone;
		},
		updateStatus: (state, action) => {
			const { item_id, status } = action.payload;
			const stateClone = { ...state };
			const item = stateClone.carts[0]?.items?.find(
				(item) => item?.id === item_id
			);
			if (item) item.status = status;
			return stateClone;
		},
	},
});

export const { updateStatus, populateCart } = cartSlice.actions;
export default cartSlice.reducer;
