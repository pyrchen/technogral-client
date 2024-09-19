'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';

import { TextField } from '@/uikit';
import { ChangeEmailSchema, ChangePasswordSchema } from '@/validation/security.schema';

export default function SecurityPage() {
	const passwordForm = useForm<{
		currentPassword: string;
		newPassword: string;
		confirmPassword: string;
	}>({
		resolver: zodResolver(ChangePasswordSchema),
		mode: 'onChange',
	});

	const emailForm = useForm<{
		email: string;
	}>({
		resolver: zodResolver(ChangeEmailSchema),
		mode: 'onChange',
	});

	return (
		<__SecurityPageContainer>
			<__InputsTitle>Пароль</__InputsTitle>
			<__PasswordForm>
				<TextField
					{...passwordForm.register('currentPassword')}
					placeholder='Текущий пароль'
					error={passwordForm.formState.errors.currentPassword?.message}
				/>
				<TextField
					{...passwordForm.register('newPassword')}
					placeholder='Введите новый пароль'
					error={passwordForm.formState.errors.newPassword?.message}
				/>
				<TextField
					{...passwordForm.register('confirmPassword')}
					placeholder='Повторите новый пароль'
					error={passwordForm.formState.errors.confirmPassword?.message}
				/>
			</__PasswordForm>
			<__InputsDesc>
				Для Вашей безопасности, Вы должны указать текущий пароль для изменения пароля или e-mail.
			</__InputsDesc>
			<__InputsTitle>E-mail</__InputsTitle>
			<__EmailForm>
				<TextField
					{...emailForm.register('email')}
					placeholder='v***r@m***.r*'
					error={emailForm.formState.errors.email?.message}
				/>
			</__EmailForm>
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

const __PasswordForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
	max-width: 386px;
`;

const __EmailForm = styled(__PasswordForm)``;

const __SecurityPageContainer = styled.div`
	margin: 10px auto 0;
	max-width: 1240px;
`;
