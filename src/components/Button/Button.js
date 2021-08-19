import React from "react"
import styled from "styled-components"

export const ButtonStyles = type => styled[type]`
  box-shadow: ${({ theme, deph }) => theme.dephs[deph || 1]};
  border-radius: ${({ theme }) => theme.border.radiusMd}px;
  color: ${({ theme }) => theme.colorPalette.darkBlue};
  border: none;
  box-sizing: border-box;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colorPalette.white};
  font-size: ${({ theme }) => theme.font.size.md};
  width: ${({ width }) => width || "100%"};
  &:hover {
    color: ${({ theme }) => theme.colorPalette.blue};
  }
`
export const Button = ButtonStyles("button")
export const LinkButton = ButtonStyles("a")
