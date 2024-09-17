'use client';

import styled, { useTheme } from 'styled-components';

import { AccordionList, ContentContainer } from '@/components';
import { ProgressBar } from '@/uikit';

export default function Home() {
	const Theme = useTheme();
	return (
		<ContentContainer>
			<AccordionList></AccordionList>
			<ProgressBar title='5 статей' progress={85} color={ '#769CFF' } />
			<ProgressBar title='30 лайков' progress={135} color={ '#6B18D5' } />
			<ProgressBar title='12 комментариев' progress={50} color={ '#0447AB' } />
		</ContentContainer>
	);
}
