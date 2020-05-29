import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #15092D;
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  z-index: 10;

  svg{
    cursor: pointer;
    margin: 5px;
    width: 29px;
    height: 31px;
  }

  @media (max-width: 800px){
    padding: 4px 15px 0 15px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* CENTRALIZANDO ICONES DO HEADER EM DIFERENTES TAMANHOS DE TELAS */
  @media(min-width: 600px){
    padding: 4px 37px 0 31px
  }

  @media(min-width: 801px){
    padding: 0;
  }
`

export const SvgButtons = styled.div`
  margin-left: auto;
`

export const ButtonPreview = styled.button`
  display:none;
  cursor: pointer;
  @media (max-width: 800px){
    display: block;
    margin-left: ${props => props.previewOpen ? '7px' : '0'};
    width: ${props => props.previewOpen ? '9em' : '9em'};
    height: 39px;
    background: #C9144E;
    
    left: ${props => props.previewOpen ? '0' : ''};
    border: 0;
    border-radius: 3px;
    border-radius: 3px;
   
    color: #EDECEC;
    font-size: 1em;
    font-weight: bold;
  }
`