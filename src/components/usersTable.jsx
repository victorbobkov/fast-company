import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import QualitiesList from './QualitiesList'
import Table from './Table'
import Name from './name'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const UsersTable = ({
   users,
   onSort,
   selectedSort,
   onToggleBookmark,
   onDelete
}) => {
   const columns = {
      name: {
         name: "Имя",
         path: "name",
         component: (user) => <Name name={user.name} id={user._id} />
      },
      qualities: {name: 'Качества', component: (user) => (<QualitiesList qualities={user.qualities} />)},
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
               onToggleBookmark={onToggleBookmark}
               id={user._id}
               status={user.bookmark}
            />
         )
      },
      delete: {
         component: (user) => (
            <button
               onClick={() => onDelete(user._id)}
               className="btn btn-danger"
            >
               Удалить
            </button>
         )
      }
   }
   return (
      <Table
         onSort={onSort}
         selectedSort={selectedSort}
         columns={columns}
         data={users}
      >
         <TableHeader {...{onSort, selectedSort, columns}} />
         <TableBody {...{columns, data: users}} />
      </Table>
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