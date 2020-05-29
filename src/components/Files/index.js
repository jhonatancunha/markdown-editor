import React from 'react'
import PropTypes from 'prop-types'

// STYLES
import { Wrapper, Row,TitleName  } from './styles'

const Files = ({ handleOpenFile, files, isMenuOpen }) => {
  return (
  <>
    {/* VERIFICA SE FILES ESTÁ NULO CASO ESTIVER RETORNA WRAPPER VAZIO */}
    
    {
    (files && Object.keys(files).length) ? 
    //TEM ARQUIVO IMPRIME ISSO
      <Wrapper open={isMenuOpen}>
        <ul>   
          {Object.keys(files).map((fileID) => (
            <Row key={fileID}>
              <TitleName onClick={handleOpenFile(fileID)}>{files[fileID].title}</TitleName>
            </Row>
          ))}
        </ul>
      </Wrapper>      
      : 
      //NÃO TEM ARQUIVO IMPRIME ISSO
      <Wrapper open={isMenuOpen}>
          <ul>
            <Row>
              <p>Vazio...</p>
            </Row>
          </ul>
        </Wrapper> 
    }
  </>
      
      
    
  )
}

Files.propTypes = {
  handleOpenFile: PropTypes.func.isRequired,
  files: PropTypes.object
}

export default Files;