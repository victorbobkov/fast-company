import React, {useState} from 'react'
import Users from './components/Users'
import api from './api'
import SearchStatus from './components/SearchStatus'

const App = () => {
   const [users, setUsers] = useState(api.users.fetchAll())
   const handleDelete = (userId) => {
      setUsers(users.filter((user) => user._id !== userId))
   }
   const handleToggleBookmark = (id) => {
      setUsers(
         users.map((user) => {
            if (user._id === id) {
               return { ...user, bookmark: !user.bookmark }
            }
            return user;
         })
      )
      console.log(id)
   }

   return (
      <div>
         <SearchStatus length={users.length} />
         <Users
            onDelete={handleDelete}
            onToggleBookmark={handleToggleBookmark}
            users={users}
         />
      </div>
   )
}

export default App