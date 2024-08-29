const PX = 'px';

export const toPx = (value: string | number) => {
	if (typeof value === 'string') {
		return `${parseFloat(value)}${PX}`;
	}

	return `${value}${PX}`;
};
