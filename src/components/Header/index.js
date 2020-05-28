import React from 'react'
import PropTypes from 'prop-types'

// Components
import HamburguerMenu from '../common/Hamburguer-Menu'
import SaveMessage from '../SaveMessage'

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
  open,
  isSaving
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
      <SaveMessage isSaving={isSaving} />
    </Wrapper>
  )
}

Header.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired, 
  handleMenu: PropTypes.func.isRequired,
  handlePreviewMobile: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default Header