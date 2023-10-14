import "./Menu.scss";

interface Props {
	children: React.ReactNode;
	className?: string;
}

const Menu = ({ children, className }: Props) => {
	return <div className={`custom-menu ${className || ""}`}>{children}</div>;
};

export default Menu;
