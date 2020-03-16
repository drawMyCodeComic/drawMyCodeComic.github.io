import React, {useState} from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {IconButton} from '../IconButton/IconButton';
import Menu from '../../icons/menuIcon.svg';
import Logo from '../../icons/drawmyCodeLogo.svg';
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Collapse
} from 'reactstrap';
import {urls} from '../../constants/landingUrls.js';
import {Link as ScrollLink} from 'react-scroll';
import {classNames} from '../../utils/classNames'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({theme}) => theme.colorPalette.white};
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
    display: none;
    float: right;
  }
  @media(max-width: 800px) {
    height: 40px;
    .logo {
      width: 40px;
    }
    .menu {
      display: block;
    }
    .navbar {
      display: none;
    }
  }
  .reverse {
    flex-direction: row-reverse;
  }
  .landing-urls {
    padding: 10px;
    color: ${({theme}) => theme.colorPalette.lightGray};
    &.active {
      color: ${({theme}) => theme.colorPalette.darkBlue};
    }
  }
  .vertical-center {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Header = (props) =>  {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activated, setActivated] = useState(urls.HOME);
  const socialNetworks = Object.keys(props.socialNetworks || {});

  return (
        <HeaderWrapper>
          <Container fluid={props.fluid || "sm"} >
            <Row>
              <Col sm="2">
                <Link to="/">
                  <Logo className="logo" alt="logo" />
                </Link>
              </Col>
              <Col>
                <div className="reverse vertical-center">
                  <div className="menu">
                      <IconButton>
                        <Menu />
                      </IconButton>
                  </div>
                    {
                      !props.removeNavBar && (
                        <Navbar>
                          <Nav className="mr-auto">
                              {
                                Object.keys(urls).map(name => (
                                  <NavItem>
                                    <ScrollLink
                                      className={
                                        classNames({
                                          "landing-urls": true,
                                          "active": activated === name
                                        })
                                      }
                                      to={urls[name]}
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={500}
                                      onSetActive={setActivated}
                                      key={name}>
                                      { name }
                                    </ScrollLink>
                                  </NavItem>
                                ))
                              }
                              <NavItem >
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
                      )
                    }
                </div>
              </Col>
            </Row>
          </Container>
        </HeaderWrapper>
  );
}
export default Header;
