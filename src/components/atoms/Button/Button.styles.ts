import styled, { css } from 'styled-components';

export type StyledButtonProps = {
	type?: "primary" | "outlined" | "premium" | "text" | "icon";
	size?: "big" | "small"
	fullWidth?: boolean;
	backgroundColor?: string;
	color?: string;
	borderColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => {
		props.type = props.type || "primary";
		props.size = props.size || "big";
		return null;
	}}

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  Padding: 14px 48px;
  border-radius: 100px;
  outline: none;

  width: ${({ fullWidth, size }) => fullWidth ? "100%" : size == "big" ? "351px" : size == "small" ? "146px" : "auto"};
  height: ${({ size }) => size == "big" ? "50" : "26"}px;

  &:focus, &:hover {
    outline: none;
  }

  ${({ type }) => {
		switch (type) {
			case "primary":
				return css`
          background-color: var(--primary);
          color: var(--black);
        `
			case "premium":
				return css`
          background-color: var(--orange);
          color: var(--black);
        `
			case "outlined":
				return css`
            background-color: transparent;
            color: var(--primary);
            border: 1px solid var(--grey);
        `
			case "text":
				return css`
          background-color: transparent;
          color: var(--grey);
          padding: 4px;
        `
			case "icon":
				return css`
          background-color: var(--primary);
          color: var(--black);
          width: 23px;
          height: 23px;
          padding: 7px;
        `
		}
	}}
  
  ${({ color, backgroundColor, borderColor }) => {
		return css`
      ${color && `color: ${color}`}
      ${backgroundColor && `background-color: ${backgroundColor}`}
      ${borderColor && `border: 1px solid ${borderColor}`}
    `
	}}`;