import React from 'react'

const GenerateModalButton = ({handleOpen,content}) => {
  return (
    <div onClick={handleOpen}>
        {content}
    </div>
  )
}

export default GenerateModalButton