import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import {useAuth} from './useAuth'
import {useParams} from 'react-router'
import {nanoid} from 'nanoid'

const CommentsContext = React.createContext()

export const useComments = () => {
   return useContext(CommentsContext)
}

export const CommentsProvider = ({ children }) => {
   const { userId } = useParams()
   const { currentUser } = useAuth()
   // const [isLoading, setLoading] = useState(true)
   const [comments, setComments] = useState([])
   // const [error, setError] = useState(null)

   useEffect(() => {
      setComments(null)
   }, [])

   async function createComment(data) {
      const comment = {
         ...data,
         _id: nanoid(),
         pageId: userId,
         created_at: Date.now(),
         userId: currentUser._id,
      }
      console.log(comment)
   }

   return (
      <CommentsContext.Provider value={{ comments, createComment }}>
         {children}
      </CommentsContext.Provider>
   )
}

CommentsProvider.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
}
