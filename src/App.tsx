/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { makeApiRequest } from "./shared/utils/apiRequest";

import CartTable from "./components/CartTableComponent/CartTable";
import Details from "./components/DetailsComponent/Details";
import Header from "./components/HeaderComponent/Header";
import Navbar from "./components/NavComponent/Navbar";

// import { populateCart } from "./store/reducers";

import "./App.scss";
// import { RootState } from "./store";
import { Cart, CartItem } from "./shared/types";

/**
 * Assumptions:
 * 1. Here, we are assuming that the logged in user cart id is 1
 */

function App() {
	// const dispatch = useDispatch();
	// const { carts } = useSelector((state: RootState) => ({
	// 	carts: state?.carts,
	// }));

	const [cart, setCart] = useState<Cart>();
	const [cartItems, setCartItems] = useState<CartItem[]>();

	useEffect(() => {
		fetchCart();
		fetchCartItems();
	}, []);

	const fetchCart = async () => {
		try {
			const res = await makeApiRequest({
				url: "/cart/1/",
				method: "GET",
			});

			if (res.status === 200) {
				setCart(res.data);
			}
		} catch (err) {
			toast.error("Something went wrong");
		}
	};

	const fetchCartItems = async () => {
		try {
			const res = await makeApiRequest({
				url: "/cart/1/items",
				method: "GET",
			});

			if (res.status === 200) {
				setCartItems(res.data);
			}
		} catch (err) {
			toast.error("Something went wrong");
		}
	};

	return (
		<>
			<Navbar count={cartItems?.length} />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 p-0">
						<Header />
					</div>
					<div className="col-sm-12">
						<section>
							<Details cart={cart} />
						</section>
					</div>
					<div className="col-sm-12">
						<section>
							<CartTable items={cartItems} />
						</section>
					</div>
				</div>
			</div>
			<Toaster
				toastOptions={{
					className: "",
					style: {
						padding: "16px",
						color: "#000",
						fontSize: "1.4rem",
					},
				}}
			/>
		</>
	);
}

export default App;
