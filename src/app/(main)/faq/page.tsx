'use client';

import styled, { useTheme } from 'styled-components';

import { AccordionList, ContentContainer } from '@/components';
import ProfileInput from '@/components/ProfileInput/ProfileInput';
import { ProgressBar, TextInput } from '@/uikit';

export default function Home() {
	const Theme = useTheme();
	return (
		<ContentContainer>
			<AccordionList></AccordionList>
			<ProgressBar
				title='5 статей'
				progress={85 / 100}
				color={'#769CFF'}
			/>
			<ProgressBar
				title='30 лайков'
				progress={50 / 100}
				color={'#6B18D5'}
			/>
			<ProgressBar
				title='12 комментариев'
				progress={12 / 100}
				color={'#0447AB'}
			/>
			<ProfileInput
				title='Ник'
				// inputTextColor='#0066FF'
			></ProfileInput>
		</ContentContainer>
	);
}
