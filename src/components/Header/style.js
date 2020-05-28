import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #15092D;
  width: 100%;
  height: 9vh;
  display: flex;
  align-items: center;

  /* BUTTONS STYLES (DELETE - CREATE) */
  svg{
    cursor: pointer;
    margin: 5px;
    width: 29px;
    height: 31px;

    :last-of-type {
      margin-right: 20px;
    }

    :first-of-type {
      margin-left: 20px;
    }   
  }

  
  @media (max-width: 800px){
    width: 100vw;
  }
`


export const ButtonPreview = styled.button``
