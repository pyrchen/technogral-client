'use client';

import { FC, useEffect, useRef } from 'react';

import { ToastsParts, ToastsVariants } from '@/components/Toasts/Toasts.styled';
import { useToastsActions } from '@/store/actions.store';
import { IToast, useToasts } from '@/store/toasts';

const ToastComponent: FC<IToast> = ({ duration, id, message, type }) => {
	const ToastElement = ToastsVariants[type];

	const toasts = useToasts();
	const { removeToast } = useToastsActions();

	const timer = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		timer.current = setTimeout(() => {
			const exists = toasts.find((toast) => toast.id === id);

			/* Removed manually */
			if (!exists) return;

			removeToast(id);
		}, duration);

		return () => {
			console.log('here', timer.current);
			clearTimeout(timer.current);
		};
	}, [id, removeToast, toasts, duration]);

	return (
		<ToastElement onClick={() => removeToast(id)}>
			{message}
			<ToastsParts.__ToastProgressWrapper>
				<ToastsParts.__ToastProgress $duration={duration} />
			</ToastsParts.__ToastProgressWrapper>
		</ToastElement>
	);
};

const Toasts = () => {
	const toasts = useToasts();

	const { removeToast } = useToastsActions();

	useEffect(() => {
		if (toasts.length > 5) {
			removeToast(toasts[0].id);
		}
	}, [toasts, removeToast]);

	return (
		<ToastsParts.__Wrapper>
			{toasts.map((toast) => (
				<ToastComponent
					key={toast.id}
					{...toast}
				/>
			))}
		</ToastsParts.__Wrapper>
	);
};

export default Toasts;
