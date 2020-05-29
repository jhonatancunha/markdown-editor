import styled from 'styled-components'

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background: #15092D;
  border-top: 3px solid #231341;
  height: 77px;
  width: 100%;
  color: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icons = styled.div`
  position: absolute;
  left: 10px;
  
  a{
    margin-right: 10px;
  
    @media (hover:hover){
      opacity: 0.5;
      transition: opacity .2s ease;

      :hover{
        opacity: 1;
      }
    }
  } 
`

export const Strong = styled.strong`
  @media (hover:hover){
    :hover{
      text-shadow: 0px 3px #C9144E;
    }
  }
`