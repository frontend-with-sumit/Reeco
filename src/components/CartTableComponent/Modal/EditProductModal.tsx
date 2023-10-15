import { useState } from "react";
import { Modal } from "react-bootstrap";
import { PiMinusCircleBold, PiPlusCircleBold } from "react-icons/pi";

import { Nullable } from "../../../shared/types";
import Input from "../../../shared/components/Form/Input";
import Badge from "../../../shared/components/BadgeComponent/Badge";
import Button from "../../../shared/components/ButtonComponent/Button";

import Avocado from "../../../assets/avocado.jpg";

import "../CartTable.scss";

interface Props {
	show: boolean;
	title?: string;
	description?: string;
	confirmLabel?: string;
	cancelLabel?: string;
	onHide: () => void;
	onConfirm: () => void;
}

const REASONS = [
	{ id: 1, text: "Missing Product" },
	{ id: 2, text: "Quantity is not the same" },
	{ id: 3, text: "Price is not the same" },
	{ id: 4, text: "Other" },
];

const EditProductModal = ({
	show,
	confirmLabel,
	cancelLabel,
	onHide,
	onConfirm,
}: Props) => {
	const [reason, setReason] = useState<Nullable<number>>(null);

	return (
		<Modal show={show} onHide={onHide} className="editModal" size="lg" centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<div className="content">
					<div className="content-head">
						<h3>Chicken Breast Fillets.....</h3>
						<p>American Roland</p>
					</div>

					<div className="content-body">
						<div className="product-photo">
							<img src={Avocado} alt="Avocado" />
						</div>
						<div className="product-form">
							<div className="flex-center product-form-field">
								<div className="label">
									<p>Price($)</p>
								</div>
								<div className="flex-center product-form-input">
									<Input
										name="price"
										value=""
										placeholder="999.99"
										className="input"
										onChange={() => {}}
									/>
									<span> / 6 * 1LB</span>
								</div>
							</div>
							<div className="flex-center product-form-field">
								<div className="label">
									<p>Quantity</p>
								</div>
								<div className="flex-center product-form-input">
									<PiMinusCircleBold size={24} />
									<Input
										name="quantity"
										value=""
										placeholder="999.99"
										className="input"
										onChange={() => {}}
									/>
									<PiPlusCircleBold size={24} />
									<span> X 6 * 1LB</span>
								</div>
							</div>
							<div className="flex-center product-form-field">
								<div className="label">
									<p>Total</p>
								</div>
								<div className="flex-center product-form-input">
									<span className="total-amount">$ 9,997,000</span>
								</div>
							</div>
						</div>
					</div>

					<div className="content-foot">
						<p>
							Choose reason <span>(optional)</span>
						</p>

						<div className="reasons">
							{REASONS.map((r) => (
								<Badge
									key={r.id}
									text={r.text}
									isActive={reason === r?.id}
									onClick={() => setReason(r?.id)}
								/>
							))}
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className="btn-grp">
					<Button
						type="text"
						title={cancelLabel || "Close"}
						onClick={onHide}
						className="cancel"
					/>
					<Button
						title={confirmLabel || "Confirm"}
						onClick={onConfirm}
						className="confirm rounded-lg"
					/>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default EditProductModal;
