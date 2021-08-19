import { Link as GatsbyLink } from "gatsby"
import styled, { withTheme } from "styled-components"

export const Link = withTheme(styled(GatsbyLink)`
  font-size: ${({ size, theme }) => theme.font.size[size || "sm"]};
  color: ${({ theme, color }) => theme.colorPalette[color || "darkgreen"]};
  float: ${({ floatRight }) => (floatRight ? "right" : "none")};
  &:hover {
    color: ${({ theme, hoverColor }) =>
      theme.colorPalette[hoverColor || "green"]};
  }
`)
