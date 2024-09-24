import { forwardRef } from 'react';

import { TextFieldParts } from '@/uikit/TextField/TextField.styled';
import { ITextFieldProps } from '@/uikit/TextField/TextField.types';

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
	({ size = 'medium', leftAddon = null, rightAddon = null, fullWidth = false, error = '', ...props }, ref) => {
		return (
			<TextFieldParts.__Wrapper
				$size={size}
				$fullWidth={fullWidth}
			>
				<TextFieldParts.__FieldWrapper>
					{leftAddon}
					<TextFieldParts.__Input
						ref={ref}
						$error={error}
						{...props}
					/>
					{rightAddon}
				</TextFieldParts.__FieldWrapper>
				{error && <TextFieldParts.__ErrorText>{error}</TextFieldParts.__ErrorText>}
			</TextFieldParts.__Wrapper>
		);
	}
);

TextField.displayName = 'TextField';

export default TextField;
