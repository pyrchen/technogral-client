import styled from 'styled-components';

const __Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`;

const __Circle = styled.div`
	position: relative;
	width: 27px;
	height: 27px;
	border: 1px solid #769cff;
	border-radius: 50%;

	&:before {
		position: absolute;
		display: block;
		content: '';
		width: 15px;
		height: 15px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #769cff;
		opacity: 0;
		border-radius: 50%;
		transition: 0.2s all;
	}
`;

const __Text = styled.span`
	font-size: 16px;
	color: #898989;
	transition: 0.2s all;
`;

const __Label = styled.label`
	display: flex;
	gap: 10px;
	align-items: center;
	cursor: pointer;

	&:hover {
		${__Circle} {
			&:before {
				opacity: 0.5;
			}
		}

		${__Text} {
			color: #373737;
		}
	}
`;

const __RadioInput = styled.input`
	display: none;

	&:checked {
		& + ${__Label} ${__Circle} {
			&:before {
				opacity: 1;
			}
		}

		& + ${__Label} ${__Text} {
			color: #373737;
		}
	}
`;

export const RadioFieldParts = {
	__Wrapper,
	__Circle,
	__RadioInput,
	__Label,
	__Text,
};

function addCircleIfActive() {}
