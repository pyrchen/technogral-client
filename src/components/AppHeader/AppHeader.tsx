'use client';

import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { FC, useEffect, useState } from 'react';

import { ContentContainer, Logo } from '@/components';
import { buttonLinks, links } from '@/components/AppHeader/AppHeader.constants';
import { __AppHeader, __ButtonsLinks, __Grid, __Links } from '@/components/AppHeader/AppHeader.styled';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { Button, TextField, TypoText } from '@/uikit';
import { createFlexStyles } from '@/utils/styled.utils';

const __LinkStyled = styled.div`
	${createFlexStyles('inline-flex')}

	& > a[href] {
		${createFlexStyles('inline-flex')}
	}
`;

const AppHeader: FC = () => {
	const [value, setValue] = useState('hello');
	const [isScrolled, setIsScrolled] = useState(false);
	const theme = useTheme();

	const handleScroll = () => {
		const offset = window.scrollY;
		setIsScrolled(offset > 0); // Если прокрутка больше 50px, то фон поменяется
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<__AppHeader isScrolled={isScrolled}>
			<ContentContainer>
				<__Grid>
					<__LinkStyled>
						<Link href={'/'}>
							<Logo />
						</Link>
					</__LinkStyled>
					<TextField
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
