import React from 'react'
import Bookmark from './Bookmark'
import Quality from './quality'

const User = ({_id, name, qualities, profession, completedMeetings, rate, onDelete, onToggleBookmark, status}) => {
   return (
      <tr>
         <td>{name}</td>
         <td>
            {qualities.map(({_id, ...rest}) => (
               <Quality key={_id} {...rest} />
            ))}
         </td>
         <td>{profession.name}</td>
         <td>{completedMeetings}</td>
         <td>{rate}/5</td>
         <td className="text-center">
            <Bookmark
               onToggleBookmark={onToggleBookmark}
               id={_id}
               status={status}
            />
         </td>
         <td>
            <button
               className="btn btn-danger"
               onClick={() => onDelete(_id)}>
               Удалить
            </button>
         </td>
      </tr>
   )
}

export default User