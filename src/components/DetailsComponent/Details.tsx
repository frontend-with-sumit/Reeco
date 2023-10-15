import { Cart } from "../../shared/types";
import DetailItem from "./DetailItem";
import "./Details.scss";

interface Props {
	cart: Cart;
}

const Details = ({ cart }: Props) => {
	return (
		<div className="details-container section">
			<DetailItem title="Supplier" content="East coast fruits & vegetables" />
			<span className="separator" />
			<DetailItem title="Shipping Date" content={new Date().toDateString()} />
			<span className="separator" />
			<DetailItem title="Total" content={`$ ${cart?.cart_total}`} />
			<span className="separator" />
			<DetailItem title="Category" content={"Food"} />
			<span className="separator" />
			<DetailItem title="Department" content={"300-444-678"} />
			<span className="separator" />
			<DetailItem title="Status" content={"Awaiting your approval"} />
		</div>
	);
};

export default Details;
