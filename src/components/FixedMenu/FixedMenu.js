import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { urls, AUTHOR } from "../../constants/landingUrls"
import { socialNetworks } from "../../constants/socialNetworks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(40,40,40, 0.8);
  .crossIcon {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.colorPalette.white};
  }
  .menu-container {
    a {
      display: block;
      padding 10px 30px;
      border: 1px solid ${({ theme }) => theme.colorPalette.white};
      margin-bottom: 20px;
      border-radius: 50%;
      text-align: center;
      color: ${({ theme }) => theme.colorPalette.white};
      &:hover {
        color: ${({ theme }) => theme.colorPalette.darkBlue};
        background: ${({ theme }) => theme.colorPalette.white};
      }
    }
  }
`
const { EPISODES, ABOUT } = urls
const { INSTAGRAM, TWITTER } = socialNetworks.site
export const FixedMenu = props => {
  const closeModal = () => props.onClose(false)
  return props.open ? (
    <Wrapper>
      <FontAwesomeIcon
        icon={faTimes}
        className="crossIcon"
        onClick={closeModal}
      />
      <div className="menu-container">
        <Link to={EPISODES} onClick={closeModal}>
          Episodes
        </Link>
        <a href={INSTAGRAM} target="_blank" onClick={closeModal}>
          Instagram
        </a>
        <a href={TWITTER} target="_blank" onClick={closeModal}>
          Twitter
        </a>
        <Link to={ABOUT} onClick={closeModal}>
          About
        </Link>
        <Link to={AUTHOR} onClick={closeModal}>
          Author
        </Link>
      </div>
    </Wrapper>
  ) : null
}
