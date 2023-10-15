import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { makeApiRequest } from "./shared/utils/apiRequest";

import CartTable from "./components/CartTableComponent/CartTable";
import Details from "./components/DetailsComponent/Details";
import Header from "./components/HeaderComponent/Header";
import Navbar from "./components/NavComponent/Navbar";

import "./App.scss";

interface CartItem {
	id: number;
	name: string;
	brand: string;
	price: number;
	status?: string;
	quantity: number;
	category: string;
}

function App() {
	const [items, setItems] = useState({} as CartItem);

	useEffect(() => {
		fetchCart();
	}, []);

	const fetchCart = async () => {
		try {
			const res = await makeApiRequest({
				url: "/cart",
				urlParams: 1,
				method: "GET",
			});

			if (res.status === 200) setItems(res.data);
		} catch (err) {
			toast.error("Something went wrong");
		}
	};

	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 p-0">
						<Header />
					</div>
					<div className="col-sm-12">
						<section>
							<Details />
						</section>
					</div>
					<div className="col-sm-12">
						<section>
							<CartTable />
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
