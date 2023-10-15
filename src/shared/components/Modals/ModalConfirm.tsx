import { Modal } from "react-bootstrap";
import Button from "../ButtonComponent/Button";

import "./Modal.scss";

interface Props {
	show: boolean;
	title?: string;
	description?: string;
	confirmLabel?: string;
	cancelLabel?: string;
	onHide: () => void;
	onConfirm: () => void;
}

const ModalConfirm = ({
	show,
	title,
	description,
	confirmLabel,
	cancelLabel,
	onHide,
	onConfirm,
}: Props) => {
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>
					<h3 className="modal-heading">{title}</h3>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="content">
					<p>{description}</p>
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
						type="text"
						title={confirmLabel || "Confirm"}
						onClick={onConfirm}
						className="confirm"
					/>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalConfirm;
