import React, {useEffect, useState} from 'react'
import api from '../api'
import {useParams} from 'react-router-dom'
import UserCard from './UserCard'
import Loading from './Loading'

const User = () => {
   const {userId} = useParams()
   const [user, setUser] = useState()

   useEffect(() => {
      api.users.getById(userId).then((user) => setUser(user))
   }, [])

   return (
      <>
         {user ? <UserCard user={user} /> : <Loading />}
      </>
   )
}

export default User