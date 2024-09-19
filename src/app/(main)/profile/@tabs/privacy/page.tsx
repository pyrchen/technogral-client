'use client';

import styled from 'styled-components';

import { RadioField } from '@/uikit';

export default function SecurityPage() {
	return (
		<__PrivacyPageContainer>
			<__RadioContainer>
				<RadioField
					label='Показывать мою текущую активность'
					hint='Разрешить другим пользователям видеть, какую страницу Вы просматриваете в данный момент'
				/>
				<RadioField
					label='Получать рассылку сайта'
					hint='Получать письма от администрации форума, предназначенные для всех пользователей'
				/>
				<RadioField label='Скрывать статистику моего профиля в темах' />
				<RadioField label='Показывать день и месяц рождения' />
				<RadioField
					label='Показывать год рождения'
					hint='Разрешить другим пользователям видеть Ваш возраст'
				/>
			</__RadioContainer>
		</__PrivacyPageContainer>
	);
}

const __PrivacyPageContainer = styled.div`
	margin: 60px auto 50px;
`;

const __RadioContainer = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
`;

const __RadioDesc = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	margin-top: 10px;
`;
