import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from '../common/Button'
import HamburguerMenu from '../common/Hamburguer-Menu'

// STYLE
import { Wrapper,  ButtonPreview, SvgButtons } from './style'

// ICONS
import {ReactComponent  as DeleteIcon} from '../../assets/remove.svg'
import {ReactComponent as CreateIcon} from '../../assets/new.svg'

const Header = ({ 
  handleClear, 
  handleCreate, 
  isMenuOpen, 
  handleMenu,
  handlePreviewMobile,
  open
}) => {
  return (
    <Wrapper>
      <HamburguerMenu previewOpen={open} handleMenu={handleMenu} isMenuOpen={isMenuOpen} />

      

     
      <ButtonPreview previewOpen={open} onClick={handlePreviewMobile}>
        {open ? 'BACK' : 'PREVIEW'}
      </ButtonPreview>

      <SvgButtons>
        <CreateIcon onClick={handleCreate} />
        <DeleteIcon onClick={handleClear} />
      </SvgButtons>
     
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