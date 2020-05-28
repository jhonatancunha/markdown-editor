import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from '../common/Button'
import SaveMessage from '../SaveMessage'

const Header = ({ isSaving, handleClear, handleCreate }) => {
  return (
    <header>
      <SaveMessage isSaving={isSaving} />

      <Button onClick={handleCreate}>Criar Novo</Button>
      <Button onClick={handleClear}>Limpar</Button>
    </header>
  )
}

Header.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header