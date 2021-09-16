import React from 'react'

const Bookmark = ({onToggleBookmark, id, status}) => {

   let classes = 'bi bi-bookmark'
   classes = status ? classes + '-star-fill' : classes

   return (
      <span
         onClick={() => onToggleBookmark(id)}
         className="btn btn-bookmark"
      >
      <i className={classes} />
    </span>
   )
}

export default Bookmark