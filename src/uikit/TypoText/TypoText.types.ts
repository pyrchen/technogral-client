import { Property } from 'csstype';

import { HTMLAttributes, PropsWithChildren } from 'react';

import { TextTags, TextWeights } from '@/constants/text.contants';
import { TAny } from '@/types/base';

export interface ITypoTextProps extends PropsWithChildren<HTMLAttributes<TAny>> {
	as?: TextTags;
	fontSize?: number;
	weight?: TextWeights;
	color?: string;
	text?: string;
	decoration?: Property.TextDecoration;
	lineHeight?: number;
	transform?: Property.TextTransform;
}
