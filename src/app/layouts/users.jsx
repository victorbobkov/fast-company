import React from "react"
import { useParams } from "react-router-dom"
import UserPage from "../components/page/userPage/userPage"
import UsersListPage from "../components/page/usersListPage/usersListPage"
import EditUserPage from '../components/page/editUserPage'

const Users = () => {
    const {userId, edit} = useParams()

    return (
       <>
           {userId && edit ? <EditUserPage /> : userId ? <UserPage /> : <UsersListPage />}
       </>
    )
}

export default Users