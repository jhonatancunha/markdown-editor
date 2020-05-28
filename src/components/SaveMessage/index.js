import React from 'react'
import PropTypes from 'prop-types'

const SaveMessage = ({ isSaving }) => {
  return (
    isSaving !== null && 
      <p>
        {isSaving ? 'Salvando...' : 'Salvo!'}
      </p>
  )
}

SaveMessage.propTypes = {
  isSaving: PropTypes.bool,
}

export default SaveMessage;