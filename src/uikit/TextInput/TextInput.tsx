import { FC } from 'react';

import { StyledInput, StyledInputWrapper } from '@/uikit/TextInput/TextInput.styled';
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
		<StyledInputWrapper size={size}>
			{leftAddon}
			<StyledInput
				value={value}
				onInput={onInput}
				{...props}
			/>
			{rightAddon}
		</StyledInputWrapper>
	);
};

export default TextInput;
