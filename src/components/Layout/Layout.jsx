/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../../constants/theme"
import { Corner } from "./Corner"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { Header } from "../Navigation/Header"


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Tahoma;
    src: url(${require("../../fonts/Tahoma_regular.ttf")});
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
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Box position="relative" overflow="hidden" h="100vh" w="100vw">
            <Corner />
            <Header />
            {children}
            <Corner position="bottom" />
          </Box>
        </main>
      </ThemeProvider>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
