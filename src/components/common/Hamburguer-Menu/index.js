import React from 'react'
import PropTypes from 'prop-types'

// STYLE
import { Wrapper, Row } from './style'

export const HamburguerMenu = ({ isMenuOpen, handleMenu }) => {
  return (
    <Wrapper onClick={handleMenu} open={isMenuOpen}>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </Wrapper>
  )
}

HamburguerMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired
}

export default HamburguerMenu