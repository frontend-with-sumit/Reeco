import { classHelper } from "../../utils/stringUtils";
import "./List.scss";

interface Props {
	children: React.ReactNode;
	className?: string;
}

const List = ({ children, className }: Props) => {
	return (
		<div className={classHelper("custom-menu", className)}>{children}</div>
	);
};

export default List;
