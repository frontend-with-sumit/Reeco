import "./App.scss";
import Navbar from "./components/NavComponent/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12"></div>
					<div className="col-sm-12">
						<h4>Header</h4>
					</div>
					<div className="col-sm-12">
						<h4>Detail</h4>
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
