import { ChangeEvent, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { FiSearch } from "react-icons/fi";
import { PiPrinterLight } from "react-icons/pi";

import Input from "../../shared/components/Form/Input";
import List from "../../shared/components/ListComponent/List";
import ListItem from "../../shared/components/ListComponent/ListItem";
import Button from "../../shared/components/ButtonComponent/Button";
import ModalConfirm from "../../shared/components/Modals/ModalConfirm";
import { CartItem, Nullable } from "../../shared/types";

import EditProductModal from "./Modal/EditProductModal";
import CartItemTable from "./CartItemTable";

import "./CartTable.scss";
import { makeApiRequest } from "../../shared/utils/apiRequest";
import toast from "react-hot-toast";
import { truncateText } from "../../shared/utils/stringUtils";
// import { updateStatus } from "../../store/reducers";

interface ModalInterface {
	show: boolean;
	type: Nullable<string>;
	data: { id: Nullable<number>; name?: string; status?: string } | null;
}

interface Props {
	items?: CartItem[];
}

const CartTable = ({ items }: Props) => {
	// const dispatch = useDispatch();

	const [searchTerm, setSearchTerm] = useState<string>("");
	const [cartItems, setCartItems] = useState<CartItem[]>();
	const [modal, setModal] = useState<ModalInterface>({
		show: false,
		type: null,
		data: null,
	});

	useEffect(() => {
		if (!isEmpty(items)) {
			console.log(items);
			setCartItems(items);
		}
	}, [items]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

	const handleOrderStatus = async (
		itemId: Nullable<number> = null,
		status: string = ""
	) => {
		const cartItemsClone = [...(cartItems || [])];
		const item = cartItemsClone.find((item) => item?.id === itemId);

		if (item) {
			item.status = status;

			try {
				const res = await makeApiRequest({
					url: "/items/" + itemId,
					method: "PATCH",
					data: item,
				});

				if (res.status === 200) {
					setCartItems(cartItemsClone);
					toast.success("Status Updated");
					// dispatch(updateStatus("approved"));
				}
			} catch (err) {
				toast.error("Something went wrong");
			}
		}
	};

	return (
		<div className="section cart-table">
			<List className="justify-content-between cart-table-header">
				<ListItem>
					<Input
						name="search"
						value={searchTerm}
						onChange={handleChange}
						className="rounded-lg search-input"
						placeholder="Search...."
						rightIcon={<FiSearch size={18} />}
						isRequired
					/>
				</ListItem>
				<div className="cart-table-header--right">
					<ListItem>
						<Button
							title="Add Item"
							className="rounded-lg"
							type="outline"
							onClick={() => {}}
						/>
					</ListItem>
					<ListItem>
						<PiPrinterLight
							size={34}
							color="#1f633f"
							className="cursor-pointer"
						/>
					</ListItem>
				</div>
			</List>

			<CartItemTable
				items={cartItems}
				onApproveOrder={handleOrderStatus}
				onUpdateProduct={(type: string, data: { id: number; name?: string }) =>
					setModal({ show: true, type, data })
				}
			/>

			<ModalConfirm
				show={modal?.type === "confirm" && modal?.show}
				onHide={() => setModal({ show: false, type: null, data: null })}
				title="Missing Product"
				description={`Is '${truncateText(modal?.data?.name)}' urgent?`}
				onConfirm={() => handleOrderStatus(modal?.data?.id, "missing-urgent")}
				onCancel={() => handleOrderStatus(modal?.data?.id, "missing")}
				confirmLabel="Yes"
				cancelLabel="No"
			/>

			<EditProductModal
				show={modal?.type === "edit" && modal?.show}
				onHide={() => setModal({ show: false, type: null, data: null })}
				title="Missing Product"
				description="Is chicken Breast Fillet urgent?"
				onConfirm={() => {}}
				confirmLabel="Send"
				cancelLabel="Cancel"
			/>
		</div>
	);
};

export default CartTable;
