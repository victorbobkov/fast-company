import React, {useState} from 'react'
import Pagination from './Pagination'
import {paginate} from '../utils/paginate'
import User from './User'
import Header from './Header'

const Users = ({ users, onDelete, onToggleBookmark }) => {
   const count = users.length
   const pageSize = 4
   const [currentPage, setCurrentPage] = useState(1)
   const handlePageChange = (pageIndex) => {
      console.log('page', pageIndex)
      setCurrentPage(pageIndex)
   }
   const userCrop = paginate(users, currentPage, pageSize)

   const rows = userCrop.map((user) => (
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
         <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
         />
      </div>
   )
}

export default Users