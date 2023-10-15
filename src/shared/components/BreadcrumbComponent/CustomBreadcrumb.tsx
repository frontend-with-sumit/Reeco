import Breadcrumb from "react-bootstrap/Breadcrumb";

import "./CustomBreadcrumb.scss";

export interface BreadcrumbInterface {
	id: number;
	label: string;
	link: string;
}

interface Props {
	items: BreadcrumbInterface[];
}

const CustomBreadcrumb = ({ items }: Props) => {
	return (
		<Breadcrumb>
			{items.map((item, index) => (
				<Breadcrumb.Item
					key={item?.id}
					href={item?.link}
					className={index === items.length - 1 ? "last-item" : ""}
				>
					{item?.label}
				</Breadcrumb.Item>
			))}
		</Breadcrumb>
	);
};

export default CustomBreadcrumb;
