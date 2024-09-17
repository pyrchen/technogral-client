import { ChangeEvent } from 'react';

export interface IOption {
	label: string;
	value: string | number;
	disabled?: boolean;
}

export interface IRadioFieldsGroupProps {
	options: IOption[];
	name: string;
	groupTitle?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
