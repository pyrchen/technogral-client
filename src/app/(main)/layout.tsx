import { ReactNode } from 'react';

import MainPageLayout from '@/app/(main)/MainPageLayout';

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
	return <MainPageLayout>{children}</MainPageLayout>;
}
