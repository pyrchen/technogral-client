'use client';

import { ThemeProvider } from 'styled-components';

import React, { useState } from 'react';

import { ThemeColors } from '@/constants/colors.constants';
import { AppThemes } from '@/constants/theme.constants';

export default function StyledComponentsThemeRegistry({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<AppThemes>(AppThemes.LIGHT);

	return <ThemeProvider theme={ThemeColors[theme]}>{children}</ThemeProvider>;
}
