import React, {useState} from 'react'
import Users from './components/Users'
import API from './api'
import SearchStatus from './components/SearchStatus'

const App = () => {
   const [users, setUsers] = useState(API.users.fetchAll())

   const handleDelete = (userId) => {
      setUsers((state) => {
         return state.filter(({ _id }) => _id !== userId)
      })
   }

   const handleToggleBookmark = (userId) => {
      const newUsers = [...users]
      const index = newUsers.findIndex((user) => user._id === userId)
      newUsers[index].status = !newUsers[index].status
      setUsers(newUsers)
   }

   return (
      <div className="container mt-5">
         <SearchStatus length={users.length} />
         <Users
            users={users}
            onDelete={handleDelete}
            onToggleBookmark={handleToggleBookmark}
         />
      </div>
   )
}

export default App