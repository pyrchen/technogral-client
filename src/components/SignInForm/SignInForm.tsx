import localFont from 'next/font/local';
import Link from 'next/link';

import { SignUpFormParts } from '@/components/SignUpForm/SignUpForm.styled';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { VkIcon } from '@/icons';
import { Button, TextInput, TypoText } from '@/uikit';

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
	return (
		<SignUpFormParts.__SignUpFormWindow>
			{Title}
			<SignUpFormParts.__SignUpFormMain>
				<SignUpFormParts.__SignUpFormFields>
					<TextInput
						size='large'
						placeholder='Логин'
						fullWidth
					/>
					<SignUpFormParts.__ForgotPassword>
						<TypoText
							fontSize={14}
							color={'#565656'}
						>
							<Link href={''}>Забыли пароль?</Link>
						</TypoText>
					</SignUpFormParts.__ForgotPassword>
					<TextInput
						size='large'
						placeholder='Пароль'
						fullWidth
					/>
				</SignUpFormParts.__SignUpFormFields>
				<SignUpFormParts.__SignUpFormButtons>
					<Button
						size='large'
						variant='filled'
						fullWidth
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
			</SignUpFormParts.__SignUpFormMain>
		</SignUpFormParts.__SignUpFormWindow>
	);
};

export default SignInForm;
