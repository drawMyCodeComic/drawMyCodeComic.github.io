/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../../constants/theme"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Ramesant;
    src: url(${require("../../fonts/Ramesant.otf")});
  }
  * {
    font-family: ${({ theme }) => theme.font.family};
  }
`

const Layout = ({ children, fluid, removeNavBar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header fluid={fluid} removeNavBar={removeNavBar} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
