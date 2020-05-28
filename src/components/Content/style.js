import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`

//RIGHT SIDE
export const WrapperCode = styled.section`
  width: 50vw;
  height: calc(100vh - 77px);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* BREAKPOINTS */
  @media (max-width: 800px){
    width: 100vw;
  }
`

export const TextAreaCode = styled.textarea`
  resize: none;
  width: 100%;
  height: calc(100% - 53px);
  
  background: #1C0F35;
  border: 0;
  border-top: 3px solid #231341;
  border-right: 3px solid #231341;

  color: #EFECEC;
  padding: 20px 0 -0px 20px;

  :focus{
    border: 0;
  }
`

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

//LEFT SIDE
export const WrapperPreview = styled.article`
  visibility: visible;
  background: #EFECEC;
  color: #1B1919;
  padding: 20px;
  display: flex;
  flex: 1;

  @media (max-width: 800px){
    visibility: ${ props => props.open ? 'visible' : 'hidden'};
    cursor: pointer;
    position: absolute;
    width: 100vw;
    height: calc(100vh - 77px - 51px);
    margin-top: 51px;

  }

`

//TITLE BAR
export const WrapperTitle = styled.div`
  display: ${props => props.open ? 'none' : 'flex'};
  align-items: center;
  position: relative;
  flex-grow: 1;

@media (max-width: 800px){
  width: 90%;
  padding-bottom: 15px;
  padding-top: 6px;
}

@media (min-width: 801px){
  margin-right: 36px;
  margin-top: -55px;
  width: calc(100% - 43px - 74.7px - 20px);
}
`

export const TitleInformation = styled.div`
  height: 39px;
  width: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  
  font-weight: 500;
  color: #EFECEC;
  font-size: 0.95rem;

  background: #251545;
  border-radius: 6px;
  border: 3px solid #EFECEC;
`

export const TitleInput = styled.input`
  height: 39px;
  width: 100%;

  background: #EFECEC;
  margin-left: -5px;
  border-radius: 0px 3px 3px 0px;
  border: 0;
  padding-left: 10px;
`