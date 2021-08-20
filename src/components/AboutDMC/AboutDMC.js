import React from "react"
import styled from "styled-components"
import Logo from "../../icons/drawmyCodeLogo.svg"
import { Text } from "../Text/Text"
import { Row, Col, Collapse } from "reactstrap"
import { FormattedMessage } from "react-intl"


const Wrapper = styled.div`
  .separation-left {
    padding-left: 40px;
    box-sizing: border-box;
  }
  .logo {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
const LogoBig = require("../../images/logoBig.svg")

export const AboutDMC = props => {
  return  (
    <Wrapper>
      <Row>
        <Col md={5}>
          <Collapse isOpen={!props.isMobile}>
            <Logo className="logo" />
          </Collapse>
          <Collapse isOpen={props.isMobile}>
            <img
              className="logo"
              src={LogoBig}
              width={800}
              alt="Draw my codDraw my code"
            />
          </Collapse>
        </Col>
        <Col className="separation-left">
          <Text size="md" bottom={60} align="justify">
            <FormattedMessage id="about.description" />
          </Text>

          <Text size="md" align="justify">
            <FormattedMessage id="about.enjoy" />
          </Text>
        </Col>
      </Row>
    </Wrapper>
  )
}
