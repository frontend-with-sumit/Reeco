export const classHelper = (
	defaultClass: string,
	...otherClasses: string[]
) => {
	return [defaultClass, ...otherClasses].join(" ");
};
