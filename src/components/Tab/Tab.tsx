import { FC } from 'react';

import { TabParts } from '@/components/Tab/Tab.styled';
import { ITabComponentProps } from '@/components/Tab/Tab.types';
import { TypoText } from '@/uikit';

const Tab: FC<ITabComponentProps> = ({ tabName, active = true, ...props }) => {
	return (
		<TabParts.__TabWrapper
			$active={active}
			{...props}
		>
			<TypoText
				color={active ? '#565656' : '#BCBCBC'}
				fontSize={16}
			>
				{tabName}
			</TypoText>
			<TabParts.__TabUnderline />
		</TabParts.__TabWrapper>
	);
};

export default Tab;
