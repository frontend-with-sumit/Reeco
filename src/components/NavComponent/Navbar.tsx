import { PiCaretDown } from "react-icons/pi";
import { TfiShoppingCart } from "react-icons/tfi";
import Dropdown from "react-bootstrap/Dropdown";

import Menu from "../../shared/MenuComponent/Menu";
import MenuItem from "../../shared/MenuComponent/MenuItem";

import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<Menu>
				<MenuItem>
					<div className="logo">Reeco</div>
				</MenuItem>
				<MenuItem text="Store" />
				<MenuItem text="Orders" />
				<MenuItem text="Analytics" />
			</Menu>
			<Menu>
				<MenuItem>
					<div className="position-relative">
						<TfiShoppingCart size={24} />
						{/* FIXME: Update the number dynamically */}
						<div className="badge">6</div>
					</div>
				</MenuItem>
				<MenuItem>
					<Dropdown>
						<Dropdown.Toggle variant="secondary" id="profile-dropdown">
							Hello, <em>James</em> <PiCaretDown />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#">Profile</Dropdown.Item>
							<Dropdown.Item href="#">Settings</Dropdown.Item>
							<Dropdown.Item href="#">Logout</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Navbar;
