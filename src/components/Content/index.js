import React from 'react'
import PropTypes from 'prop-types'

//Components
import Header from '../Header'
import Files from '../Files'

// Styles
import { Wrapper, WrapperCode, TextAreaCode, Footer, WrapperPreview, TitleInput, TitleInformation, WrapperTitle, } from './style'

const MarkDownEditor = ({ 
  value, 
  getMarkup,
  textareaRef,
  files,
  handleChange,
  handleOpenFile,
  title,
  ...props
}) => 
  (
    <Wrapper>
    <WrapperCode>
      <Header {...props} handleChange={handleChange} />

      <WrapperTitle>
        <TitleInformation> TITLE </TitleInformation>
        <TitleInput
          onChange={handleChange('title')}
          type="text" 
          value={title} 
          placeholder="Digite aqui um título para seu arquivo..."/>
      </WrapperTitle>

      {/* <Files files={files} handleOpenFile={handleOpenFile}  />
      */}

      <TextAreaCode
        placeholder="Digite aqui..."
        value={value} 
        onChange={handleChange('value')}
        autoFocus
        ref={textareaRef}
      />

      <Footer>
        <span>2020.  <strong> Jhonatan Cunha</strong></span>
      </Footer>
    </WrapperCode>

    <WrapperPreview className="view" dangerouslySetInnerHTML={getMarkup()} />
  </Wrapper>  
)

MarkDownEditor.propTypes = {
 
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}



export default MarkDownEditor