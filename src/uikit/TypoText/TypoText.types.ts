import { Property } from 'csstype';

import { PropsWithChildren } from 'react';

import { TextTags, TextWeights } from '@/constants/text.contants';

export interface ITypoTextProps extends PropsWithChildren {
	as?: TextTags;
	fontSize?: number;
	weight?: TextWeights;
	color?: string;
	text?: string;
	decoration?: Property.TextDecoration;
	lineHeight?: number;
	transform?: Property.TextTransform;
}
