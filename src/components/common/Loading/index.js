import React from 'react'
import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0%{
    transform: translateY(0px);
  }

  60%{
    transform: translateY(0px);
  }

  80%{
    transform: translateY(-15px);
  }
`
const Wrapper = styled.div`
  justify-content: center;
  display:flex;

  div{
    height: 5px;
    width: 5px;
    background: #1B1919;
    border-radius: 100%;
    margin: 2px;
    animation: ${loading} 0.9s linear infinite;

    @media(max-width: 800px){
    background: #EDECEC;
    }
  }

  div:nth-child(1){
    animation-delay: 0;
  }
  
  div:nth-child(2){
    animation-delay: -0.8s;
  }

  div:nth-child(3){
    animation-delay: -0.6s;
  }
  div:nth-child(4){
    animation-delay: -0.4s;
  }
`

export default () => {
  return (
    <Wrapper>
      <div />
      <div />
      <div />
      <div />
    </Wrapper>
  )
}
