import { classHelper } from "../../utils/stringUtils";
import "./Button.scss";

interface Props {
	title?: string;
	type?: string;
	className?: string;
	disabled?: boolean;
	children?: React.ReactNode;
	onClick: () => void;
}

const Button = ({
	type,
	title,
	className = "",
	disabled,
	children,
	onClick,
}: Props) => {
	return (
		<button
			className={classHelper(
				`btn ${
					type === "outline"
						? "btn-outline-primary"
						: type === "text"
						? "btn-text"
						: "btn-primary"
				}`,
				className
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{title}
			{children}
		</button>
	);
};

export default Button;
