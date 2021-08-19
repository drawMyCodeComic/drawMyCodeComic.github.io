import React from "react"
import { Link } from "../Link/Link"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.div``

export const ContentNavigator = ({ previous, next }) => (
  <Wrapper>
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyle: "none",
        padding: 0,
      }}
    >
      <li>
        {previous && (
          <Link
            color="blue"
            hoverColor="darkBlue"
            to={previous.fields.slug}
            rel="prev"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && !next.frontmatter.draft && (
          <Link
            color="blue"
            hoverColor="darkBlue"
            to={next.fields.slug}
            rel="next"
          >
            {next.frontmatter.title} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        )}
      </li>
    </ul>
  </Wrapper>
)
