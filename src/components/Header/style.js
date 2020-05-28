import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #15092D;
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
   
  svg{
    cursor: pointer;
    margin: 5px;
    width: 29px;
    height: 31px;
  }

  @media (max-width: 800px){
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SvgButtons = styled.div`
  margin-left: auto;
`


export const ButtonPreview = styled.button`
  display:none;
  
  @media (max-width: 800px){
    position: absolute;
    display: block;
    margin-left: ${props => props.previewOpen ? '7px' : '0'};
    width: ${props => props.previewOpen ? '24%' : '37%'};
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