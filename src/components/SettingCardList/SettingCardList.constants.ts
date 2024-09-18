import { ComponentType } from 'react';

import { NotificationIcon, PersonalInfoIcon, PrivacyIcon, SettingsIcon, StatisticsIcon } from '@/icons';

interface CardsDataProps {
	title: string;
	description: string;
	Icon: ComponentType;
	href: string;
}

export const cardsData: CardsDataProps[] = [
	{
		title: 'Персональная информация',
		description: 'Управляйте своей персональной информацией',
		Icon: PersonalInfoIcon,
		href: '/profile',
	},
	{
		title: 'Безопасность',
		description: 'Изменить пароль и настройки безопасности',
		Icon: PrivacyIcon,
		href: '/profile/security',
	},
	{
		title: 'Статистика',
		description: 'Смотрите статистику своей активности на сайте',
		Icon: StatisticsIcon,
		href: '/profile/stats',
	},
	{
		title: 'Настройки сайта',
		description: 'Выбрать язык сайта, тему и часовой пояс',
		Icon: SettingsIcon,
		href: '/profile/settings',
	},
	{
		title: 'Приватность',
		description: 'Управляйте своей приватностью, привязанными аккаунтами',
		Icon: PrivacyIcon,
		href: '/profile/privacy',
	},
	{
		title: 'Уведомления',
		description: 'Настроить приходящие уведомления и предпочтения',
		Icon: NotificationIcon,
		href: '/profile/notifications',
	},
];
