import { useTheme } from 'styled-components';

import { FC } from 'react';

import { ProfileInputParts } from './ProfileInput.styled';
import { IProfileInputComponentProps } from './ProfileInput.types';

const ProfileInput: FC<IProfileInputComponentProps> = ({
	title,
	width = '245px',
	inputTextColor = '#898989',
	border = 'none',
	padding = '10px 15px',
}) => {
	const Theme = useTheme();

	return (
		<ProfileInputParts.__ProfileInputWrapper $width={width}>
			<ProfileInputParts.__ProfileInputText>{title}</ProfileInputParts.__ProfileInputText>
			<ProfileInputParts.__ProfileInput
				$inputTextColor={inputTextColor}
				placeholder='Введите желаемый ник'
				$border={border}
				$padding={padding}
			></ProfileInputParts.__ProfileInput>
		</ProfileInputParts.__ProfileInputWrapper>
	);
};

export default ProfileInput;
