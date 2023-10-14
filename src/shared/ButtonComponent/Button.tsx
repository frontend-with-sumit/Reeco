import "./Button.scss";

interface Props {
	title: string;
	type?: string;
	className?: string;
}

const Button = ({ type, title, className }: Props) => {
	return (
		<button
			className={`btn ${
				type === "outline" ? "btn-outline-primary" : "btn-primary"
			} ${className}`}
		>
			{title}
		</button>
	);
};

export default Button;
