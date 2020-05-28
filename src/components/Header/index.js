import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from '../common/Button'
import SaveMessage from '../SaveMessage'
import HamburguerMenu from '../common/Hamburguer-Menu'

// STYLE
import { Wrapper,  ButtonPreview } from './style'

// ICONS
import {ReactComponent  as DeleteIcon} from '../../assets/remove.svg'
import {ReactComponent as CreateIcon} from '../../assets/new.svg'

const Header = ({ 
  isSaving, 
  handleClear, 
  handleCreate, 
  isMenuOpen, 
  handleMenu,
  handleChange,
  title
}) => {
  return (
    <Wrapper>
      <HamburguerMenu handleMenu={handleMenu} isMenuOpen={isMenuOpen} />

      

      {/* <SaveMessage isSaving={isSaving} />*/}

      <ButtonPreview>PREVIEW</ButtonPreview>
      <CreateIcon onClick={handleCreate} />
      <DeleteIcon onClick={handleClear} />
     
    </Wrapper>
  )
}

Header.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Header