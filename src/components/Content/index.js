import React from 'react'
import PropTypes from 'prop-types'

//Components
import Header from '../Header'
import Files from '../Files'

const MarkDownEditor = ({ 
  value, 
  handleChange, 
  getMarkup,
  textareaRef,
  files,
  handleOpenFile,
  title,
  ...props
}) => 
  (
    <section className="editor">
      <Header {...props} />

      <Files files={files} handleOpenFile={handleOpenFile}  />
      <input
        onChange={handleChange('title')}
        type="text" 
        value={title} 
        placeholder="Sem Título..."/>

      <textarea
        value={value} 
        onChange={handleChange('value')}
        autoFocus
        ref={textareaRef}
      />

      <article className="view" dangerouslySetInnerHTML={getMarkup()} />

    </section>
  )

MarkDownEditor.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}



export default MarkDownEditor