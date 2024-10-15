import localFont from 'next/font/local';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { SignIpFormParts } from '@/components/SignInForm/SignInForm.styled';
import { SignUpFormParts } from '@/components/SignUpForm/SignUpForm.styled';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { VkIcon } from '@/icons';
import { useAppDispatch } from '@/lib/hooks';
import { useToastsActions } from '@/store/actions.store';
import { useAuthSelector, useAuthThunks } from '@/store/auth';
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
		Вход
	</TypoText>
);

const SignInForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const form = useForm<{
		email: string;
		password: string;
	}>({
		resolver: zodResolver(SignInSchema),
		mode: 'all',
	});

	const { register, handleSubmit, formState } = form;

	const { login } = useAuthThunks();
	const { loading, error } = useAuthSelector((state) => state);

	const { addToast } = useToastsActions();

	const submitHandler = handleSubmit(async (data) => {
		const loginResponseData = (await login(data)) as TAny;

		if (loginResponseData.payload.statusCode >= 400) {
			return addToast({
				message: loginResponseData.payload.message,
				type: ToastType.ERROR,
			});
		}

		if (!loginResponseData.payload.data) return;

		const loginData = loginResponseData.payload.data;

		if (!loginData || !loginData.accessToken) return;

		addToast({
			message: 'Вы успешно вошли в аккаунт',
			type: ToastType.SUCCESS,
		});

		router.push('/');
	});

	return (
		<SignIpFormParts.__SignInFormWindow>
			{Title}
			<SignIpFormParts.__SignInForm onSubmit={submitHandler}>
				<SignIpFormParts.__SignInFormFields>
					<TextField
						{...register('email')}
						size='large'
						placeholder='Логин'
						fullWidth
						error={formState.errors.email?.message}
						disabled={loading}
					/>
					<SignIpFormParts.__ForgotPassword>
						<TypoText
							fontSize={14}
							color={'#565656'}
						>
							<Link href={''}>Забыли пароль?</Link>
						</TypoText>
					</SignIpFormParts.__ForgotPassword>
					<TextField
						{...register('password')}
						type='password'
						size='large'
						placeholder='Пароль'
						fullWidth
						error={formState.errors.password?.message}
						disabled={loading}
					/>
				</SignIpFormParts.__SignInFormFields>
				<SignIpFormParts.__SignInFormButtons>
					<Button
						size='large'
						variant='filled'
						fullWidth
						type='submit'
						disabled={!formState.isValid || loading}
					>
						Войти
					</Button>
					<Link
						href={'/auth/signup'}
						style={{ width: '100%' }}
					>
						<Button
							size='large'
							variant='outlined'
							type='button'
							fullWidth
						>
							У меня нет учетной записи
						</Button>
					</Link>
				</SignIpFormParts.__SignInFormButtons>
				<SignIpFormParts.__ContinueWith>
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
				</SignIpFormParts.__ContinueWith>
			</SignIpFormParts.__SignInForm>
		</SignIpFormParts.__SignInFormWindow>
	);
};

export default SignInForm;
