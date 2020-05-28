import React, {Component} from 'react';
import { v4 } from 'node-uuid'

// Components
import MarkDownEditor from './components/Content'
import marked from 'marked'

// STYLE
import { GlobalStyle } from './style'

//HighLight.js IMPORTAÇÃO DINAMICA
import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code) => {
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor(){
    super();
 
    this.initialState = () => ({
      value: '',
      id: v4(),
      title: '',
    })
    
    this.state = {  
      ...this.initialState(),
      isSaving: null,
      files: {},
      isMenuOpen: false,
      isPreviewOpenMobile: false,
    }

    this.handleChange = (field) => (e) => {  
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return {__html: marked(this.state.value)}
    }

    this.handleSave = () => {
      if(this.state.isSaving){
        const savedFiles = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'Sem Título',
            content: this.state.value
          }
        }

        localStorage.setItem('markdown-editor', JSON.stringify(savedFiles));
           
        this.setState({
          files: savedFiles,
          isSaving: false,
        });
      }
    }

    this.handleClear = () => {
      const { [this.state.id]: id, ...files } = this.state.files;
      localStorage.setItem('markdown-editor', JSON.stringify(files));

      this.setState({ files })
      this.setState(this.initialState());
      this.textarea.focus();
    }

    this.handleCreate = () => {
      this.setState(this.initialState());
      this.textarea.focus();
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileID) => () => {
      this.setState({
        title: this.state.files[fileID].title,
        value: this.state.files[fileID].content,
        id: fileID
      })
    }

    this.handleMenu = () => {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      })
    }

    this.previewMobile = () => {
      this.setState({
        isPreviewOpenMobile: !this.state.isPreviewOpenMobile
      })
    }
  }

  componentDidMount() {
    const files = JSON.parse(localStorage.getItem('markdown-editor'));
    this.setState({  files  })
  }

  componentDidUpdate() {
    clearInterval(this.timer);
    this.timer = setTimeout(this.handleSave, 500);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
      <GlobalStyle />
     <MarkDownEditor 
      value={this.state.value} 
      isSaving={this.state.isSaving}

      handleChange={this.handleChange}
      getMarkup={this.getMarkup}
      handleClear={this.handleClear}
      handleCreate={this.handleCreate}
      textareaRef={this.textareaRef}

      files={this.state.files}
      handleOpenFile={this.handleOpenFile}
      title={this.state.title}

      isMenuOpen={this.state.isMenuOpen}
      handleMenu={this.handleMenu}
      
      handlePreviewMobile={this.previewMobile}
      isPreviewMobileOpen={this.state.isPreviewOpenMobile}
    />
    </>
    )
  }
}

export default App;