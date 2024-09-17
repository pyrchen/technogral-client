import styled from 'styled-components';

import { CSSProperties } from 'react';

import { EveryWithDollarSign } from '@/types/styled.types';
import { IAnySectionProps } from '@/uikit/AnySection/AnySection.types';

type __TProps = EveryWithDollarSign<IAnySectionProps>;

const __Section = styled.section<__TProps>(({ $padding, $margin }) => {
	const initials: Partial<CSSProperties> = {};

	if ($padding) initials.padding = $padding;
	if ($margin) initials.margin = $margin;

	return initials;
});

export const AnySectionParts = {
	__Section,
};
