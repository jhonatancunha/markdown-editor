import styled from 'styled-components'

export const Wrapper = styled.div`

  overflow-y: scroll;

  @media (min-width: 801px){
    position: absolute;
    left: 0;
    top: 51px;
    width: 20vw;
    height: calc(100vh - 77px - 18px - -26px - 60px);
    background: #15092D;
  }

  @media (max-width: 800px){
    position: absolute;
    left: 0;
    top: 51px;
    width: 50vw;
    height: calc(100vh - 77px - 18px - -26px - 60px);
    background: #15092D;
  }
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100vw)'};

  transition: all .2s ease-in-out;

  ul{
    position: relative;
    height: 100%;
  }
  
  p{
    color: #EDECEC;
    text-align: center;
    padding-top: 20px;
  }
`

export const Row = styled.li`
  height: 10%;
  width: 100%;

  background: #15092D;
  
  :nth-child(even){

    background: #1C0F35;
  }

  /* BREAKPOINTS ROTATE VIEWPORT RESPONSIVE */
  @media (orientation: landscape){
    height: 10vh;
  }


`

export const TitleName = styled.button`
  height: 100%;
  width: 100%;
  border: 0;
  background: transparent;
  color: #EDECEC;
  cursor: pointer;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media(hover: hover){
    :hover{
      text-decoration: underline;
    }
  }
`