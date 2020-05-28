import React from 'react'
import PropTypes from 'prop-types'



const Files = ({ handleOpenFile, files }) => {
  return (
    <div className="wrapper">
      <ul>
        {Object.keys(files).map((fileID) => (
          <li key={fileID}>
            <button onClick={handleOpenFile(fileID)}>{files[fileID].title}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

Files.propTypes = {
  handleOpenFile: PropTypes.func.isRequired,
  files: PropTypes.object.isRequired
}

export default Files;