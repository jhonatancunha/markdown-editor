import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ICONS
import {ReactComponent as Saved} from '../../assets/saved.svg'

const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  @media (hover: hover){
    svg{
      transition: opacity 0.2s ease;
      opacity: 0.5;

      :hover{
        opacity: 1;
      }

    }
    :hover{
      &::before{
        content: 'Salvo!';
        background: #1B1919;
        color: #EDECEC;
        padding: 6px;
        border-radius: 3px;
        position: absolute;
        top: 7px;
        right: 43px;
      }
    }
  }
`


const SaveMessage = ({ isSaving }) => {
  return (
    isSaving !== null && 
      <Wrapper>
        {isSaving ? 'Salvando...' : <Saved />}
      </Wrapper>
  )
}

SaveMessage.propTypes = {
  isSaving: PropTypes.bool,
}

export default SaveMessage;