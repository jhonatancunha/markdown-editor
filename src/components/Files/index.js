import React from 'react'



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

export default Files;