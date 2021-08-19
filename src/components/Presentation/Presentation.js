import React from "react"
import { Button } from "../Button/Button"
import { Link } from "../Link/Link"
import styled from "styled-components"
import Logo from "../../icons/drawmyCodeLogo.svg"
import { Collapse } from "reactstrap"

const LogoBig = require("../../images/logoBig.svg")

const Wrapper = styled.div`
  .logo {
    margin: auto;
    display: block;
    margin-bottom: 150px;
    max-width: 100%;
  }
  .start-button {
    display: block;
    margin: auto;
  }
`

export const Presentation = props => (
  <Wrapper>
    <Collapse isOpen={props.isMobile}>
      <Logo className="logo" />
    </Collapse>
    <Collapse isOpen={!props.isMobile}>
      <img
        className="logo"
        src={LogoBig}
        width={800}
        alt="Draw my codDraw my code"
      />
    </Collapse>
    <Link to="/episodes">
      <Button width="300px" className="start-button">
        Start Reading
      </Button>
    </Link>
  </Wrapper>
)
