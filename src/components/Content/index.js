import React from 'react'
import PropTypes from 'prop-types'

//Components
import Header from '../Header'
import Files from '../Files'
import SaveMessage from '../SaveMessage'


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
  isPreviewMobileOpen,
  isSaving,
  ...props
}) => 
  (
    <Wrapper>
       <SaveMessage isSaving={isSaving} />

    <WrapperCode >
      <Header {...props} open={isPreviewMobileOpen} handleChange={handleChange} />

      <WrapperTitle  >
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

    
    </WrapperCode>
    <WrapperPreview open={isPreviewMobileOpen} className="view" dangerouslySetInnerHTML={getMarkup()} />
    
    <Footer>
      <span>2020.  <strong> Jhonatan Cunha</strong></span>
    </Footer>

  </Wrapper>  
)

MarkDownEditor.propTypes = {
 
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}



export default MarkDownEditor