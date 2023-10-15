import "./App.scss";
import Details from "./components/DetailsComponent/Details";
import Header from "./components/HeaderComponent/Header";
import Navbar from "./components/NavComponent/Navbar";

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
						<h4>ItemTable</h4>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
