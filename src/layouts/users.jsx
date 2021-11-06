import React from 'react'
import {useParams} from 'react-router-dom'
import UserList from '../components/UserList'
import User from '../components/user'

const Users = () => {
  const {userId} = useParams()

   return (
      <>
         {userId ? <User /> : <UserList />}
      </>
   )
}

export default Users