'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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

export const ScrollBarStyles = createGlobalStyle`
	body {
		&::-webkit-scrollbar-thumb {
			background-color: #8f8f8f;
			border-radius: 4px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: #769CFF;
		}

		&::-webkit-scrollbar {
			width: 8px;
		}

		&::-webkit-scrollbar-track {
			background-color: #E3E3E3;
		}
	}
`;
