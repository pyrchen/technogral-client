export const createUniqueId = (length = 10) => {
	const MAX_RANDOM_36_LEN = 10;
	const normalisedLength = isNaN(+length) ? MAX_RANDOM_36_LEN : Math.abs(length);

	const iterations = Math.ceil(normalisedLength / MAX_RANDOM_36_LEN);
	const remainder = normalisedLength % MAX_RANDOM_36_LEN;

	/* Функция создания самой строки-id */
	const generateId = (generateLength: number): string => {
		const len = generateLength || MAX_RANDOM_36_LEN;

		const randomStr = Math.random()
			.toString(36)
			.substring(2, len + 2);
		const diff = randomStr.length - len;

		if (diff < 0) return randomStr + generateId(Math.abs(diff));

		return randomStr.substring(diff);
	};

	let id = '';
	for (let i = 0; i < iterations; i++) {
		const last = i === iterations - 1;
		id += generateId(last ? remainder : MAX_RANDOM_36_LEN);
	}

	return id;
};
