import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import User from './user'
import {paginate} from '../utils/paginate'
import Pagination from './Pagination'
import GroupList from './groupList'
import SearchStatus from './SearchStatus'
import TableHead from './TableHead'


const Users = ({users: allUsers, onDelete, onToggleBookmark}) => {
   const [currentPage, setCurrentPage] = useState(1)
   const [professions, setProfessions] = useState()
   const [selectedProf, setSelectedProf] = useState()
   const pageSize = 4

   useEffect(() => {
      api.professions.fetchAll().then((data) => setProfessions(data))
   }, [])

   const handleProfessionSelect = (item) => {
      selectedProf(item)
   }

   const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex)
   }

   const filteredUsers = selectedProf
      ? allUsers.filter((user) => user.profession === selectedProf)
      : allUsers

   const length = filteredUsers.length

   const users = paginate(filteredUsers, currentPage, pageSize)

   const clearFilter = () => setSelectedProf()

   if (!users.length && currentPage) {
      handlePageChange(currentPage - 1)
   }

   const rows = users.map((user) => (
      <User
         key={user._id}
         {...user}
         onDelete={onDelete}
         onToggleBookmark={onToggleBookmark}
      />
   ))

   return (
      <>
         <SearchStatus length={length} />
         <div className='d-flex align-items-start'>
            {professions && (
               <div className='d-flex flex-column flex-shrink-0 pe-4'>
                  <GroupList
                     items={professions}
                     selectedItem={selectedProf}
                     onItemSelect={handleProfessionSelect}
                  />
                  <button className='btn btn-secondary mt-3' onClick={clearFilter}>
                     Очистить
                  </button>
               </div>
            )}
            <div className='d-flex flex-column'>
               {!!length && (
                  <table className='table'>
                     <thead>
                        <tr>
                           <TableHead />
                        </tr>
                     </thead>
                     <tbody>{rows}</tbody>
                  </table>
               )}
               <div className='d-flex justify-content-center'>
                  <Pagination
                     onPageChange={handlePageChange}
                     itemsCount={length}
                     currentPage={currentPage}
                     pageSize={pageSize}
                  />
               </div>
            </div>
         </div>
      </>
   )
}

Users.propTypes = {
   users: PropTypes.array.isRequired,
   onDelete: PropTypes.func.isRequired,
   onToggleBookmark: PropTypes.func.isRequired
}

export default Users