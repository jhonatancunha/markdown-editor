import React from 'react'
import PropTypes from 'prop-types'

// STYLE
import { Wrapper, Row } from './style'

export const HamburguerMenu = ({ isMenuOpen, handleMenu, previewOpen }) => {
  return (
    <Wrapper onClick={handleMenu} previewOpen={previewOpen} open={isMenuOpen}>
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