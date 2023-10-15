import { ChangeEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PiPrinterLight } from "react-icons/pi";

import Input from "../../shared/components/Form/Input";
import List from "../../shared/components/ListComponent/List";
import ListItem from "../../shared/components/ListComponent/ListItem";
import Button from "../../shared/components/ButtonComponent/Button";

import "./CartTable.scss";
import CartItemTable from "./CartItemTable";
import ModalConfirm from "../../shared/components/Modals/ModalConfirm";
import { Nullable } from "../../shared/types";

interface ModalInterface {
	show: boolean;
	data: Nullable<object>;
}

const CartTable = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [showConfirmModal, setShowConfirmModal] = useState<ModalInterface>({
		show: false,
		data: null,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

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
				updateStatus={(data: object) =>
					setShowConfirmModal({ show: true, data })
				}
			/>

			<ModalConfirm
				show={showConfirmModal?.show}
				onHide={() => setShowConfirmModal({ show: false, data: null })}
				title="Missing Product"
				description="Is chicken Breast Fillet urgent?"
				onConfirm={() => {}}
				confirmLabel="Yes"
				cancelLabel="No"
			/>
		</div>
	);
};

export default CartTable;
