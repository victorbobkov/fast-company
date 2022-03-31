import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getDataStatus, loadUsersList } from '../../../store/users'

const UsersLoader = () => {
    const dataStatus = useSelector(getDataStatus())
    const dispatch = useDispatch()
    useEffect(() => {
        if (!dataStatus) dispatch(loadUsersList())
    }, [])
    if (!dataStatus) return "Loading"
    return children
}

UsersLoader.PropTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default UsersLoader