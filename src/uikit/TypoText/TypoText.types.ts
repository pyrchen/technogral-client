import { PropsWithChildren } from 'react';

import { TextTags } from '@/constants/text.contants';

export interface ITypoTextProps extends PropsWithChildren {
	as?: TextTags;
	fontSize?: number;
	color?: string;
}
