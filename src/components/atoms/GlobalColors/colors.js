import { createGlobalStyle } from "styled-components";

const GlobalColors = createGlobalStyle`
	:root {
		--primary: #AFEA0D;
		--black: #202117;
		--black-body-text: #676A4E;
		--grey: #9A9C95;
		--line: #BDC5A7;
		--background: #F7F7F7;
		--white: #FFFFFF;
		--red: #EA0D0D;
		--pink: #F75F7B;
		--orange: #FFA500;
		--purple: #7C0DEA;
		--blue: #4B45ED;
		--cyan: #45BBED;
	}
		
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}`;

export default GlobalColors;
