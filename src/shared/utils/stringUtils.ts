export const classHelper = (
	defaultClass: string,
	...otherClasses: string[]
) => {
	return [defaultClass, ...otherClasses].join(" ");
};

export const truncateText = (text: string = "", maxLength: number = 100) =>
	text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");
