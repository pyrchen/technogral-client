const PX = 'px';
const DEG = 'deg';

export const toPx = (value: string | number) => {
	if (typeof value === 'string') {
		return `${parseFloat(value)}${PX}`;
	}

	return `${value}${PX}`;
};

export const toDeg = (value: string | number) => {
	if (typeof value === 'string') {
		return `${parseFloat(value)}${DEG}`;
	}

	return `${value}${DEG}`;
};

export const formatIntNumber = (
	value: number,
	options: {
		fixedTo: number;
		splitWith: string;
	} = {
		fixedTo: 0,
		splitWith: '.',
	}
): string =>
	Intl.NumberFormat('en-EN', {
		maximumFractionDigits: options.fixedTo,
	})
		.format(value)
		.replace(',', options.splitWith);
