import React from 'react'
import User from './User'
import PropTypes from 'prop-types'

const UsersTable = ({users, onSort, ...rest}) => {
   return <table className="table">
      <thead>
      <tr>
         <th onClick={() => onSort('name')} scope="col">Имя</th>
         <th scope="col">Качества</th>
         <th onClick={() => onSort('profession.name')} scope="col">Профессия</th>
         <th onClick={() => onSort('completedMeetings')} scope="col">Встретился, раз</th>
         <th onClick={() => onSort('rate')} scope="col">Оценка</th>
         <th onClick={() => onSort('bookmark')} scope="col">Избранное</th>
         <th/>
      </tr>
      </thead>
      <tbody>
      {users.map((user) => (
         <User {...rest} {...user} key={user._id}/>
      ))}
      </tbody>
   </table>
}

UsersTable.propTypes = {
   users: PropTypes.array.isRequired,
   onSort: PropTypes.func.isRequired
}

export default UsersTable