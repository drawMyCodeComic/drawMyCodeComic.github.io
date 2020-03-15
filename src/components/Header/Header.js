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
} from 'reactstrap'

const HeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0px 0px 7px #00000029;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .logo {
    width: 60px;
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
  .nav-link {

  }
  .reverse {
    flex-direction: row-reverse;
  }
`;

const Header = (props) =>  {
  const [toggleMenu, setToggleMenu] = useState(false);
  const socialNetworks = Object.keys(props.socialNetworks || {});

  return (
        <HeaderWrapper>
          <Container fluid="sm" >
            <Row>
              <Col sm="2">
                <Link to="/">
                  <Logo className="logo" alt="logo" />
                </Link>
              </Col>
              <Col>
                <Row className="reverse">
                  <div class="menu">
                      <IconButton>
                        <Menu />
                      </IconButton>
                  </div>
                    <Navbar>
                      <Nav className="mr-auto">
                          {
                            socialNetworks.map(item => (
                              <NavItem>
                                <NavLink href={props.socialNetworks[item]} key={item}>
                                  { item }
                                </NavLink>
                              </NavItem>
                            ))
                          }
                      </Nav>
                    </Navbar>
                  </Row>
              </Col>
            </Row>
          </Container>
        </HeaderWrapper>
  );
}
export default Header;
