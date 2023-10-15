import { PiCheckBold } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../../shared/components/ButtonComponent/Button";

import Apple from "../../assets/apple.png";
// import Avocado from "../../assets/avocado.jpg";

interface Props {
	updateStatus: (item: object) => void;
}

const CartItemTable = ({ updateStatus }: Props) => {
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
					<tr>
						<td>
							<img src={Apple} alt="Apple" className="img" />
						</td>
						<td>Chicken Breast Fillets, Boneless matuu marinated chiken</td>
						<td>Hormel Black</td>
						<td>{`$${60.07} / 6 * 1LB`}</td>
						<td>{`$${0} X 6 * 1LB`}</td>
						<td>{`$${0}`}</td>
						<td>
							<div className="flex-center justify-content-between">
								{/*
                                    TODO:
                                    1. Change the color of the button based on status
                                    2. only visible when there is a status
                                    3. change the text-btn color based on status
                                    */}
								<div>
									<p className={`badge badge-missing rounded-lg`}></p>
								</div>
								<div className="btn-grp">
									{/* FIXME: Update the object with the cart item */}
									<Button type="text" onClick={() => updateStatus({})}>
										<PiCheckBold size={18} />
									</Button>
									{/* FIXME: Update the object with the cart item */}
									<Button type="text" onClick={() => updateStatus({})}>
										<IoCloseOutline size={24} />
									</Button>
									<Button type="text" onClick={() => {}}>
										<p>Edit</p>
									</Button>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CartItemTable;
