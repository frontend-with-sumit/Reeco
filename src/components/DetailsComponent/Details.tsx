import DetailItem from "./DetailItem";
import "./Details.scss";

const Details = () => {
	return (
		<div className="details-container section">
			<DetailItem title="Supplier" content="East coast fruits & vegetables" />
			<span className="separator" />
			<DetailItem title="Shipping Date" content={new Date().toDateString()} />
			<span className="separator" />
			{/* FIXME: The amount value should be updated based on the cart value */}
			<DetailItem title="Total" content={`$ 15,028.3`} />
			<span className="separator" />
			{/* FIXME: The category value should be updated based on the redux store */}
			<DetailItem title="Category" content={"Meat"} />
			<span className="separator" />
			{/* FIXME: The department value should be updated based on the redux store */}
			<DetailItem title="Department" content={"300-444-678"} />
			{/* FIXME: The status value should be updated based on the redux store */}
			<span className="separator" />
			<DetailItem title="Status" content={"Awaiting your approval"} />
		</div>
	);
};

export default Details;
