import {createAction, createSlice} from '@reduxjs/toolkit'
import userService from '../services/user.service'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import getRandomInt from '../utils/getRandomInt'
import history from '../utils/history'

const usersSlice = createSlice({
   name: 'users',
   initialState: {
      entities: null,
      isLoading: true,
      error: null,
      auth: null,
      isLoggedIn: false
   },
   reducers: {
      usersRequested(state) {
         state.isLoading = true
      },
      usersReceived(state, action) {
         state.entities = action.payload
         state.isLoading = false
      },
      usersRequestFailed(state, action) {
         state.error = action.payload
         state.isLoading = false
      },
      authRequestSuccess: (state, action) => {
         state.auth = {...action.payload, isLoggedIn: true}
      },
      authRequestFailed: (state, action) => {
         state.error = action.payload
      },
      userCreated: (state, action) => {
         state.entities.push(action.payload)
      }
   }
})

const { reducer: usersReducer, actions } = usersSlice
const {
   usersRequested,
   usersReceived,
   usersRequestFailed,
   authRequestSuccess,
   authRequestFailed,
   userCreated,
} = actions

const authRequested = createAction('users/authRequested')
const userCreateRequested = createAction('users/userCreateRequested')
const createUserFailed = createAction('users/userCreateRequested')

export const logIn = ({ payload, redirect }) => async (dispatch) => {
   const { email, password } = payload
   dispatch(authRequested())
   try {
      const data = await authService.logIn({ email, password })
      dispatch(authRequestSuccess({ userId: data.localId }))
      localStorageService.setTokens(data)
      history.push(redirect)
   } catch (error) {
      dispatch(authRequestFailed(error.message))
   }
}

export const signUp =
   ({ email, password, ...rest }) =>
      async (dispatch) => {
   dispatch(authRequested())
   try {
      const data = await authService.register({ email, password })
      localStorageService.setTokens(data)
      dispatch(authRequestSuccess({ userId: data.localId }))
      dispatch(createUser({
         _id: data.localId,
         email,
         rate: getRandomInt (1, 5),
         completedMeetings: getRandomInt (0, 200),
         image: `https://avatars.dicebear.com/api/avataaars/${(
             Math.random() + 1
         )
             .toString(36)
             .substring(7)}.svg`,
         ...rest
     }))
   } catch (e) {
      dispatch(authRequestFailed(e.message))
   }
}

function createUser(payload) {
   return async function(dispatch) {
      dispatch(userCreateRequested())
      try {
         const { content } = await userService.create(payload)
         dispatch(userCreated(content))
         history.push('/users')
      } catch (error) {
         dispatch(createUserFailed(error.message))
      }
   }
}

export const loadUsersList = () => async (dispatch) => {
   dispatch(usersRequested())
   try {
      const { content } = await userService.get()
      dispatch(usersReceived(content))
   } catch (e) {
      dispatch(usersRequestFailed(e.message))
   }
}

export const getUsersList = () => (state) => state.users.entities

export const getUserById = (userId) => state => {
   if (state.users.entities) {
      return state.users.entities.find((u) => u._id === userId)
   }
}

export default usersReducer
