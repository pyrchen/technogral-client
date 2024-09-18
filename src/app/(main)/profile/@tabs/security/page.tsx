'use client';

import styled from 'styled-components';

import { ProfileInputParts } from '@/components/ProfileInput/ProfileInput.styled';

export default function SecurityPage() {
	return (
		<__SecurityPageContainer>
			<__InputsTitle>Пароль</__InputsTitle>
			<__InputsContainer>
				<ProfileInputParts.__ProfileInput
					placeholder='Текущий пароль'
					$border='1px solid #E3E3E3'
					$padding='19px 15px'
				></ProfileInputParts.__ProfileInput>
				<ProfileInputParts.__ProfileInput
					placeholder='Введите новый пароль'
					$border='1px solid #E3E3E3'
					$padding='19px 15px'
				></ProfileInputParts.__ProfileInput>
				<ProfileInputParts.__ProfileInput
					placeholder='Повторите новый пароль'
					$border='1px solid #E3E3E3'
					$padding='19px 15px'
				></ProfileInputParts.__ProfileInput>
			</__InputsContainer>
			<__InputsDesc>
				Для Вашей безопасности, Вы должны указать текущий пароль для изменения пароля или e-mail.
			</__InputsDesc>
			<__InputsTitle>E-mail</__InputsTitle>
			<__InputsContainer>
				<ProfileInputParts.__ProfileInput
					placeholder='v***r@m***.r*'
					$border='1px solid #E3E3E3'
					$padding='19px 15px'
				></ProfileInputParts.__ProfileInput>
			</__InputsContainer>
			<__InputsDesc>
				Если Вы измените адрес электронной почты, то придётся ещё раз подтвердить свою учётную запись.
			</__InputsDesc>
		</__SecurityPageContainer>
	);
}

const __InputsTitle = styled.h2`
	font-size: 18px;
	font-weight: 500;
	line-height: 25px;
	margin-bottom: 20px;
	margin-top: 50px;
`;

const __InputsDesc = styled.p`
	margin-top: 20px;
	max-width: 415px;
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
`;

const __InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	max-width: 386px;
`;

const __SecurityPageContainer = styled.div`
	margin: 10px auto 0;
	max-width: 1240px;
`;
