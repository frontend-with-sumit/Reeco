import { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import CartTable from "./components/CartTableComponent/CartTable";
import Details from "./components/DetailsComponent/Details";
import Header from "./components/HeaderComponent/Header";
import Navbar from "./components/NavComponent/Navbar";

import "./App.scss";

function App() {
	// Here, we are working on the items in cart 1
	// later it can be made dynamic based on the users
	const URL = "http://localhost:3000/cart/1";

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const res = await axios({
				baseURL: URL,
				method: "GET",
			});

			console.log(res.data);
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
