import { AppThemes } from '@/constants/theme.constants';

interface IThemeColors {
	MAIN: Record<string, string>;
	TEXT: Record<string, string>;
}

export type TSpecifiedThemeColors = typeof SpecifiedLightThemeColors;
export interface IWithTheme {
	theme: TSpecifiedThemeColors;
}

const LightThemeColors = {
	MAIN: {
		MAIN_1: '#0066FF',
		MAIN_2: '#769CFF',
		MAIN_3: '#0447AB',
		MAIN_4: '#FFFFFF',
		MAIN_5: '#FAFAFA',
		MAIN_6: '#585858',
	},
	TEXT: {
		TEXT_1: '#000000',
		TEXT_2: '#0A0A0A',
		TEXT_3: '#373737',
		TEXT_4: '#565656',
		TEXT_5: '#898989',
		TEXT_6: '#B7B7B7',
		TEXT_7: '#FFFFFF',
	},
} satisfies IThemeColors;

const SpecifiedLightThemeColors = {
	...LightThemeColors,
	button: {
		default: LightThemeColors.MAIN.MAIN_1,
		hover: LightThemeColors.MAIN.MAIN_2,
	},
	text: { ...LightThemeColors.TEXT },
} as const;

export const ThemeColors: Record<AppThemes, TSpecifiedThemeColors> = {
	[AppThemes.LIGHT]: SpecifiedLightThemeColors,
	[AppThemes.DARK]: SpecifiedLightThemeColors,
};
