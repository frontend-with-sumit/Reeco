import { PiCaretDown } from "react-icons/pi";
import { TfiShoppingCart } from "react-icons/tfi";
import Dropdown from "react-bootstrap/Dropdown";

import List from "../../shared/components/ListComponent/List";
import ListItem from "../../shared/components/ListComponent/ListItem";

import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<List>
				<ListItem>
					<div className="logo">Reeco</div>
				</ListItem>
				<ListItem text="Store" />
				<ListItem text="Orders" />
				<ListItem text="Analytics" />
			</List>
			<List>
				<ListItem>
					<div className="position-relative">
						<TfiShoppingCart size={24} />
						{/* FIXME: Update the number dynamically */}
						<div className="badge">6</div>
					</div>
				</ListItem>
				<ListItem>
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
				</ListItem>
			</List>
		</div>
	);
};

export default Navbar;
