import { Property } from 'csstype';

import { TextWeights } from '@/constants/text.contants';
import { TNullable } from '@/types/base';
import { toPx } from '@/utils/formatting.utils';
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

createFlexStyles.withGap = (gap: TNullable<number>, ...params: Parameters<typeof createFlexStyles>) => {
	const gapStyle = isNotNull(gap) ? `gap: ${toPx(gap)}` : '';

	return `
		${createFlexStyles.apply(null, params)}
		${gapStyle}
	`;
};

export const createBaseTextStyles = (
	fontSize: TNullable<number> = 14,
	weight: TNullable<TextWeights> = TextWeights.NORMAL
): string => {
	const fontSizeStyle = isNotNull(fontSize) ? `font-size: ${toPx(fontSize)};` : '';
	const fontWeightStyle = isNotNull(weight) ? `font-weight: ${weight};` : '';

	return `
		${fontSizeStyle}
		${fontWeightStyle}
	`;
};

export const createMediumText = (fontSize: TNullable<number> = 14) =>
	createBaseTextStyles(fontSize, TextWeights.MEDIUM);

export const createTransitionBase = (
	timing: Property.TransitionDuration = '0.2s',
	properties: Property.TransitionProperty = 'all'
) => {
	return `
		transition: ${timing} ${properties};
	`;
};
