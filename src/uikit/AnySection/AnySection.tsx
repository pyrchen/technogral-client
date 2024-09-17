import { FC } from 'react';

import { AnySectionParts } from '@/uikit/AnySection/AnySection.styled';
import { IAnySectionComponentProps } from '@/uikit/AnySection/AnySection.types';

const AnySection: FC<IAnySectionComponentProps> = ({ margin, padding, children }) => {
	return (
		<AnySectionParts.__Section
			$padding={padding}
			$margin={margin}
		>
			{children}
		</AnySectionParts.__Section>
	);
};

export default AnySection;
