import { FC, useId } from 'react';

import { IRadioFieldComponentProps } from '@/uikit/RadioField/RadioField.types';

import { RadioFieldParts } from './RadioField.styled';

const RadioField: FC<IRadioFieldComponentProps> = ({ label, hint, ...props }) => {
	const id = useId();

	return (
		<RadioFieldParts.__Wrapper>
			<RadioFieldParts.__FieldWrapper>
				<RadioFieldParts.__RadioInput
					type='radio'
					id={id}
					{...props}
				/>
				<RadioFieldParts.__Label htmlFor={id}>
					<RadioFieldParts.__Circle />
					<RadioFieldParts.__Text>{label}</RadioFieldParts.__Text>
				</RadioFieldParts.__Label>
			</RadioFieldParts.__FieldWrapper>
			{hint && <RadioFieldParts.__Hint>{hint}</RadioFieldParts.__Hint>}
		</RadioFieldParts.__Wrapper>
	);
};

export default RadioField;
