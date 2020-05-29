import React from 'react'
import PropTypes from 'prop-types'

//Components
import Header from '../Header'
import Files from '../Files'
import Footer from '../Footer'

// Styles
import { Wrapper, WrapperCode, TextAreaCode, WrapperPreview, TitleInput, TitleInformation, WrapperTitle} from './style'

const MarkDownEditor = ({ 
  value, 
  getMarkup,
  textareaRef,
  files = {},
  handleChange,
  handleOpenFile,
  title,
  isPreviewMobileOpen,
  isSaving,
  isMenuOpen,
  ...props
}) => 
(
  <>
    <Wrapper>
      <WrapperCode >
        <Header {...props} isMenuOpen={isMenuOpen} isSaving={isSaving} open={isPreviewMobileOpen} />

        <WrapperTitle  open={isPreviewMobileOpen}>
          <TitleInformation> TITLE </TitleInformation>
          <TitleInput
            onChange={handleChange('title')}
            type="text" 
            value={title} 
            placeholder="Digite aqui um título para seu arquivo..."/>
        </WrapperTitle>
  
        <Files isMenuOpen={isMenuOpen} files={files} handleOpenFile={handleOpenFile}  />
      
        <TextAreaCode
          rows="4" cols="5"
          placeholder="Digite aqui..."
          value={value} 
          onChange={handleChange('value')}
          autoFocus
          ref={textareaRef}
        />

      </WrapperCode>
      <WrapperPreview open={isPreviewMobileOpen} className="view" dangerouslySetInnerHTML={getMarkup()} />
    </Wrapper>  
    <Footer />
  </>
)

MarkDownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default MarkDownEditor