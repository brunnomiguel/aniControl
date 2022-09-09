import styled from "@emotion/styled";
import { keyframes } from "@chakra-ui/react";

const animate = keyframes`

  from {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  to {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

`;

export const Container = styled.div`
	background: #03001e;
	background: -webkit-linear-gradient(
		to right,

		#cc7189,
		#69294b,
		#0b063a
	); /*Old versions*/
	background: linear-gradient(
		to right,

		#cc7189,
		#69294b,
		#0b063a
	);

	width: 100%;
	height: 100vh;
`;

export const Contain = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	filter: blur(2px);
	background-color: rgba(0, 0, 0, 0.4);

	div {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: rgba(255, 255, 255, 0.2);
		animation: ${animate} 6s linear infinite;
		bottom: -150px;
	}

	div:nth-of-type(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	div:nth-of-type(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 3s;
	}

	div:nth-of-type(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 1s;
	}

	div:nth-of-type(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 4.5s;
	}

	div:nth-of-type(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	div:nth-of-type(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 0.75s;
	}

	div:nth-of-type(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 1.75s;
	}

	div:nth-of-type(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 11.25s;
	}

	div:nth-of-type(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 8.25s;
	}

	div:nth-of-type(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 4.75s;
	}

	div:nth-of-type(11) {
		left: 90%;
		width: 75px;
		height: 75px;
		animation-delay: 0s;
		animation-duration: 7.75s;
	}

	div:nth-of-type(12) {
		left: 57.5%;
		width: 75px;
		height: 75px;
		animation-delay: 0s;
		animation-duration: 6.75s;
	}
`;

export const DivOne = styled.div``;
export const DivTwo = styled.div``;
export const DivThree = styled.div``;
export const DivFour = styled.div``;
export const DivFive = styled.div``;
export const DivSix = styled.div``;
export const DivSeven = styled.div``;
export const DivEight = styled.div``;
export const DivNine = styled.div``;
export const DivTen = styled.div``;
export const DivEleven = styled.div``;
export const DivTwelve = styled.div``;
