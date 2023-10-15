import CartTable from "./components/CartTableComponent/CartTable";
import Details from "./components/DetailsComponent/Details";
import Header from "./components/HeaderComponent/Header";
import Navbar from "./components/NavComponent/Navbar";

import "./App.scss";

function App() {
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
		</>
	);
}

export default App;
