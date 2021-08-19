import React from "react"
import { Paper } from "../Paper/Paper"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Text } from "../Text/Text"
import styled, { withTheme } from "styled-components"

const CardComponent = props => (
  <Paper
    className={props.className}
    deph={props.deph || 0}
    borderSize={props.borderSize || 1}
    borderColor={props.borderColor || props.theme.colorPalette.lightGray}
  >
    <span>{props.title}</span>
    {props.children}
    <div className="information">
      <div className="tags">
        {props.tags.slice(0, 2).map(tag => (
          <Text size="xs" className="tag">
            <Link to={"/tags/" + tag.toLowerCase()}>#{tag}</Link>
          </Text>
        ))}
      </div>
      <Text size="xs" className="date">
        {props.date}
      </Text>
    </div>
  </Paper>
)

export const CardImage = styled(Img)`
  width: 100%;
`

export const Card = withTheme(styled(CardComponent)`
  width: 100%;
  height: ${({ size }) => size || 400}px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: ${({ bottom }) => bottom || 10}px;
  .information,
  .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  .date {
    color: ${({ theme }) => theme.colorPalette.lightGray};
  }
  .tag {
    margin-right: 10px;
    a {
      color: ${({ theme }) => theme.colorPalette.darkgreen};
    }
  }
  @media (max-width: 800px) {
    height: auto;
    min-height: ${({ size }) => size || 400}px;
  }
`)
