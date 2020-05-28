import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`

//RIGHT SIDE
export const WrapperCode = styled.section`
  width: 50vw;

  /* BREAKPOINTS */
  @media (max-width: 800px){
    width: 100vw;
  }
`

export const TextAreaCode = styled.textarea`
  resize: none;
  width: 100%;
  background: #1C0F35;
  border: 0;
  border-top: 3px solid #231341;
  border-bottom: 3px solid #231341;

  
  margin-top: 20px;
  height: calc(100% - 50px);
  color: #EFECEC;
  padding: 20px 0 -0px 20px;

  @media (max-width: 800px){
    height: calc(100% - 20vh);
  }
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background: #15092D;
  border-top: 3px solid #231341;
  height: 50px;
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
  width: 50vw;
  padding: 20px;
  height: calc(100vh - 50px);

  @media (max-width: 800px){
    visibility: hidden;
    padding: 0;
  }

`

export const WrapperTitle = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  position: relative;
  flex-grow: 1;

  
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