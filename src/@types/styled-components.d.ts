import { TSpecifiedThemeColors } from '@/constants/colors.constants';

import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme extends TSpecifiedThemeColors {}
}
