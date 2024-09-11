import { EmailIcon, LocationIcon, PhoneIcon, VkIcon, YoutubeIcon } from '@/icons';

interface ILink {
	name: string;
	link: string;
}

export const links1: ILink[] = [
	{ name: 'Контакты', link: '' },
	{ name: 'FAQ', link: '' },
	{ name: 'Брендинг', link: '' },
	{ name: 'Пользовательское соглашение', link: '' },
];

export const links2 = [
	{ name: 'Настройки', link: 'settings' },
	{ name: 'Правила', link: 'rules' },
	{ name: 'Карта сайта', link: 'map' },
	{ name: 'Поддержка', link: 'support' },
	{ name: 'Оставить пожелание', link: 'wishes' },
];

export const contactData = [
	{ type: 'phone', text: '+7 (952) 28-12-xx', Icon: PhoneIcon },
	{ type: 'email', text: 'help@techno.ru', Icon: EmailIcon },
	{ type: 'location', text: '664463, Город xxxxxxxxxx, пр. Геологоразведчиков, 28А', Icon: LocationIcon },
];

export const socialData = [
	{ type: 'vk', url: 'youtube.com', Icon: VkIcon, hint: 'VK' },
	{ type: 'youtube', url: 'vk.com', Icon: YoutubeIcon, hint: 'YouTube' },
];
