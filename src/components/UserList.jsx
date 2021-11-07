import React, {useState, useEffect} from 'react'
import api from '../api'
import PropTypes from 'prop-types'
import UsersTable from './usersTable'
import Pagination from './Pagination'
import GroupList from './groupList'
import {paginate} from '../utils/paginate'
import SearchStatus from './SearchStatus'
import _ from 'lodash'
import Loading from './Loading'

const UserList = () => {
   const [currentPage, setCurrentPage] = useState(1)
   const [professions, setProfessions] = useState()
   const [selectedProf, setSelectedProf] = useState()
   const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
   const [users, setUsers] = useState()
   const pageSize = 8;

   useEffect(() => {
      api.users.fetchAll().then((data) => setUsers(data));
   }, [])

   const handleDelete = (userId) => {
      setUsers((state) => state.filter(({ _id }) => _id !== userId));
   }

   const handleToggleBookmark = (userId) => {
      const newUsers = [...users]
      const index = newUsers.findIndex((user) => user._id === userId)
      newUsers[index].bookmark = !newUsers[index].bookmark
      setUsers(newUsers)
   }

   useEffect(() => {
      api.professions.fetchAll().then((data) => setProfessions(data));
   }, [])

   useEffect(() => {
      setCurrentPage(1);
   }, [selectedProf])

   const handleProfessionsSelect = (item) => {
     setSelectedProf(item)
   }

   const handlePageChange = (pageIndex) => {
     setCurrentPage(pageIndex)
   }

   const handleSort = (item) => {
      setSortBy(item)
   }

   if (users) {
      const filteredUsers = selectedProf
         ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
         : users

      const length = filteredUsers.length

      const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])

      const usersCrop = paginate(sortedUsers, currentPage, pageSize)

      const clearFilter = () => {
         setSelectedProf()
      }

      if (!usersCrop.length && currentPage) {
         handlePageChange(currentPage - 1)
      }

      return (
         <div>
            <SearchStatus length={length} />
            <div className='d-flex align-items-start'>
               {professions && (
                  <div className='d-flex flex-column flex-shrink-0 pe-4'>
                     <GroupList
                        items={professions}
                        selectedItem={selectedProf}
                        onItemSelect={handleProfessionsSelect}
                     />
                     <button className='btn btn-secondary mt-3' onClick={clearFilter}>
                        Очистить
                     </button>
                  </div>
               )}
               <div className='d-flex flex-column'>
                  {!!length && (
                     <UsersTable
                        selectedSort={sortBy}
                        onDelete={handleDelete}
                        users={usersCrop}
                        onToggleBookmark={handleToggleBookmark}
                        onSort={handleSort}
                     />
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
         </div>
      )
   }
   return (
      <Loading />
   )
}

UserList.propTypes = {
   users: PropTypes.array,
   onDelete: PropTypes.func,
   onToggleBookmark: PropTypes.func,
   getData: PropTypes.func
}

export default UserList