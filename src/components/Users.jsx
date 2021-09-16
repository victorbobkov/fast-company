import React from 'react'
import User from './User'
import Header from './Header'

const Users = ({ users, onDelete, onToggleBookmark }) => {
   const rows = users.map((user) => (
      <User
         key={user._id}
         {...user}
         onDelete={onDelete}
         onToggleBookmark={onToggleBookmark}
      />
   ))

   return (
      <div>
         {users.length && (
            <table className="table">
               <thead>
               <tr>
                  <Header />
               </tr>
               </thead>
               <tbody>{rows}</tbody>
            </table>
         )}
      </div>
   )
}

export default Users