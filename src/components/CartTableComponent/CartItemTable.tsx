import { PiCheckBold } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";

import Button from "../../shared/components/ButtonComponent/Button";
import Badge from "../../shared/components/BadgeComponent/Badge";
import { CartItem } from "../../shared/types";

import Avocado from "../../assets/avocado.jpg";

interface Props {
	items: CartItem[];
	onUpdateProduct: (type: string, item: object) => void;
}

const CartItemTable = ({ items, onUpdateProduct }: Props) => {
	return (
		<div className="cart-item-table">
			<table className="table">
				<thead>
					<tr>
						<td></td>
						<td>Product Name</td>
						<td>Brand</td>
						<td>Price</td>
						<td>Quantity</td>
						<td>Total</td>
						<td>Status</td>
					</tr>
				</thead>
				<tbody>
					{items?.map((item) => (
						<tr key={item?.id}>
							<td>
								<img src={Avocado} alt="Avocado" className="img" />
							</td>
							<td>{item?.name}</td>
							<td>{item?.category}</td>
							<td>{`$${item?.price} / 6 * 1LB`}</td>
							<td>{`${item?.quantity} X 6 * 1LB`}</td>
							<td>{`$${
								Math.round(item?.price / 6) * (item?.quantity * 6)
							}`}</td>
							<td>
								<div className="flex-center justify-content-between">
									{/*
                                    TODO:
                                    1. Change the color of the button based on status
                                    3. change the text-btn color based on status
								*/}
									<div>
										{item?.status && (
											<Badge
												text={item?.status || ""}
												className={item?.status}
											/>
										)}
									</div>
									<div className="btn-grp">
										<Button
											type="text"
											onClick={() =>
												onUpdateProduct("confirm", {
													id: item?.id,
													status: "approved",
												})
											}
										>
											<PiCheckBold size={18} />
										</Button>
										<Button
											type="text"
											onClick={() =>
												onUpdateProduct("confirm", {
													id: item?.id,
												})
											}
										>
											<IoCloseOutline size={24} />
										</Button>
										<Button
											type="text"
											onClick={() => onUpdateProduct("edit", { id: item?.id })}
										>
											<p>Edit</p>
										</Button>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CartItemTable;
