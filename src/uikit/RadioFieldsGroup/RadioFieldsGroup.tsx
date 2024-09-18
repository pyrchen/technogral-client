import { FC } from 'react';

import { RadioField } from '@/uikit';
import { RadioFieldsGroupParts } from '@/uikit/RadioFieldsGroup/RadioFieldsGroup.styled';
import { IRadioFieldsGroupProps } from '@/uikit/RadioFieldsGroup/RadioFieldsGroup.types';

const RadioFieldsGroup: FC<IRadioFieldsGroupProps> = ({ options, name, groupTitle }) => {
	return (
		<RadioFieldsGroupParts.__GroupWrapper>
			{groupTitle && <RadioFieldsGroupParts.__Title>{groupTitle}</RadioFieldsGroupParts.__Title>}
			<RadioFieldsGroupParts.__GroupOptions>
				{options.map(({ label, value, disabled }) => (
					<RadioField
						key={label}
						label={label}
						value={value}
						name={name}
						disabled={disabled}
					/>
				))}
			</RadioFieldsGroupParts.__GroupOptions>
		</RadioFieldsGroupParts.__GroupWrapper>
	);
};

export default RadioFieldsGroup;
