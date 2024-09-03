'use client';

import Link from 'next/link';
import { useTheme } from 'styled-components';

import { FC, useState } from 'react';

import { ContentContainer } from '@/components';
import { buttonLinks, links } from '@/components/AppHeader/AppHeader.constants';
import { StyledAppHeader, StyledButtonsLinks, StyledGrid, StyledLinks } from '@/components/AppHeader/AppHeader.styled';
import { TextTags } from '@/constants/text.contants';
import { Button, TextInput, TypoText } from '@/uikit';

const AppHeader: FC = () => {
	const [value, setValue] = useState('hello');
	const theme = useTheme();

	return (
		<StyledAppHeader>
			<ContentContainer>
				<StyledGrid>
					<div>logo</div>
					<TextInput
						placeholder={'hello'}
						value={value}
						onInput={(event) => setValue((event.target as HTMLInputElement).value)}
					/>
					<StyledLinks>
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
									>
										{name}
									</TypoText>
								</Link>
							);
						})}
					</StyledLinks>
					<StyledButtonsLinks>
						{buttonLinks.map(({ name, link }) => {
							return (
								<Link
									key={name}
									href={link}
								>
									<Button>{name}</Button>
								</Link>
							);
						})}
					</StyledButtonsLinks>
				</StyledGrid>
			</ContentContainer>
		</StyledAppHeader>
	);
};

export default AppHeader;
