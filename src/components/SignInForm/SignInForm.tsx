import localFont from 'next/font/local';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { SignIpFormParts } from '@/components/SignInForm/SignInForm.styled';
import { SignUpFormParts } from '@/components/SignUpForm/SignUpForm.styled';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { VkIcon } from '@/icons';
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
	const form = useForm<{
		email: string;
		password: string;
	}>({
		resolver: zodResolver(SignInSchema),
		mode: 'all',
	});

	const { register, handleSubmit, formState, getValues } = form;

	const submitHandler = handleSubmit((data) => {});

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
						autoFocus
						error={formState.errors.email?.message}
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
						size='large'
						placeholder='Пароль'
						fullWidth
						error={formState.errors.password?.message}
					/>
				</SignIpFormParts.__SignInFormFields>
				<SignIpFormParts.__SignInFormButtons>
					<Button
						size='large'
						variant='filled'
						fullWidth
						type='submit'
						disabled={!formState.isValid}
					>
						Войти
					</Button>
					<Button
						size='large'
						variant='outlined'
						fullWidth
					>
						У меня нет учетной записи
					</Button>
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
