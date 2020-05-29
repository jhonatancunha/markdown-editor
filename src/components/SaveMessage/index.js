import React from 'react'
import PropTypes from 'prop-types'

// ICONS
import {ReactComponent as Saved} from '../../assets/saved.svg'
import { ReactComponent as Attention } from '../../assets/attention.svg'
import Loading from '../common/Loading'

// STYLE
import { Wrapper } from './style'

function Sign(props){
  const status = props.isSaving;

  if(status === null){
    return (
      <Wrapper  message={"Digite algo para salvar!"}>
        <Attention />
      </Wrapper>)
    
  }else if(status){
    return (
      <Wrapper  message={"Salvando!"}>
          <Loading />
      </Wrapper>
    )
  }else{
    return (
      <Wrapper  message={"Salvo!"}>
          <Saved  />
      </Wrapper>
    )
    
  }
}

const SaveMessage = ({ isSaving }) => {
  return (
        <Sign  isSaving={isSaving} />
  )
}

SaveMessage.propTypes = {
  isSaving: PropTypes.bool,
}

export default SaveMessage;
