import { PiCheckBold } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { capitalize } from "lodash";

import Button from "../../shared/components/ButtonComponent/Button";
import { CartItem } from "../../shared/types";

import Avocado from "../../assets/avocado.jpg";

interface Props {
	items?: CartItem[];
	onApproveOrder: (id: number, status: string) => void;
	onUpdateProduct: (type: string, item: { id: number; name?: string }) => void;
}

const CartItemTable = ({
	items = [],
	onApproveOrder,
	onUpdateProduct,
}: Props) => {
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
								Math.round((item?.price || 0) / 6) * ((item?.quantity || 0) * 6)
							}`}</td>
							<td>
								<div className="flex-center justify-content-between">
									{/*
                                    TODO:
                                    3. change the text-btn color based on status
								*/}
									<div>
										{item?.status && (
											<p className={`${item?.status} badge rounded-lg`}>
												{capitalize(item?.status) || ""}
											</p>
										)}
									</div>
									<div className="btn-grp">
										<Button
											type="text"
											onClick={() => onApproveOrder(item?.id, "approved")}
											disabled={
												item?.status === "approved" || item.status !== ""
											}
										>
											<PiCheckBold
												size={18}
												color={item?.status === "approved" ? "#66bb6a" : "#000"}
											/>
										</Button>
										<Button
											type="text"
											onClick={() =>
												onUpdateProduct("confirm", {
													id: item?.id,
													name: item?.name,
												})
											}
											disabled={
												["missing-urgent", "missing"].includes(
													item?.status || ""
												) || item.status !== ""
											}
										>
											<IoCloseOutline size={24} />
										</Button>
										<Button
											type="text"
											onClick={() => onUpdateProduct("edit", item)}
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
