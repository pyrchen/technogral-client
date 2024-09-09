import { FC } from 'react';

import { __Input, __InputWrapper } from '@/uikit/TextInput/TextInput.styled';
import { ITextInputProps } from '@/uikit/TextInput/TextInput.types';

const TextInput: FC<ITextInputProps> = ({
	initialValue = '',
	value = initialValue,
	onInput,
	size = 'medium',
	leftAddon = null,
	rightAddon = null,
	...props
}) => {
	return (
		<__InputWrapper size={size}>
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
