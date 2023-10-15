/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { makeApiRequest } from "./shared/utils/apiRequest";

import CartTable from "./components/CartTableComponent/CartTable";
import Details from "./components/DetailsComponent/Details";
import Header from "./components/HeaderComponent/Header";
import Navbar from "./components/NavComponent/Navbar";

import { populateCart } from "./store/reducers";

import "./App.scss";
import { RootState } from "./store";

function App() {
	const dispatch = useDispatch();
	const { carts } = useSelector((state: RootState) => ({
		carts: state?.carts,
	}));

	useEffect(() => {
		fetchCart();
	}, []);

	const fetchCart = async () => {
		try {
			const res = await makeApiRequest({
				url: "/cart",
				method: "GET",
			});

			if (res.status === 200) dispatch(populateCart(res.data));
		} catch (err) {
			toast.error("Something went wrong");
		}
	};

	return (
		<>
			{/* Here, we are only working on the first cart item */}
			<Navbar count={carts[0]?.items?.length} />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 p-0">
						<Header />
					</div>
					<div className="col-sm-12">
						<section>
							<Details cart={carts[0]} />
						</section>
					</div>
					<div className="col-sm-12">
						<section>
							<CartTable cart={carts[0]} />
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
