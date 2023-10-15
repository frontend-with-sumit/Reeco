import { classHelper } from "../../utils/stringUtils";
import "./Button.scss";

interface Props {
	title?: string;
	type?: string;
	className?: string;
	onClick: () => void;
	children?: React.ReactNode;
}

const Button = ({ type, title, className, children, onClick }: Props) => {
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
		>
			{title}
			{children}
		</button>
	);
};

export default Button;
