import { ReactNode } from 'react';

import AuthPageLayout from '@/app/auth/AuthPageLayout';

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<>
			<AuthPageLayout>{children}</AuthPageLayout>
		</>
	);
}
