import React from 'react'

// STYLE
import { Footer, Icons, Strong } from './style'

// ICON
import Facebook from '../../assets/face-icon.svg'
import GitHub from '../../assets/git-icon.svg'

export default () => {
  const faceLink = 'https://www.facebook.com/jhonatan.cunha.9/'
  const gitLink = 'https://github.com/jhonatancunha'

  return (
    <Footer>
      <Icons>
         <a href={gitLink}>
          <img src={GitHub} alt='My page on GitHub!' />
        </a>
        <a href={faceLink}>
          <img src={Facebook} alt='My profile on Facebook!' />
        </a>
      </Icons>
      <span>© 2020. <Strong>Jhonatan Cunha</Strong></span>
      </Footer>
  )
}