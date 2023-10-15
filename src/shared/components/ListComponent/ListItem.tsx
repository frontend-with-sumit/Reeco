interface Props {
	text?: string;
	children?: React.ReactNode;
}

const ListItem = ({ text, children }: Props) => {
	return (
		<div className="custom-menu-item">
			{text && <p className="custom-menu-content cursor-pointer">{text}</p>}
			{children}
		</div>
	);
};

export default ListItem;
