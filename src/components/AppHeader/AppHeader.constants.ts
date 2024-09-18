import { TButtonVariants } from '@/uikit/Button/Button.types';

export const links = [
	{ name: 'Конфигуратор ПК', link: 'configurator' },
	{ name: 'Контакты', link: 'contacts' },
	{ name: 'FAQ', link: 'faq' },
];

export const buttonLinks: {
	name: string;
	link: string;
	variant: TButtonVariants;
}[] = [
	{ name: 'Заказать разгон', link: 'boost', variant: 'filled' },
	{ name: 'Войти', link: '/auth/signin', variant: 'outlined' },
	{ name: 'Регистрация', link: '/auth/signup', variant: 'outlined' },
];
