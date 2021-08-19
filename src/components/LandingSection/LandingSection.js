import styled from "styled-components"

export const LandingSection = styled.section`
  margin-top: ${({ top }) => top || 10}px;
  margin-bottom: ${({ bottom }) => bottom || 10}px;
  padding-top: ${({ pTop }) => pTop || 10}px;
  padding-bottom: ${({ pBottom }) => pBottom || 10}px;
  min-height: ${({ height }) => height || 600}px;
  display: ${({ center }) => (center ? "flex" : "block")};
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
`
