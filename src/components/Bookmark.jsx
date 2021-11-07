import React from "react"
import PropTypes from "prop-types"

export default function Bookmark ({onToggleBookmark, id, status}) {
  let classes = 'bi bi-bookmark'
   classes = status ? classes + '-heart-fill' : classes

   return (
      <span
         onClick={() => onToggleBookmark(id)}
         className='fs-4'
         role='button'
      >
         <i className={classes} />
      </span>
   )
}

Bookmark.propTypes = {
   status: PropTypes.bool,
   id: PropTypes.string,
   onToggleBookmark: PropTypes.func
}
