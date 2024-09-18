'use client';

import { FC, useState } from 'react';

import { __Input, __InputWrapper } from '@/uikit/TextInput/TextInput.styled';
import { ITextInputProps, ITextInputState } from '@/uikit/TextInput/TextInput.types';

const TextInput: FC<ITextInputProps> = ({
	initialValue = '',
	value = initialValue,
	onInput,
	size = 'medium',
	leftAddon = null,
	rightAddon = null,
	fullWidth = false,
	...props
}) => {
	const [state, setState] = useState<ITextInputState>({
		focused: false,
		dirty: false,
		invalid: false,
		valid: false,
		pending: false,
		touched: false,
		untouched: false,
	});

	return (
		<__InputWrapper
			$size={size}
			$fullWidth={fullWidth}
		>
			{leftAddon}
			<__Input
				value={value}
				onInput={onInput}
				{...props}
			/>
			{rightAddon}
		</__InputWrapper>
	);
};

export default TextInput;
