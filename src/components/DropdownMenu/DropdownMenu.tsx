'use client';

import { useRouter } from 'next/navigation';

import { useRef } from 'react';

import { DropdownMenuParts } from '@/components/DropdownMenu/DropdownMenu.styled';
import useOutsideClick from '@/hooks/useOutsideClick.hook';
import { ArrowBottomIcon } from '@/icons';
import { useAuthThunks } from '@/store/auth';

export const DropdownMenu = ({ isOpened, onChange }: { isOpened: boolean; onChange: (value: boolean) => void }) => {
	const router = useRouter();
	const { logout } = useAuthThunks();
	const ref = useRef<HTMLDivElement>(null);

	useOutsideClick({
		ref,
		handler: () => onChange(false),
	});

	const menuItems = [
		{ name: 'Мой профиль', type: 'Profile', onClick: () => router.push('/profile') },
		{ name: 'Мои статьи', type: 'Articles', onClick: () => router.push('/articles') },
		{ name: 'Мои сборки', type: 'Builds', onClick: () => router.push('/builds') },
		{
			name: (langName: string) => langName,
			type: 'Lang',
			childs: [{ name: 'English' }, { name: 'Русский' }],
			onClick: () => console.log('Lang'),
		},
		{
			name: (themeName: string) => `Тема: ${themeName}`,
			type: 'Theme',
			childs: [{ name: 'Светлая' }, { name: 'Темная' }],
			onClick: () => console.log('Theme'),
		},
		{ name: 'Настройки', type: 'Settings', onClick: () => router.push('/profile/settings') },
		{ name: 'Выйти', type: 'Logout', onClick: () => logout() },
	];

	if (!isOpened) return null;

	return (
		<DropdownMenuParts.__Wrapper ref={ref}>
			{menuItems.map((menuItem, index) => {
				let name = menuItem.name;

				if (typeof menuItem.name === 'function' && menuItem.type === 'Lang') {
					name = menuItem.name('Switched to English');
				}

				if (typeof menuItem.name === 'function' && menuItem.type === 'Theme') {
					name = menuItem.name('Светлая');
				}

				return (
					<DropdownMenuParts.__MenuItem
						key={index}
						onClick={() => {
							onChange(false);
							menuItem.onClick();
						}}
					>
						<span>{name as string}</span>
						{menuItem.childs && (
							<DropdownMenuParts.__IconWrapper>
								<ArrowBottomIcon />
							</DropdownMenuParts.__IconWrapper>
						)}
					</DropdownMenuParts.__MenuItem>
				);
			})}
		</DropdownMenuParts.__Wrapper>
	);
};

export default DropdownMenu;
