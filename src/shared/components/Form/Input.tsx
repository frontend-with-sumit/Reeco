import { ChangeEvent } from "react";
import { classHelper } from "../../utils/stringUtils";
import "./Form.scss";
import { Nullable } from "../../types";

interface Props {
	name: string;
	value: string | number;
	label?: string;
	className?: string;
	type?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	leftIcon?: Nullable<React.ReactNode>;
	rightIcon?: Nullable<React.ReactNode>;
	isRequired?: boolean;
	isDisabled?: boolean;
}

const Input = ({
	label,
	name,
	value,
	className,
	type,
	placeholder,
	leftIcon,
	rightIcon,
	onChange,
	isRequired,
}: Props) => {
	return (
		<div className={classHelper("inp-comp", className || "")}>
			{label && (
				<label htmlFor={name} className={`${isRequired ? "required" : ""}`}>
					{label}
				</label>
			)}
			<div className="inp">
				{leftIcon}
				<input
					id={name}
					type={type || "text"}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
				/>
				{rightIcon}
			</div>
		</div>
	);
};

export default Input;
