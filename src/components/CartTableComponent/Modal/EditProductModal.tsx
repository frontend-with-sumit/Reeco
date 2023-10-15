import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";
import { isEmpty } from "lodash";

import { CartItem, Nullable } from "../../../shared/types";
import Input from "../../../shared/components/Form/Input";
import Badge from "../../../shared/components/BadgeComponent/Badge";
import Button from "../../../shared/components/ButtonComponent/Button";
import formatNumber from "../../../shared/utils/formatNumber";

import Avocado from "../../../assets/avocado.jpg";

import "../CartTable.scss";
import { truncateText } from "../../../shared/utils/stringUtils";

interface Props {
	show: boolean;
	title?: string;
	description?: string;
	confirmLabel?: string;
	cancelLabel?: string;
	data?: Nullable<CartItem> | undefined;
	onHide: () => void;
	onConfirm: (id: number, form: { price: number; quantity: number }) => void;
}

const REASONS = [
	{ id: 1, text: "Missing Product" },
	{ id: 2, text: "Quantity is not the same" },
	{ id: 3, text: "Price is not the same" },
	{ id: 4, text: "Other" },
];

interface FormFields {
	price: string;
	quantity: string;
}

const EditProductModal = ({
	show,
	confirmLabel,
	cancelLabel,
	data,
	onHide,
	onConfirm,
}: Props) => {
	const [reason, setReason] = useState<Nullable<number>>(null);
	const [form, setForm] = useState({
		price: "",
		quantity: "",
	});

	useEffect(() => {
		if (!isEmpty(data)) {
			setForm({
				price: data?.price?.toString() || "",
				quantity: data?.quantity?.toString() || "",
			});
		}
	}, [data]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: /^(\d*(?:[.]\d*)?|[.]\d+)$/.test(value)
				? value
				: prev[name as keyof FormFields],
		}));
	};

	const handleIncDec = (type: string = "inc") => {
		if (type === "dec") {
			setForm((prev) => ({
				...prev,
				quantity: (+prev?.quantity - 1).toString(),
			}));
			return;
		}

		setForm((prev) => ({
			...prev,
			quantity: (+prev?.quantity + 1).toString(),
		}));
	};

	return (
		<Modal show={show} onHide={onHide} className="editModal" size="lg" centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<div className="content">
					<div className="content-head">
						<h3>{truncateText(data?.name, 150)}</h3>
						<p>{data?.brand}</p>
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
										value={form?.price}
										placeholder="999.99"
										className="input"
										onChange={handleChange}
									/>
									<span> / 6 * 1LB</span>
								</div>
							</div>
							<div className="flex-center product-form-field">
								<div className="label">
									<p>Quantity</p>
								</div>
								<div className="flex-center product-form-input">
									<Button
										type="text"
										onClick={() => handleIncDec("dec")}
										disabled={!form?.quantity || +form?.quantity <= 0}
									>
										<PiMinusCircleFill size={24} color="#66bb6a" />
									</Button>
									<Input
										name="quantity"
										value={form?.quantity}
										placeholder="999.99"
										className="input"
										onChange={handleChange}
									/>
									<Button
										type="text"
										onClick={() => handleIncDec("inc")}
										disabled={!form?.quantity || +form?.quantity >= 999}
									>
										<PiPlusCircleFill size={24} color="#66bb6a" />
									</Button>
									<span> X 6 * 1LB</span>
								</div>
							</div>
							<div className="flex-center product-form-field">
								<div className="label">
									<p>Total</p>
								</div>
								<div className="flex-center product-form-input">
									<span className="total-amount">
										${" "}
										{formatNumber(
											Math.round((+form?.price || 0) / 6) *
												((+form?.quantity || 0) * 6)
										)}
									</span>
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
						onClick={() => {
							if (data) {
								onConfirm(data?.id, {
									price: +form?.price,
									quantity: +form?.quantity,
								});
							}
						}}
						className="confirm rounded-lg"
					/>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default EditProductModal;
