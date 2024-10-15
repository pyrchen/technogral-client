import styled from 'styled-components';

import { ToastType } from '@/store/toasts';

const __Wrapper = styled.div`
	position: fixed;
	display: flex;
	flex-flow: column nowrap;
	gap: 12px;
	align-items: center;
	justify-content: center;
	max-width: 450px;
	bottom: 0;
	left: 0;
	padding: 20px;

	@keyframes showToast {
		0% {
			transform: translateX(-100%);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes animateDuration {
		0% {
			width: 100%;
		}
		100% {
			width: 0;
		}
	}
`;

const __Toast = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-weight: 500;
	padding: 20px 30px;
	border-radius: 6px;
	animation-name: showToast;
	animation-duration: 0.3s;
	animation-iteration-count: 1;
	transition: 0.2s all;
	cursor: pointer;
	overflow: hidden;
`;

const __ToastProgressWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 4px;
	background-color: rgba(0, 0, 0, 0.2);
`;

const __ToastProgress = styled.div<{ $duration: number }>`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.5);
	animation-name: animateDuration;
	animation-duration: ${(props) => props.$duration}ms;
	animation-iteration-count: 1;
`;

const __ToastError = styled(__Toast)`
	background-color: #dc5454;
	color: white;
`;

const __ToastWarning = styled(__Toast)`
	background-color: #cbcb44;
	color: #262626;
`;

const __ToastSuccess = styled(__Toast)`
	background-color: #31b95c;
	color: white;
`;

export const ToastsVariants = {
	[ToastType.ERROR]: __ToastError,
	[ToastType.WARNING]: __ToastWarning,
	[ToastType.SUCCESS]: __ToastSuccess,
};

export const ToastsParts = {
	__Wrapper,
	__ToastProgressWrapper,
	__ToastProgress,
};
