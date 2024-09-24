'use client';

import styled from 'styled-components';

import { RadioField, SelectField } from '@/uikit';

const language = [
	{ label: '🇷🇺 Русский', value: '0' },
	{ label: 'en English', value: '1' },
];

const clocks = [
	{ label: 'UTC+00:00 Лондон', value: '0' },
	{ label: 'UTC+03:00 Москва', value: '1' },
	{ label: 'UTC+05:00 Екатеринбург', value: '2' },
];

export default function SecurityPage() {
	return (
		<__SecurityPageContainer>
			<__SelectsContainer>
				<div>
					<__SecurityPageTitle>Язык</__SecurityPageTitle>
					<SelectField
						options={language}
						placeholder='Russian (RU)'
					></SelectField>
					<__SecurityPageDesc>Выберите язык, на котором Вы бы хотели видеть интерфейс форума</__SecurityPageDesc>
				</div>
				<div>
					<__SecurityPageTitle>Часовой пояс</__SecurityPageTitle>
					<SelectField
						options={clocks}
						placeholder='(UTC+05:00) Екатеринбург'
					></SelectField>
				</div>
			</__SelectsContainer>

			<__RadioContainer>
				<RadioField label='Автоматически следить за статьями, которые я создаю или в которых я отвечаю... Получать уведомления на электронную почту, если в них кто-то ответит'></RadioField>
				<RadioField label='Показывать предпросмотр ссылок'></RadioField>
				<RadioField label='Показывать предпросмотр контента, отключить предупреждение о переходе по внешним ссылкам'></RadioField>
			</__RadioContainer>
		</__SecurityPageContainer>
	);
}

const __SecurityPageContainer = styled.div`
	margin: 60px auto 50px;
`;

const __SecurityPageTitle = styled.h2`
	font-weight: 500;
	font-size: 18px;
	color: #0a0a0a;
	margin-bottom: 20px;
`;

const __SecurityPageDesc = styled.p`
	font-weight: 400;
	font-size: 14px;
	color: #0a0a0a;
	margin-top: 20px;
`;

const __RadioContainer = styled.div`
	margin-top: 30px;
	display: flex;
	gap: 15px;
	flex-direction: column;
`;

const __SelectsContainer = styled.div`
	display: flex;
	gap: 50px;
	flex-direction: column;
`;
