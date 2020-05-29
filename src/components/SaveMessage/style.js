import styled from 'styled-components'


export const Wrapper = styled.div`
  position: relative;

  @media (min-width: 801px){
    margin-right: 14px;
    position: absolute;
    right: 10px;
    right: 10px;
  }

  /* BREAKPOINTS HOVER FUNCIONAR SO EM DISPOSITIVO COMPATIVEL */
  @media (hover: hover){
    transition: opacity 0.2s ease;
    svg{
      transition: opacity 0.2s ease;
      opacity: 0.5;

      :hover{
        opacity: 1;
      }

    }

    :hover{
      &::before{
        content: '${props => props.message}';
        width: max-content;
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
