'use client';

import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';

import { CloseIcon, SelectArrowIcon, SelectChosenIcon, SelectHoverIcon } from '@/icons';
import { TNullable } from '@/types/base';
import { SelectFieldParts } from '@/uikit/SelectField/SelectField.styled';
import { ISelectFieldComponentProps } from '@/uikit/SelectField/SelectField.types';
import { isNotNull, isNull } from '@/utils/typesChecking.utils';

const optionS = [
	{ label: '🇷🇺 Русский', value: '0' },
	{ label: '🇷🇺 Русский', value: '1' },
	{ label: '🇷🇺 Русский', value: '2' },
];

const SelectField: FC<ISelectFieldComponentProps> = ({ placeholder, options = optionS, ...props }) => {
	const [isOpened, setIsOpened] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState<TNullable<number>>(null);
	const rootRef = useRef<HTMLDivElement>(null);

	const selectedOption = isNull(selectedIndex) ? null : options[selectedIndex];

	const handleSelect = (i: number): MouseEventHandler<HTMLDivElement> => {
		return () => {
			setSelectedIndex(i);
			setIsOpened(false);
		};
	};

	const clearSelected = () => setSelectedIndex(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				setIsOpened(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [isOpened]);

	return (
		<SelectFieldParts.__Wrapper ref={rootRef}>
			<SelectFieldParts.__Select
				$isOpened={isOpened}
				$selected={isNotNull(selectedOption)}
				onClick={() => setIsOpened(!isOpened)}
				{...props}
			>
				<SelectFieldParts.__OptionText>{selectedOption?.label || placeholder}</SelectFieldParts.__OptionText>
				<SelectFieldParts.__Icons>
					{isNotNull(selectedOption) && (
						<SelectFieldParts.__CloseIcon onClick={clearSelected}>
							<CloseIcon />
						</SelectFieldParts.__CloseIcon>
					)}
					<SelectFieldParts.__SelectIconWrapper $isOpened={isOpened}>
						<SelectArrowIcon />
					</SelectFieldParts.__SelectIconWrapper>
				</SelectFieldParts.__Icons>
			</SelectFieldParts.__Select>
			<SelectFieldParts.__OptionsBlock $isOpened={isOpened}>
				{options.map(({ value, label }, i) => (
					<SelectFieldParts.__Option
						key={value}
						onClick={handleSelect(i)}
					>
						<SelectFieldParts.__OptionText>{label}</SelectFieldParts.__OptionText>
						<SelectFieldParts.__OptionHoverIconWrapper $selected={i === selectedIndex}>
							{i === selectedIndex ? <SelectChosenIcon /> : <SelectHoverIcon />}
						</SelectFieldParts.__OptionHoverIconWrapper>
					</SelectFieldParts.__Option>
				))}
			</SelectFieldParts.__OptionsBlock>
		</SelectFieldParts.__Wrapper>
	);
};

export default SelectField;
