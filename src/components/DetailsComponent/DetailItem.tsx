interface Props {
	title: string;
	content?: string;
	children?: React.ReactNode;
}

const DetailItem = ({ title, content, children }: Props) => {
	return (
		<div className="detail-item">
			<p className="detail-item--title">{title}</p>
			<p className="detail-item--content">{content}</p>
			{children}
		</div>
	);
};

export default DetailItem;
