import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IconButton } from "../IconButton/IconButton"
import { FixedMenu } from "../FixedMenu/FixedMenu"
import Menu from "../../icons/menuIcon.svg"
import Logo from "../../icons/drawmyCodeLogo.svg"
import { Container, Navbar, Nav, NavItem, Row, Col, Collapse } from "reactstrap"
import { urls } from "../../constants/landingUrls.js"
import { Link as ScrollLink } from "react-scroll"
import { classNames } from "../../utils/classNames"
import { useMediaQuery } from "react-responsive"
import { isMobileLib } from "react-device-detect"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colorPalette.white};
  width: 100%;
  box-shadow: 0px 0px 7px #00000029;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .logo {
    width: 60px;
  }
  .container-fluid {
    padding: 0px 40px;
  }
  .menu {
    float: right;
  }
  @media (max-width: 800px) {
    height: 40px;
    .navbar {
      display: none;
    }
    .logo {
      width: 40px;
    }
  }
  .reverse {
    flex-direction: row-reverse;
  }
  .landing-urls {
    padding: 10px;
    color: ${({ theme }) => theme.colorPalette.lightGray};
    &.active {
      color: ${({ theme }) => theme.colorPalette.darkBlue};
    }
  }
  .vertical-center {
    height: 100%;
    display: flex;
    align-items: center;
  }
`

const Header = props => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [activated, setActivated] = useState(urls.HOME)
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" }) || isMobileLib
  const socialNetworks = Object.keys(props.socialNetworks || {})

  return (
    <HeaderWrapper>
      <FixedMenu open={toggleMenu} onClose={setToggleMenu} />
      <Container fluid={props.fluid || "sm"}>
        <Row>
          <Col sm="4" md="2" xs="6">
            <Link to="/">
              <Logo className="logo" alt="logo" />
            </Link>
          </Col>
          <Col>
            <div className="reverse vertical-center">
              <Collapse isOpen={isMobile}>
                <div className="menu">
                  <IconButton onClick={() => setToggleMenu(true)}>
                    <Menu />
                  </IconButton>
                </div>
              </Collapse>
              {!props.removeNavBar && (
                <Collapse isOpen={!isMobile}>
                  <Navbar>
                    <Nav className="mr-auto">
                      {Object.keys(urls).map(name => (
                        <NavItem>
                          <ScrollLink
                            className={classNames({
                              "landing-urls": true,
                              active: activated === name,
                            })}
                            to={urls[name]}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onSetActive={setActivated}
                            key={name}
                          >
                            {name}
                          </ScrollLink>
                        </NavItem>
                      ))}
                      <NavItem>
                        <Link
                          to="/author"
                          className={classNames({
                            "landing-urls": true,
                          })}
                        >
                          AUTHOR
                        </Link>
                      </NavItem>
                    </Nav>
                  </Navbar>
                </Collapse>
              )}
              {props.removeNavBar && (
                <Collapse isOpen={!isMobile}>
                  <Navbar>
                    <Nav className="mr-auto">
                      <Link to="/" className="landing-urls">
                        HOME
                      </Link>
                    </Nav>
                  </Navbar>
                </Collapse>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  )
}
export default Header
