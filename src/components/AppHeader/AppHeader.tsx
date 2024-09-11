'use client';

import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { FC, useState } from 'react';

import { ContentContainer, Logo } from '@/components';
import { buttonLinks, links } from '@/components/AppHeader/AppHeader.constants';
import { __AppHeader, __ButtonsLinks, __Grid, __Links } from '@/components/AppHeader/AppHeader.styled';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { Button, TextInput, TypoText } from '@/uikit';
import { createFlexStyles } from '@/utils/styled.utils';

const __LinkStyled = styled.div`
	${createFlexStyles('inline-flex')}

	& > a[href] {
		${createFlexStyles('inline-flex')}
	}
`;

const AppHeader: FC = () => {
	const [value, setValue] = useState('hello');
	const theme = useTheme();

	return (
		<__AppHeader>
			<ContentContainer>
				<__Grid>
					<__LinkStyled>
						<Link href={'/'}>
							<Logo />
						</Link>
					</__LinkStyled>
					<TextInput
						placeholder={'hello'}
						value={value}
						onInput={(event) => setValue((event.target as HTMLInputElement).value)}
					/>
					<__Links>
						{links.map(({ name, link }) => {
							return (
								<Link
									key={name}
									href={link}
								>
									<TypoText
										color={theme.text.TEXT_2}
										as={TextTags.SPAN}
										fontSize={16}
										weight={TextWeights.MEDIUM}
									>
										{name}
									</TypoText>
								</Link>
							);
						})}
					</__Links>
					<__ButtonsLinks>
						{buttonLinks.map(({ name, link, variant }) => {
							return (
								<Link
									key={name}
									href={link}
								>
									<Button variant={variant}>{name}</Button>
								</Link>
							);
						})}
					</__ButtonsLinks>
				</__Grid>
			</ContentContainer>
		</__AppHeader>
	);
};

export default AppHeader;
