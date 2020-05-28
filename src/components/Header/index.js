import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from '../common/Button'
import SaveMessage from '../SaveMessage'

// STYLE
import { Wrapper } from './style'

const Header = ({ isSaving, handleClear, handleCreate }) => {
  return (
    <Wrapper>
      <SaveMessage isSaving={isSaving} />

      <Button onClick={handleCreate}>Criar Novo</Button>
      <Button onClick={handleClear}>Limpar</Button>
    </Wrapper>
  )
}

Header.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header