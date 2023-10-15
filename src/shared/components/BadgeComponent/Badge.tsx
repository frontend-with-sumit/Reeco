import { classHelper } from "../../utils/stringUtils";
import "./Badge.scss";

interface Props {
	text: string;
	className?: string;
	isActive?: boolean;
	onClick?: () => void;
}

const Badge = ({ text, className, isActive, onClick }: Props) => {
	return (
		<p
			className={classHelper(
				"custom-badge rounded-lg cursor-pointer",
				className || "",
				isActive ? "active" : ""
			)}
			onClick={onClick}
		>
			{text}
		</p>
	);
};

export default Badge;
