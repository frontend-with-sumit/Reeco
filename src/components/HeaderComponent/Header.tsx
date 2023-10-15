import CustomBreadcrumb, {
	BreadcrumbInterface,
} from "../../shared/components/BreadcrumbComponent/CustomBreadcrumb";
import Button from "../../shared/components/ButtonComponent/Button";

import "./Header.scss";

const BREADCRUMBS: BreadcrumbInterface[] = [
	{ id: 1, label: "Orders", link: "#" },
	{ id: 2, label: "Order 32457ABC", link: "#" },
];

const Header = () => {
	return (
		<section className="header shadow">
			<CustomBreadcrumb items={BREADCRUMBS} />

			<div className="header-content">
				<h1>Order 32457ABC</h1>

				<div className="btn-grp">
					<Button title="Back" className="rounded-lg" type="outline" />
					<Button title="Approve order" className="rounded-lg" />
				</div>
			</div>
		</section>
	);
};

export default Header;
