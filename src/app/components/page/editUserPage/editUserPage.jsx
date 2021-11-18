import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import api from '../../../api'
import Loading from '../../common/Loading'
import EditForm from '../../ui/EditForm'

const EditUserPage = () => {
   const { userId } = useParams()
   const [user, setUser] = useState()

   useEffect(() => {
      api.users.getById(userId).then((data) => setUser(data))
   }, [])

   return (
      <>
         {user ? <EditForm user={user} /> : <Loading />}
      </>
   )
}

export default EditUserPage
