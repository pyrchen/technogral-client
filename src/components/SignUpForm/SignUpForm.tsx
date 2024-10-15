'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { SignUpFormParts } from '@/components/SignUpForm/SignUpForm.styled';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { VkIcon } from '@/icons';
import { useAuthActions, useToastsActions } from '@/store/actions.store';
import { useAuthSelector, useAuthThunks, useIsAuthenticated } from '@/store/auth';
import { ToastType } from '@/store/toasts';
import { TAny } from '@/types/base';
import { Button, TextField, TypoText } from '@/uikit';
import { SignInSchema } from '@/validation/auth.schema';

const vkSansFont = localFont({
	src: [
		{
			path: '../../fonts/VKSansDisplay/VKSansDisplay.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../fonts/VKSansDisplay/VKSansDisplay-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
	display: 'swap',
});

const Title = (
	<TypoText
		as={TextTags.H2}
		weight={TextWeights.MEDIUM}
		fontSize={32}
	>
		Регистрация
	</TypoText>
);

const SignUpForm = () => {
	const router = useRouter();
	const form = useForm<{
		email: string;
		password: string;
	}>({
		resolver: zodResolver(SignInSchema),
		mode: 'all',
	});

	const { register, handleSubmit, formState } = form;

	const { addToast } = useToastsActions();
	const { loading, error } = useAuthSelector((state) => state);
	const { setAuthToken } = useAuthActions();
	const { signup } = useAuthThunks();
	const isAuthenticated = useIsAuthenticated();

	const submitHandler = handleSubmit(async (data) => {
		const signUpResponseData = (await signup(data)) as TAny;

		if (signUpResponseData.payload.statusCode >= 400) {
			return addToast({
				message: signUpResponseData.payload.message,
				type: ToastType.ERROR,
			});
		}

		if (!signUpResponseData.payload.data) return;

		const signUpData = signUpResponseData.payload.data;

		if (!signUpData || !signUpData.id) return;

		addToast({
			message: 'Пользователь успешно создан',
			type: ToastType.SUCCESS,
		});

		router.push('/auth/signin');
	});

	return (
		<SignUpFormParts.__SignUpFormWindow>
			{Title}
			<SignUpFormParts.__SignUpForm onSubmit={submitHandler}>
				<SignUpFormParts.__SignUpFormFields>
					<TextField
						{...register('email')}
						size='large'
						placeholder='Логин'
						fullWidth
						error={formState.errors.email?.message}
					/>
					<SignUpFormParts.__ForgotPassword>
						<TypoText
							fontSize={14}
							color={'#565656'}
						>
							<Link href={''}>Забыли пароль?</Link>
						</TypoText>
					</SignUpFormParts.__ForgotPassword>
					<TextField
						{...register('password')}
						type='password'
						size='large'
						placeholder='Пароль'
						fullWidth
						error={formState.errors.password?.message}
					/>
				</SignUpFormParts.__SignUpFormFields>
				<SignUpFormParts.__SignUpFormButtons>
					<Button
						size='large'
						variant='filled'
						fullWidth
						disabled={!formState.isValid}
					>
						Регистрация
					</Button>
					<Link
						href={'/auth/signin'}
						style={{ width: '100%' }}
					>
						<Button
							size='large'
							variant='outlined'
							fullWidth
						>
							У меня уже есть учетная запись
						</Button>
					</Link>
				</SignUpFormParts.__SignUpFormButtons>
				<SignUpFormParts.__ContinueWith>
					<TypoText
						fontSize={16}
						weight={TextWeights.MEDIUM}
						className={vkSansFont.className}
					>
						Продолжить через VK
					</TypoText>
					<SignUpFormParts.__ContinueWithIcon>
						<VkIcon />
					</SignUpFormParts.__ContinueWithIcon>
				</SignUpFormParts.__ContinueWith>
			</SignUpFormParts.__SignUpForm>
		</SignUpFormParts.__SignUpFormWindow>
	);
};

export default SignUpForm;
