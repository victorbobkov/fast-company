import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import Bookmark from './Bookmark'

const UsersTable = ({
   users,
   onSort,
   selectedSort,
   onToggleBookmark,
   onDelete,
   ...rest
}) => {
   const columns = {
      name: {path: 'name', name: 'Имя'},
      qualities: {name: 'Качества'},
      professions: {path: 'profession.name', name: 'Профессия'},
      completedMeetings: {
         path: 'completedMeetings',
         name: 'Встретился, раз'
      },
      rate: {path: 'rate', name: 'Оценка'},
      bookmark: {
         path: 'bookmark',
         name: 'Избранное',
         component: (user) => (
            <Bookmark
               status={user.bookmark}
               onClick={() => onToggleBookmark(user._id)}
            />
         )
      },
      delete: {
         component: (user) => (
            <button
               onClick={() => onDelete(user._id)}
               className="btn btn-danger"
            >
               delete
            </button>
         )
      }
   }
   return (
      <table className="table">
         <TableHeader {...{onSort, selectedSort, columns}} />
         <TableBody {...{columns, data: users}} />
         {/*<tbody>*/}
         {/*{users.map((user) => (*/}
         {/*   <User {...rest} {...user} key={user._id}/>*/}
         {/*))}*/}
         {/*</tbody>*/}
      </table>
   )
}

UsersTable.propTypes = {
   users: PropTypes.array.isRequired,
   onSort: PropTypes.func.isRequired,
   selectedSort: PropTypes.object.isRequired,
   onToggleBookmark: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
}

export default UsersTable