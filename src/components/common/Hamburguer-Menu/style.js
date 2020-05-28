import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  cursor: pointer;
  

  div:nth-child(1){
    transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    position: relative;
    top: ${props => props.open ? '12px' : '0px'};
  }

  div:nth-child(2){
    transform: ${props => props.open ? 'translateX(-50px)' : 'translateX(0)'};
  }

  div:nth-child(3){
    transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    position: relative;
    bottom: ${props => props.open ? '12px' : '0px'};
  }


`

export const Row = styled.div`
  height: 5px;
  width: 30px;
  border-radius: 2px;
  background: white;
  margin: 7px;

  transition: all .15s ease-in-out;
`

