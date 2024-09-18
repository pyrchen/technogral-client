import { Property } from 'csstype';

import { TNullable } from '@/types/base';
import { isNotNull } from '@/utils/typesChecking.utils';

export const createFlexStyles = (
	display: TNullable<'flex' | 'inline-flex'> = 'flex',
	alignItems: TNullable<Property.AlignItems> = 'center',
	justifyContent: TNullable<Property.JustifyContent> = 'center'
): string => {
	const displayStyle = isNotNull(display) ? `display: ${display};` : '';
	const alignItemsStyle = isNotNull(alignItems) ? `align-items: ${alignItems};` : '';
	const justifyContentStyle = isNotNull(justifyContent) ? `justify-content: ${justifyContent};` : '';

	return `
		${displayStyle}
		${alignItemsStyle}
		${justifyContentStyle}
	`;
};
