import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a,
	input,
	button,
	textarea,
	select {
		margin: 0;
		font: inherit;
		border: none;
		outline: none;
	}

	li {
		list-style-type: none;
	}

	ul {
		padding-left: 0;
		margin-left: 0;
	}
`;

export default GlobalStyles;
